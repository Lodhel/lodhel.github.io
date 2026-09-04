<script setup lang="ts">
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { engineeringAreas } from '@/data/engineeringAreas'
</script>

<template>
  <section
    id="areas"
    class="section areas decorated-section decorated-section--mint"
  >
    <div v-reveal class="container">
      <SectionTitle
        eyebrow="Компетенции"
        description="Технологии и инструменты, с которыми я работаю в backend, инфраструктуре, AI/LLM и frontend."
      />

      <div class="areas__list">
        <article
          v-for="(area, index) in engineeringAreas"
          :key="area.number"
          class="area-card"
        >
          <div class="area-card__visual" :data-index="area.number">
            <div class="area-card__diagram" aria-hidden="true">
              <span></span><span></span><span></span><i></i><i></i>
            </div>
            <span class="area-card__category">{{ area.level }}</span>
          </div>

          <div class="area-card__content">
            <div class="area-card__meta">
              <span>Направление</span>
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
            </div>

            <h3 class="card-title">
              {{ area.title }}
            </h3>

            <p class="area-card__description">
              {{ area.description }}
            </p>

            <div class="area-card__groups">
              <div
                v-for="group in area.groups"
                :key="group.title"
                class="area-card__group"
              >
                <h4 class="area-card__group-title">
                  {{ group.title }}
                </h4>

                <ul class="tag-list">
                  <li
                    v-for="technology in group.technologies"
                    :key="technology"
                    class="tag"
                  >
                    {{ technology }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.areas {
  border-block: 1px solid var(--line);
}
.areas__list {
  display: grid;
  gap: 28px;
}
.area-card {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  min-height: 390px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--surface);
  transition:
    border-color 220ms ease,
    box-shadow 220ms ease;
}
.area-card:hover {
  border-color: var(--line-strong);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.16);
}
.area-card__visual {
  position: relative;
  min-height: 310px;
  overflow: hidden;
  border-right: 1px solid var(--line);
  background: #0d1319;
}
.area-card:nth-child(even) .area-card__visual {
  order: 2;
  border-right: 0;
  border-left: 1px solid var(--line);
}
.area-card__visual::before {
  position: absolute;
  top: 18px;
  left: 20px;
  z-index: 2;
  color: rgba(240, 244, 247, 0.22);
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  content: attr(data-index);
}
.area-card__diagram {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(143, 227, 194, 0.08), transparent 48%);
}
.area-card__diagram span {
  position: absolute;
  width: 11px;
  height: 11px;
  border: 2px solid var(--accent);
  border-radius: 50%;
  background: #0d1319;
  transform-origin: center;
  animation: diagram-node-pulse 2.7s ease-in-out infinite;
  will-change: transform, box-shadow;
}
.area-card__diagram span:nth-child(1) {
  top: 28%;
  left: 25%;
}
.area-card__diagram span:nth-child(2) {
  top: 48%;
  left: 63%;
  width: 15px;
  height: 15px;
  animation-delay: -0.9s;
}
.area-card__diagram span:nth-child(3) {
  top: 70%;
  left: 38%;
  animation-delay: -1.8s;
}
.area-card__diagram i {
  position: absolute;
  top: 39%;
  left: 28%;
  width: 38%;
  height: 1px;
  background: linear-gradient(90deg, var(--accent), rgba(143, 227, 194, 0.15));
  transform: rotate(18deg);
  transform-origin: left;
}
.area-card__diagram i:last-child {
  top: 67%;
  left: 39%;
  width: 27%;
  transform: rotate(-44deg);
}
.area-card__diagram i::after {
  position: absolute;
  top: -1px;
  left: 0;
  width: 28%;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, var(--accent-strong), transparent);
  box-shadow: 0 0 8px rgba(143, 227, 194, 0.8);
  content: '';
  opacity: 0;
  transform: translateX(-120%);
  animation: diagram-signal-flow 2.5s ease-in-out infinite;
  will-change: transform, opacity;
}
.area-card__diagram i:last-child::after {
  animation-delay: -1.25s;
}
.area-card__category {
  position: absolute;
  right: 16px;
  bottom: 16px;
  left: 16px;
  padding: 10px 12px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: rgba(9, 12, 16, 0.72);
  color: var(--text-muted);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  backdrop-filter: blur(10px);
}
.area-card__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(28px, 4vw, 50px);
}
.area-card__meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  color: var(--accent);
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}
.card-title {
  font-size: clamp(1.7rem, 3vw, 2.45rem);
}
.area-card__description {
  max-width: 570px;
  margin: 18px 0 24px;
  color: var(--text-muted);
}
.area-card__groups {
  display: grid;
  gap: 18px;
}
.area-card__group-title {
  margin: 0 0 9px;
  color: var(--text-dim);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}
@keyframes diagram-node-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(143, 227, 194, 0);
    transform: scale(1);
  }
  42% {
    box-shadow:
      0 0 0 8px rgba(143, 227, 194, 0.13),
      0 0 20px rgba(143, 227, 194, 0.65);
    transform: scale(1.35);
  }
  68% {
    box-shadow: 0 0 0 0 rgba(143, 227, 194, 0);
    transform: scale(1);
  }
}
@keyframes diagram-signal-flow {
  0% {
    opacity: 0;
    transform: translateX(-120%);
  }
  18% {
    opacity: 1;
  }
  78% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(360%);
  }
}
@media (prefers-reduced-motion: reduce) {
  .area-card__diagram span {
    animation-duration: 2.7s !important;
    animation-iteration-count: infinite !important;
  }
  .area-card__diagram i::after {
    animation-duration: 2.5s !important;
    animation-iteration-count: infinite !important;
  }
}
@media (max-width: 760px) {
  .area-card {
    grid-template-columns: 1fr;
  }
  .area-card__visual,
  .area-card:nth-child(even) .area-card__visual {
    order: initial;
    min-height: 260px;
    border-right: 0;
    border-bottom: 1px solid var(--line);
    border-left: 0;
  }
  .area-card__content {
    padding: 28px 24px 32px;
  }
}
</style>
