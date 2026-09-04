import './assets/main.css'

import { ViteSSG } from 'vite-ssg/single-page'

import App from './App.vue'

const revealObservers = new WeakMap<HTMLElement, IntersectionObserver>()

export const createApp = ViteSSG(
  App,
  ({ app }) => {
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
  },
  { useHead: false }
)
