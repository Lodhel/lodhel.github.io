<script setup lang="ts">
import { aboutParagraphs } from '@/data/profile'
import SectionTitle from '@/components/ui/SectionTitle.vue'
</script>

<template>
  <section id="about" v-reveal class="section decorated-section">
    <div class="about container">
      <SectionTitle eyebrow="Профиль" />
      <div class="about__content">
        <div class="about__statement">
          <span>Работаю на всём пути системы.</span><strong>От backend и frontend до инфраструктуры и LLM-решений.</strong>
        </div>
        <div class="about__intro">
          <p>{{ aboutParagraphs[0] }}</p>
        </div>
        <div class="about__text">
          <p v-for="paragraph in aboutParagraphs.slice(1)" :key="paragraph">{{ paragraph }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__content {
  display: grid;
  grid-template-columns: 0.82fr 1.18fr;
  column-gap: clamp(48px, 10vw, 140px);
  row-gap: clamp(30px, 5vw, 54px);
}
.about__statement {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: start;
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
.about__intro p,
.about__text p {
  margin: 0;
  color: var(--text-muted);
  font-size: 1.03rem;
}
.about__intro p {
  color: var(--text);
  font-size: 1.15rem;
}
.about__text {
  display: grid;
  grid-column: 1 / -1;
  gap: 18px;
}
@media (max-width: 760px) {
  .about__content {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
