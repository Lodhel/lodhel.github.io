<script setup lang="ts">
import type { Project } from '@/types/content'

defineProps<{ project: Project; index: number }>()
</script>

<template>
  <article class="project-card">
    <div class="project-card__visual" :data-index="String(index + 1).padStart(2, '0')">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="`Превью проекта ${project.title}`"
        loading="lazy"
      />
      <div v-else class="project-card__diagram" aria-hidden="true">
        <span></span><span></span><span></span><i></i><i></i>
      </div>
      <span class="project-card__category">{{ project.category }}</span>
    </div>
    <div class="project-card__content">
      <div class="project-card__meta">
        <span>Избранный проект</span><span v-if="project.year">{{ project.year }}</span>
      </div>
      <h3 class="card-title">{{ project.title }}</h3>
      <p>{{ project.longDescription || project.description }}</p>
      <ul class="tag-list" aria-label="Технологии проекта">
        <li v-for="technology in project.technologies" :key="technology" class="tag">
          {{ technology }}
        </li>
      </ul>
      <div v-if="project.githubUrl || project.externalUrl" class="project-card__links">
        <a
          v-if="project.githubUrl"
          class="text-link"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub ↗</a
        >
        <a
          v-if="project.externalUrl"
          class="text-link"
          :href="project.externalUrl"
          target="_blank"
          rel="noopener noreferrer"
          >Открыть проект ↗</a
        >
      </div>
      <p v-else class="project-card__todo">Ссылки будут добавлены позже</p>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  min-height: 390px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--surface);
  transition:
    border-color 220ms ease,
    transform 220ms ease;
}
.project-card:hover {
  border-color: var(--line-strong);
  transform: translateY(-4px);
}
.project-card__visual {
  position: relative;
  min-height: 310px;
  overflow: hidden;
  border-right: 1px solid var(--line);
  background: #0d1319;
}
.project-card__visual::before {
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
.project-card__visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.project-card__diagram {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(143, 227, 194, 0.08), transparent 48%);
}
.project-card__diagram span {
  position: absolute;
  width: 11px;
  height: 11px;
  border: 2px solid var(--accent);
  border-radius: 50%;
  background: #0d1319;
}
.project-card__diagram span:nth-child(1) {
  top: 28%;
  left: 25%;
}
.project-card__diagram span:nth-child(2) {
  top: 48%;
  left: 63%;
  width: 15px;
  height: 15px;
}
.project-card__diagram span:nth-child(3) {
  top: 70%;
  left: 38%;
}
.project-card__diagram i {
  position: absolute;
  top: 39%;
  left: 28%;
  width: 38%;
  height: 1px;
  background: linear-gradient(90deg, var(--accent), rgba(143, 227, 194, 0.15));
  transform: rotate(18deg);
  transform-origin: left;
}
.project-card__diagram i:last-child {
  top: 67%;
  left: 39%;
  width: 27%;
  transform: rotate(-44deg);
}
.project-card__category {
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
.project-card__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(28px, 5vw, 58px);
}
.project-card__meta {
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
.project-card__content > p {
  margin: 18px 0 24px;
  color: var(--text-muted);
}
.project-card__links {
  display: flex;
  gap: 20px;
  margin-top: 26px;
}
.project-card__todo {
  margin: 22px 0 0 !important;
  color: var(--text-dim) !important;
  font-size: 0.75rem;
}
@media (max-width: 760px) {
  .project-card {
    grid-template-columns: 1fr;
  }
  .project-card__visual {
    min-height: 260px;
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }
  .project-card__content {
    padding: 28px 24px 32px;
  }
}
</style>
