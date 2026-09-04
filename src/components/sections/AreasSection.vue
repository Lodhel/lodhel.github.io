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
              <svg viewBox="0 0 600 360" focusable="false">
                <g class="diagram-network">
                  <path class="diagram-edge" d="M150 95 C230 105 300 135 380 175" />
                  <path class="diagram-edge" d="M380 175 C340 230 285 255 230 265" />
                  <path class="diagram-edge" d="M150 95 C140 185 170 240 230 265" />

                  <path
                    class="diagram-signal diagram-signal--one"
                    d="M150 95 C230 105 300 135 380 175"
                  />
                  <path
                    class="diagram-signal diagram-signal--two"
                    d="M380 175 C340 230 285 255 230 265"
                  />
                  <path
                    class="diagram-signal diagram-signal--three"
                    d="M150 95 C140 185 170 240 230 265"
                  />

                  <g class="diagram-node diagram-node--one">
                    <circle class="diagram-node-ring" cx="150" cy="95" r="18" />
                    <circle class="diagram-node-core" cx="150" cy="95" r="8" />
                  </g>
                  <g class="diagram-node diagram-node--two">
                    <circle class="diagram-node-ring" cx="380" cy="175" r="23" />
                    <circle class="diagram-node-core" cx="380" cy="175" r="11" />
                  </g>
                  <g class="diagram-node diagram-node--three">
                    <circle class="diagram-node-ring" cx="230" cy="265" r="18" />
                    <circle class="diagram-node-core" cx="230" cy="265" r="8" />
                  </g>
                </g>
              </svg>
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
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, rgba(143, 227, 194, 0.08), transparent 48%);
}
.area-card__diagram::before {
  position: absolute;
  top: 16%;
  left: 22%;
  width: 46%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: rgba(92, 177, 217, 0.09);
  filter: blur(42px);
  content: '';
  animation: diagram-glow-drift 7s ease-in-out infinite;
}
.area-card__diagram svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.diagram-network {
  transform-box: view-box;
  transform-origin: center;
  animation: diagram-network-float 7.5s ease-in-out infinite;
}
.diagram-edge,
.diagram-signal {
  fill: none;
  stroke-linecap: round;
}
.diagram-edge {
  stroke: rgba(143, 227, 194, 0.28);
  stroke-width: 2;
}
.diagram-signal {
  stroke: var(--accent-strong);
  stroke-width: 3;
  stroke-dasharray: 12 62;
  filter: drop-shadow(0 0 5px rgba(143, 227, 194, 0.75));
  animation: diagram-signal-flow 2.8s linear infinite;
}
.diagram-signal--two {
  animation-delay: -0.95s;
}
.diagram-signal--three {
  animation-delay: -1.9s;
}
.diagram-node {
  transform-box: fill-box;
  transform-origin: center;
  animation: diagram-node-drift 4.8s ease-in-out infinite;
}
.diagram-node--one {
  --node-x: -5px;
  --node-y: 4px;
}
.diagram-node--two {
  --node-x: 6px;
  --node-y: -5px;
  animation-delay: -1.6s;
}
.diagram-node--three {
  --node-x: 4px;
  --node-y: 6px;
  animation-delay: -3.2s;
}
.diagram-node-core {
  fill: #0d1319;
  stroke: var(--accent);
  stroke-width: 3;
  transform-box: fill-box;
  transform-origin: center;
  animation: diagram-core-pulse 2.4s ease-in-out infinite;
}
.diagram-node--two .diagram-node-core {
  animation-delay: -0.8s;
}
.diagram-node--three .diagram-node-core {
  animation-delay: -1.6s;
}
.diagram-node-ring {
  fill: none;
  stroke: var(--accent);
  stroke-width: 2;
  transform-box: fill-box;
  transform-origin: center;
  animation: diagram-ring-pulse 2.4s ease-out infinite;
}
.diagram-node--two .diagram-node-ring {
  animation-delay: -0.8s;
}
.diagram-node--three .diagram-node-ring {
  animation-delay: -1.6s;
}
.area-card:nth-child(2) .diagram-network {
  animation-delay: -1.8s;
}
.area-card:nth-child(3) .diagram-network {
  animation-delay: -3.6s;
}
.area-card:nth-child(4) .diagram-network {
  animation-delay: -5.4s;
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
@keyframes diagram-glow-drift {
  0%,
  100% {
    opacity: 0.55;
    transform: translate3d(-8%, -4%, 0) scale(0.88);
  }
  50% {
    opacity: 1;
    transform: translate3d(18%, 10%, 0) scale(1.18);
  }
}
@keyframes diagram-network-float {
  0%,
  100% {
    transform: translate3d(-4px, 3px, 0) rotate(-0.5deg);
  }
  50% {
    transform: translate3d(6px, -5px, 0) rotate(0.7deg);
  }
}
@keyframes diagram-node-drift {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(var(--node-x), var(--node-y));
  }
}
@keyframes diagram-core-pulse {
  0%,
  100% {
    filter: drop-shadow(0 0 2px rgba(143, 227, 194, 0.45));
    transform: scale(0.88);
  }
  50% {
    filter: drop-shadow(0 0 11px rgba(143, 227, 194, 0.95));
    transform: scale(1.2);
  }
}
@keyframes diagram-ring-pulse {
  0% {
    opacity: 0.7;
    transform: scale(0.55);
  }
  75%,
  100% {
    opacity: 0;
    transform: scale(1.55);
  }
}
@keyframes diagram-signal-flow {
  to {
    stroke-dashoffset: -74;
  }
}
@media (prefers-reduced-motion: reduce) {
  .area-card__diagram::before,
  .diagram-network,
  .diagram-node,
  .diagram-node-core,
  .diagram-node-ring,
  .diagram-signal {
    animation: none;
  }
  .diagram-node-ring {
    opacity: 0.3;
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
