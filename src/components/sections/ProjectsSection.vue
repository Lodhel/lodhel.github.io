<script setup lang="ts">
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
</script>

<template>
  <section id="projects" class="section decorated-section decorated-section--mint">
    <div v-reveal class="container">
      <SectionTitle
        eyebrow="Selected work"
        title="Избранные проекты"
        description="Примеры инженерных задач и направлений. Карточки подготовлены для замены на реальные данные без изменений в компонентах."
      />
      <div class="projects">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.title"
          :project="project"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  display: grid;
  gap: 28px;
}
.projects :deep(.project-card:nth-child(even)) .project-card__visual {
  order: 2;
  border-right: 0;
  border-left: 1px solid var(--line);
}
@media (max-width: 760px) {
  .projects :deep(.project-card:nth-child(even)) .project-card__visual {
    order: initial;
    border-left: 0;
  }
}
</style>
