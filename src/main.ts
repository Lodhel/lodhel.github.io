import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'

const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
if (canonical) canonical.href = `${window.location.origin}${import.meta.env.BASE_URL}`

const app = createApp(App)

const revealObservers = new WeakMap<HTMLElement, IntersectionObserver>()

app.directive('reveal', {
  mounted(element: HTMLElement) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.classList.add('is-visible')
      return
    }

    element.classList.add('reveal')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        element.classList.add('is-visible')
        observer.disconnect()
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    )

    observer.observe(element)
    revealObservers.set(element, observer)
  },
  unmounted(element: HTMLElement) {
    revealObservers.get(element)?.disconnect()
    revealObservers.delete(element)
  }
})

app.mount('#app')
