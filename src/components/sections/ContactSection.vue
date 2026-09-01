<script setup lang="ts">
import SocialLinks from '@/components/ui/SocialLinks.vue'
</script>

<template>
  <section id="contacts" class="section contact">
    <div v-reveal class="contact__inner container">
      <div>
        <p class="eyebrow">Contact</p>
        <h2 class="section-title">На связи</h2>
      </div>
      <div class="contact__content">
        <p>
          Открыт к интересным инженерным задачам, AI-проектам, хакатонам и совместной разработке.
        </p>
        <SocialLinks />
        <small>Контактные адреса настраиваются в <code>src/data/profile.ts</code></small>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  border-top: 1px solid var(--line);
  background: linear-gradient(180deg, var(--bg), #0c1217);
}
.contact__inner {
  display: grid;
  grid-template-columns: 0.72fr 1.28fr;
  gap: clamp(46px, 9vw, 130px);
}
.contact__content > p {
  max-width: 650px;
  margin: 0 0 30px;
  color: var(--text-muted);
  font-size: clamp(1.15rem, 2.2vw, 1.65rem);
  line-height: 1.45;
}
.contact__content :deep(.text-link) {
  color: var(--text);
  font-size: 1rem;
}
.contact__content small {
  display: block;
  margin-top: 28px;
  color: var(--text-dim);
  font-size: 0.7rem;
}
.contact__content code {
  color: var(--text-muted);
}
@media (max-width: 700px) {
  .contact__inner {
    grid-template-columns: 1fr;
  }
}
</style>
