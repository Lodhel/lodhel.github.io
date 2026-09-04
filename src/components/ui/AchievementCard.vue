<script setup lang="ts">
import { computed } from 'vue'
import type { Achievement } from '@/types/content'

const props = defineProps<{ achievement: Achievement; index: number }>()
defineEmits<{ openCertificate: [achievement: Achievement] }>()

const isPdf = computed(() => props.achievement.certificateImage?.toLowerCase().includes('.pdf'))
</script>

<template>
  <article class="achievement-card">
    <button
      v-if="achievement.certificateImage"
      class="achievement-card__preview"
      type="button"
      :aria-label="`Открыть диплом: ${achievement.title}`"
      @click="$emit('openCertificate', achievement)"
    >
      <img
        v-if="!isPdf"
        :src="achievement.certificateImage"
        :alt="`Превью диплома: ${achievement.title}`"
        :width="achievement.certificateImageWidth"
        :height="achievement.certificateImageHeight"
        loading="lazy"
        decoding="async"
      />
      <div v-else class="achievement-card__pdf" aria-hidden="true">
        <span>PDF</span><i></i><i></i><i></i>
      </div>
      <span class="achievement-card__open">Открыть ↗</span>
    </button>
    <div
      v-else
      class="achievement-card__preview achievement-card__preview--empty"
      aria-hidden="true"
    >
      <span>{{ String(index + 1).padStart(2, '0') }}</span>
    </div>

    <div class="achievement-card__content">
      <div class="achievement-card__meta">
        <span>{{ achievement.result }}</span
        ><time>{{ achievement.year }}</time>
      </div>
      <h3 class="card-title">{{ achievement.title }}</h3>
      <p class="achievement-card__event">{{ achievement.event }}</p>
      <p v-if="achievement.organizers" class="achievement-card__organizers">
        {{ achievement.organizers }}
      </p>
      <p>{{ achievement.description }}</p>
      <a
        v-if="achievement.externalUrl"
        class="text-link"
        :href="achievement.externalUrl"
        target="_blank"
        rel="noopener noreferrer"
        >Подробнее ↗</a
      >
    </div>
  </article>
</template>

<style scoped>
.achievement-card {
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr);
  min-height: 205px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(17, 23, 31, 0.72);
  transition:
    border-color 180ms ease,
    transform 180ms ease;
}
.achievement-card:hover {
  border-color: var(--line-strong);
  transform: translateY(-3px);
}
.achievement-card__preview {
  position: relative;
  min-height: 100%;
  overflow: hidden;
  border: 0;
  border-right: 1px solid var(--line);
  background: #0c1117;
  cursor: pointer;
}
.achievement-card__preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 300ms ease;
}
.achievement-card__preview:hover img {
  transform: scale(1.035);
}
.achievement-card__preview--empty {
  display: grid;
  place-items: center;
  cursor: default;
}
.achievement-card__preview--empty > span {
  color: rgba(143, 227, 194, 0.35);
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 2rem;
}
.achievement-card__preview--empty::before,
.achievement-card__preview--empty::after {
  position: absolute;
  width: 70px;
  height: 1px;
  background: var(--line);
  content: '';
  transform: rotate(45deg);
}
.achievement-card__preview--empty::after {
  transform: rotate(-45deg);
}
.achievement-card__open {
  position: absolute;
  right: 8px;
  bottom: 8px;
  left: 8px;
  padding: 7px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: rgba(9, 12, 16, 0.82);
  color: var(--text);
  font-size: 0.65rem;
  font-weight: 700;
  backdrop-filter: blur(8px);
}
.achievement-card__pdf {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 10px;
  padding: 28px;
  color: var(--accent);
}
.achievement-card__pdf span {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.7rem;
  font-weight: 700;
}
.achievement-card__pdf i {
  height: 1px;
  background: var(--line-strong);
}
.achievement-card__content {
  padding: 24px;
}
.achievement-card__meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  color: var(--accent);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.card-title {
  font-size: 1.35rem;
  line-height: 1.16;
}
.achievement-card__event {
  margin: 8px 0 0 !important;
  color: var(--text) !important;
  font-size: 0.78rem;
  font-weight: 600;
}
.achievement-card__organizers {
  margin: 6px 0 0;
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 600;
}
.achievement-card__content > p:last-of-type {
  margin: 14px 0 0;
  color: var(--text-muted);
  font-size: 0.86rem;
}
.achievement-card__content .text-link {
  margin-top: 15px;
}
@media (max-width: 560px) {
  .achievement-card {
    grid-template-columns: 104px minmax(0, 1fr);
  }
  .achievement-card__content {
    padding: 20px 17px;
  }
  .achievement-card__preview--empty > span {
    font-size: 1.4rem;
  }
  .achievement-card__pdf {
    padding: 16px;
  }
  .achievement-card__pdf span {
    font-size: 1.2rem;
  }
}
</style>
