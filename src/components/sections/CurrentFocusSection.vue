<script setup lang="ts">
import { focusItems, focusUpdatedAt } from '@/data/focus'
import SectionTitle from '@/components/ui/SectionTitle.vue'
</script>

<template>
  <section id="focus" class="section focus">
    <div v-reveal class="container">
      <div class="focus__head">
        <SectionTitle
          eyebrow="Learning loop"
          title="Сейчас в фокусе"
          description="Темы, которые последовательно изучаю и переношу в практику."
        />
        <p class="focus__date"><span></span>Актуально: {{ focusUpdatedAt }}</p>
      </div>
      <div class="focus__grid">
        <article v-for="(item, index) in focusItems" :key="item.title">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.note }}</p>
          <i aria-hidden="true">↗</i>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.focus {
  border-block: 1px solid var(--line);
  background: var(--bg-soft);
}
.focus__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 30px;
}
.focus__head :deep(.section-heading) {
  margin-bottom: clamp(38px, 6vw, 68px);
}
.focus__date {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 9px;
  margin: 0 0 clamp(38px, 6vw, 68px);
  color: var(--text-dim);
  font-size: 0.72rem;
}
.focus__date span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
}
.focus__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}
.focus__grid article {
  position: relative;
  min-height: 190px;
  padding: 25px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  transition: background 180ms ease;
}
.focus__grid article:hover {
  background: rgba(143, 227, 194, 0.035);
}
.focus__grid article > span {
  color: var(--accent);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}
.focus__grid h3 {
  max-width: 260px;
  margin: 32px 0 8px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.2rem;
  line-height: 1.2;
}
.focus__grid p {
  margin: 0;
  color: var(--text-dim);
  font-size: 0.79rem;
}
.focus__grid i {
  position: absolute;
  top: 23px;
  right: 23px;
  color: var(--text-dim);
  font-style: normal;
}
@media (max-width: 800px) {
  .focus__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .focus__head {
    display: block;
  }
  .focus__date {
    margin-top: -35px;
  }
  .focus__grid {
    grid-template-columns: 1fr;
  }
}
</style>
