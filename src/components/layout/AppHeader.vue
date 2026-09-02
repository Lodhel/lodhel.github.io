<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import { navigation, profile } from '@/data/profile'

const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}
const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeMenu()
}

watch(isOpen, (value) => {
  document.body.classList.toggle('menu-open', value)
  if (value) window.addEventListener('keydown', onKeydown)
  else window.removeEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.body.classList.remove('menu-open')
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header class="header">
    <div class="header__inner container">
      <a class="brand" href="#top" aria-label="В начало страницы">
        <span class="brand__name">{{ profile.name }}</span>
      </a>

      <nav class="desktop-nav" aria-label="Основная навигация">
        <a v-for="item in navigation" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>

      <button
        class="menu-button"
        type="button"
        :aria-expanded="isOpen"
        aria-controls="mobile-navigation"
        :aria-label="isOpen ? 'Закрыть меню' : 'Открыть меню'"
        @click="isOpen = !isOpen"
      >
        <span :class="{ 'is-open': isOpen }"></span>
        <span :class="{ 'is-open': isOpen }"></span>
      </button>
    </div>

    <Transition name="menu">
      <div v-if="isOpen" id="mobile-navigation" class="mobile-panel">
        <nav class="mobile-nav container" aria-label="Мобильная навигация">
          <a
            v-for="(item, index) in navigation"
            :key="item.href"
            :href="item.href"
            @click="closeMenu"
          >
            <span>0{{ index + 1 }}</span
            >{{ item.label }}
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 40;
  height: var(--header-height);
  border-bottom: 1px solid var(--line);
  background: rgba(9, 12, 16, 0.84);
  backdrop-filter: blur(18px);
}
.header__inner {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.brand {
  display: inline-flex;
  align-items: center;
  font-weight: 700;
}
.brand__name {
  font-size: 0.92rem;
}
.desktop-nav {
  display: flex;
  align-items: center;
  gap: clamp(16px, 2vw, 28px);
}
.desktop-nav a {
  color: var(--text-muted);
  font-size: 0.77rem;
  font-weight: 600;
  transition: color 180ms ease;
}
.desktop-nav a:hover {
  color: var(--text);
}
.menu-button {
  display: none;
  width: 42px;
  height: 42px;
  padding: 0 10px;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: transparent;
  color: var(--text);
  cursor: pointer;
}
.menu-button span {
  display: block;
  width: 20px;
  height: 1px;
  margin: 6px 0;
  background: currentColor;
  transition: transform 180ms ease;
}
.menu-button span:first-child.is-open {
  transform: translateY(3.5px) rotate(45deg);
}
.menu-button span:last-child.is-open {
  transform: translateY(-3.5px) rotate(-45deg);
}
.mobile-panel {
  position: fixed;
  inset: var(--header-height) 0 0;
  background: rgba(9, 12, 16, 0.98);
}
.mobile-nav {
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}
.mobile-nav a {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 18px 0;
  border-bottom: 1px solid var(--line);
  font-family: 'Source Sans Pro', sans-serif;
  font-size: clamp(1.4rem, 7vw, 2rem);
  font-weight: 600;
}
.mobile-nav a span {
  color: var(--accent);
  font-family: 'Open Sans Variable', sans-serif;
  font-size: 0.68rem;
  letter-spacing: 0.1em;
}
.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
@media (max-width: 940px) {
  .desktop-nav {
    display: none;
  }
  .menu-button {
    display: block;
  }
}
@media (max-width: 420px) {
  .brand__name {
    display: none;
  }
}
</style>
