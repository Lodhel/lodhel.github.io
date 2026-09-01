<script setup lang="ts">
import SectionTitle from '@/components/ui/SectionTitle.vue'

const steps = [
  'Backend',
  'Architecture',
  'Infrastructure',
  'LLM Engineering',
  'RAG',
  'Agent Systems'
]
</script>

<template>
  <section class="section journey">
    <div v-reveal class="container">
      <SectionTitle eyebrow="Trajectory" title="Мой инженерный путь" />
      <div class="journey__panel">
        <ol class="journey__steps">
          <li v-for="(step, index) in steps" :key="step">
            <span>{{ String(index + 1).padStart(2, '0') }}</span
            ><strong>{{ step }}</strong>
          </li>
        </ol>
        <div class="journey__copy">
          <p>
            Мой текущий вектор — не уход от backend-разработки, а расширение инженерной базы в
            сторону AI-native систем.
          </p>
          <p>
            Мне важно не просто использовать готовые модели через API, а понимать архитектуру таких
            систем под капотом: retrieval, контекст, orchestration, evaluation и взаимодействие
            компонентов.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.journey {
  overflow: hidden;
  border-block: 1px solid var(--line);
  background: #0b1015;
}
.journey::before {
  position: absolute;
  top: -180px;
  right: -100px;
  width: 480px;
  height: 480px;
  border: 1px solid rgba(143, 227, 194, 0.07);
  border-radius: 50%;
  content: '';
}
.journey__panel {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(50px, 9vw, 120px);
  padding: clamp(30px, 5vw, 58px);
  border: 1px solid var(--line-strong);
  border-radius: 18px;
  background: rgba(17, 23, 31, 0.65);
}
.journey__steps {
  position: relative;
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}
.journey__steps::before {
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 19px;
  width: 1px;
  background: linear-gradient(var(--accent), var(--accent-blue));
  content: '';
}
.journey__steps li {
  position: relative;
  display: flex;
  min-height: 58px;
  align-items: center;
  gap: 22px;
}
.journey__steps span {
  z-index: 1;
  display: grid;
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid var(--line-strong);
  border-radius: 50%;
  background: var(--surface);
  color: var(--accent);
  font-size: 0.6rem;
  font-weight: 700;
}
.journey__steps strong {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: clamp(1.05rem, 2vw, 1.4rem);
  font-weight: 600;
}
.journey__copy {
  align-self: center;
  padding-left: 30px;
  border-left: 1px solid var(--line-strong);
}
.journey__copy p {
  margin: 0 0 20px;
  color: var(--text-muted);
}
.journey__copy p:first-child {
  color: var(--text);
  font-size: 1.12rem;
}
@media (max-width: 780px) {
  .journey__panel {
    grid-template-columns: 1fr;
  }
  .journey__copy {
    padding: 30px 0 0;
    border-top: 1px solid var(--line-strong);
    border-left: 0;
  }
}
</style>
