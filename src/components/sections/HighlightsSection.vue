<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { engineeringAreas } from '@/data/engineeringAreas'

const activeArea = ref<string | null>(null)
const pinnedArea = ref<string | null>(null)

const openArea = (areaNumber: string) => {
  if (pinnedArea.value !== areaNumber) {
    pinnedArea.value = null
  }

  activeArea.value = areaNumber
}

const closeArea = (areaNumber: string) => {
  if (activeArea.value === areaNumber && pinnedArea.value !== areaNumber) {
    activeArea.value = null
  }
}

const toggleArea = (areaNumber: string) => {
  if (pinnedArea.value === areaNumber) {
    pinnedArea.value = null
    activeArea.value = null
    return
  }

  pinnedArea.value = areaNumber
  activeArea.value = areaNumber
}

const isAreaOpen = (areaNumber: string) =>
  activeArea.value === areaNumber || pinnedArea.value === areaNumber

const closeAll = () => {
  activeArea.value = null
  pinnedArea.value = null
}

const handleOutsidePointer = (event: PointerEvent) => {
  const target = event.target

  if (target instanceof Element && !target.closest('.highlight')) {
    closeAll()
  }
}

onMounted(() => document.addEventListener('pointerdown', handleOutsidePointer))
onUnmounted(() => document.removeEventListener('pointerdown', handleOutsidePointer))
</script>

<template>
  <section
    class="highlights section--bordered decorated-section decorated-section--compact"
    aria-label="Ключевые направления"
    @keydown.esc="closeAll"
  >
    <div class="highlights__grid container">
      <article
        v-for="area in engineeringAreas"
        :key="area.number"
        class="highlight"
        :class="{ 'highlight--open': isAreaOpen(area.number) }"
        @mouseenter="openArea(area.number)"
        @mouseleave="closeArea(area.number)"
        @click="toggleArea(area.number)"
      >
        <button
          class="highlight__trigger"
          type="button"
          :aria-label="`${isAreaOpen(area.number) ? 'Скрыть' : 'Показать'} технологии направления ${area.title}`"
          :aria-expanded="isAreaOpen(area.number)"
          :aria-controls="`highlight-technologies-${area.number}`"
          @focus="openArea(area.number)"
          @blur="closeArea(area.number)"
        ></button>
        <span class="highlight__number">{{ area.number }}</span>
        <div class="highlight__summary">
          <h2>{{ area.title }}</h2>
          <p>{{ area.level }}</p>
        </div>

        <div
          :id="`highlight-technologies-${area.number}`"
          class="highlight__popover"
          :aria-hidden="!isAreaOpen(area.number)"
          @click.stop
        >
          <div v-for="group in area.groups" :key="group.title" class="highlight__group">
            <h3>{{ group.title }}</h3>
            <ul class="tag-list">
              <li v-for="technology in group.technologies" :key="technology" class="tag">
                {{ technology }}
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.highlights {
  z-index: 5;
  overflow: visible;
}
.highlights::before,
.highlights::after {
  inset: 0;
}
.highlights__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.highlight {
  position: relative;
  display: flex;
  min-width: 0;
  gap: 14px;
  padding: 25px clamp(15px, 2vw, 28px);
  border-right: 1px solid var(--line);
  cursor: pointer;
}
.highlight--open {
  z-index: 2;
}
.highlight__trigger {
  position: absolute;
  inset: 0;
  z-index: 1;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}
.highlight:first-child {
  padding-left: 0;
}
.highlight:last-child {
  border-right: 0;
  padding-right: 0;
}
.highlight__number {
  padding-top: 4px;
  color: var(--accent);
  font-size: 0.61rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}
.highlight__summary {
  min-width: 0;
}
.highlight h2 {
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
  line-height: 1.3;
}
.highlight__summary p {
  overflow: hidden;
  margin: 4px 0 0;
  color: var(--text-dim);
  font-size: 0.73rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.highlight__popover {
  position: absolute;
  top: calc(100% - 7px);
  left: 50%;
  z-index: 2;
  width: min(360px, calc(100vw - 40px));
  padding: 20px;
  visibility: hidden;
  border: 1px solid var(--line-strong);
  border-radius: 12px;
  background: rgba(13, 19, 26, 0.97);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.45);
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, 8px);
  transition:
    opacity 180ms ease,
    transform 180ms ease,
    visibility 180ms ease;
  backdrop-filter: blur(18px);
}
.highlight--open .highlight__popover {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, 0);
}
.highlight:first-child .highlight__popover {
  left: 0;
  transform: translate(0, 8px);
}
.highlight:first-child.highlight--open .highlight__popover {
  transform: translate(0, 0);
}
.highlight:last-child .highlight__popover {
  right: 0;
  left: auto;
  transform: translate(0, 8px);
}
.highlight:last-child.highlight--open .highlight__popover {
  transform: translate(0, 0);
}
.highlight__group + .highlight__group {
  margin-top: 17px;
}
.highlight__group h3 {
  margin: 0 0 8px;
  color: var(--text-dim);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.highlight__popover .tag {
  background: rgba(255, 255, 255, 0.025);
  font-size: 0.72rem;
}
@media (max-width: 900px) {
  .highlights__grid {
    grid-template-columns: 1fr 1fr;
  }
  .highlight:nth-child(2) {
    border-right: 0;
  }
  .highlight:nth-child(n + 3) {
    border-top: 1px solid var(--line);
  }
  .highlight:nth-child(3) {
    padding-left: 0;
  }
  .highlight:nth-child(odd) .highlight__popover {
    right: auto;
    left: 0;
    transform: translate(0, 8px);
  }
  .highlight:nth-child(odd).highlight--open .highlight__popover {
    transform: translate(0, 0);
  }
  .highlight:nth-child(even) .highlight__popover {
    right: 0;
    left: auto;
    transform: translate(0, 8px);
  }
  .highlight:nth-child(even).highlight--open .highlight__popover {
    transform: translate(0, 0);
  }
}
@media (max-width: 520px) {
  .highlights__grid {
    grid-template-columns: 1fr;
  }
  .highlight {
    padding: 19px 0;
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }
  .highlight:nth-child(n + 3) {
    border-top: 0;
  }
  .highlight:last-child {
    border-bottom: 0;
  }
  .highlight__popover,
  .highlight:nth-child(odd) .highlight__popover,
  .highlight:nth-child(even) .highlight__popover {
    right: 0;
    left: 0;
    width: 100%;
    transform: translate(0, 8px);
  }
  .highlight--open .highlight__popover,
  .highlight:nth-child(odd).highlight--open .highlight__popover,
  .highlight:nth-child(even).highlight--open .highlight__popover {
    transform: translate(0, 0);
  }
}
</style>
