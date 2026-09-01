<script setup lang="ts">
import { technologies } from '@/data/technologies'
import SectionTitle from '@/components/ui/SectionTitle.vue'
</script>

<template>
  <section class="section section--compact tech-stack">
    <div v-reveal class="container">
      <SectionTitle eyebrow="Toolbox" title="Технологии" />
      <div class="tech-stack__grid">
        <article v-for="group in technologies" :key="group.title">
          <h3>{{ group.title }}</h3>
          <ul class="tag-list">
            <li v-for="item in group.items" :key="item" class="tag">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech-stack {
  padding-top: 10px;
}
.tech-stack__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}
.tech-stack__grid article {
  padding-top: 18px;
  border-top: 1px solid var(--line-strong);
}
.tech-stack__grid h3 {
  margin: 0 0 16px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
}
.tech-stack__grid .tag-list {
  display: grid;
  gap: 7px;
}
.tech-stack__grid .tag {
  width: fit-content;
  padding: 0;
  border: 0;
  border-radius: 0;
  color: var(--text-muted);
  font-family: 'Open Sans Variable', sans-serif;
  font-size: 0.8rem;
}
@media (max-width: 760px) {
  .tech-stack__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 440px) {
  .tech-stack__grid {
    grid-template-columns: 1fr;
  }
}
</style>
