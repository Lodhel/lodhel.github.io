<template>
  <section
    v-reveal
    class="section direction decorated-section decorated-section--mint decorated-section--reverse"
  >
    <div class="direction__panel container">
      <div>
        <p class="eyebrow">Next layer</p>
        <h2 class="section-title">Куда я двигаюсь</h2>
      </div>
      <div class="direction__copy">
        <p>
          Сейчас мой основной профессиональный вектор — более глубокая специализация в AI / LLM
          Engineering при сохранении сильной backend-базы.
        </p>
        <p>
          Особенно интересуют RAG-системы, архитектура AI-агентов, управление контекстом,
          orchestration и production-инфраструктура вокруг LLM.
        </p>
        <p>
          Для меня важно не просто подключать модели к приложениям, а понимать, как такие системы
          работают под капотом и как проектировать их как надёжные инженерные системы.
        </p>
      </div>
      <span class="direction__mark" aria-hidden="true">→</span>
    </div>
  </section>
</template>

<style scoped>
.direction__panel {
  position: relative;
  display: grid;
  grid-template-columns: 0.72fr 1.28fr;
  gap: clamp(46px, 9vw, 130px);
  overflow: hidden;
  padding: clamp(34px, 6vw, 70px);
  border: 1px solid rgba(143, 227, 194, 0.28);
  border-radius: 18px;
  background: linear-gradient(
    125deg,
    rgba(143, 227, 194, 0.075),
    rgba(143, 191, 244, 0.025) 55%,
    transparent
  );
}
.direction__copy {
  position: relative;
  z-index: 1;
  max-width: 680px;
}
.direction__copy p {
  margin: 0 0 20px;
  color: var(--text-muted);
}
.direction__copy p:first-child {
  color: var(--text);
  font-size: 1.08rem;
}
.direction__mark {
  position: absolute;
  right: 40px;
  bottom: -55px;
  color: rgba(143, 227, 194, 0.06);
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 11rem;
  line-height: 1;
}
@media (max-width: 760px) {
  .direction__panel {
    grid-template-columns: 1fr;
  }
}
</style>
