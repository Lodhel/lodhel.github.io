<script setup lang="ts">
import { aboutParagraphs } from '@/data/profile'
import SectionTitle from '@/components/ui/SectionTitle.vue'
</script>

<template>
  <section id="about" v-reveal class="section">
    <div class="about container">
      <SectionTitle eyebrow="Профиль" title="Обо мне" />
      <div class="about__content">
        <div class="about__statement">
          <span>Backend — фундамент.</span><strong>AI — следующий инженерный слой.</strong>
        </div>
        <div class="about__text">
          <p v-for="paragraph in aboutParagraphs" :key="paragraph">{{ paragraph }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__content {
  display: grid;
  grid-template-columns: 0.82fr 1.18fr;
  gap: clamp(48px, 10vw, 140px);
}
.about__statement {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding-left: 20px;
  border-left: 2px solid var(--accent);
  font-family: 'Source Sans Pro', sans-serif;
  font-size: clamp(1.35rem, 2.5vw, 2rem);
  line-height: 1.18;
}
.about__statement span {
  color: var(--text-muted);
}
.about__statement strong {
  font-weight: 600;
}
.about__text p {
  margin: 0 0 18px;
  color: var(--text-muted);
  font-size: 1.03rem;
}
.about__text p:first-child {
  color: var(--text);
  font-size: 1.15rem;
}
@media (max-width: 760px) {
  .about__content {
    grid-template-columns: 1fr;
    gap: 42px;
  }
}
</style>
