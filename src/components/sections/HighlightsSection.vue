<script setup lang="ts">
import { highlights } from '@/data/technologies'
</script>

<template>
  <section class="highlights section--bordered" aria-label="Ключевые направления">
    <div class="highlights__grid container">
      <article v-for="(item, index) in highlights" :key="item.title" class="highlight">
        <span>0{{ index + 1 }}</span>
        <div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.stack }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.highlights {
  background: rgba(13, 17, 23, 0.62);
}
.highlights__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.highlight {
  display: flex;
  min-width: 0;
  gap: 14px;
  padding: 25px clamp(15px, 2vw, 28px);
  border-right: 1px solid var(--line);
}
.highlight:first-child {
  padding-left: 0;
}
.highlight:last-child {
  border-right: 0;
  padding-right: 0;
}
.highlight > span {
  padding-top: 4px;
  color: var(--accent);
  font-size: 0.61rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}
.highlight h2 {
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
  line-height: 1.3;
}
.highlight p {
  margin: 4px 0 0;
  color: var(--text-dim);
  font-size: 0.73rem;
  white-space: nowrap;
}
@media (max-width: 900px) {
  .highlights__grid {
    grid-template-columns: 1fr 1fr;
  }
  .highlight:nth-child(2) {
    border-right: 0;
  }
  .highlight:nth-child(n + 3) {
    border-top: 1px solid var(--line);
  }
  .highlight:nth-child(3) {
    padding-left: 0;
  }
}
@media (max-width: 520px) {
  .highlights__grid {
    grid-template-columns: 1fr;
  }
  .highlight {
    padding: 19px 0;
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }
  .highlight:nth-child(n + 3) {
    border-top: 0;
  }
  .highlight:last-child {
    border-bottom: 0;
  }
}
</style>
