<script setup lang="ts">
import { navigation, profile } from '@/data/profile'
</script>

<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div>
        <a class="footer__brand" href="#top">{{ profile.name }}<span>.</span></a>
        <p>Backend Engineering · AI / LLM Systems</p>
      </div>
      <nav aria-label="Навигация в подвале">
        <a v-for="item in navigation.slice(0, 4)" :key="item.href" :href="item.href">{{
          item.label
        }}</a>
      </nav>
      <p class="footer__copy">© {{ new Date().getFullYear() }} {{ profile.name }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  background: #080b0e;
}
.footer__inner {
  display: grid;
  grid-template-columns: 1.2fr 1fr auto;
  align-items: end;
  gap: 32px;
  padding-block: 46px;
}
.footer__brand {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
}
.footer__brand span {
  color: var(--accent);
}
p {
  margin: 8px 0 0;
  color: var(--text-dim);
  font-size: 0.77rem;
}
nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 22px;
}
nav a {
  color: var(--text-muted);
  font-size: 0.78rem;
  transition: color 180ms ease;
}
nav a:hover {
  color: var(--accent);
}
.footer__copy {
  margin: 0;
  white-space: nowrap;
}
@media (max-width: 760px) {
  .footer__inner {
    grid-template-columns: 1fr;
    align-items: start;
  }
  .footer__copy {
    margin-top: 12px;
  }
}
</style>
