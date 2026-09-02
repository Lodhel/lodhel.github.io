<script setup lang="ts">
import { engineeringAreas } from '@/data/technologies'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { engineeringAreas } from '@/data/engineeringAreas'
</script>

<template>
  <section
    id="areas"
    class="section areas decorated-section decorated-section--violet"
  >
    <div v-reveal class="container">
      <SectionTitle
        eyebrow="Компетенции"
        title="Стек и направления"
        description="Технологии и инструменты, с которыми я работаю в backend, инфраструктуре, AI/LLM и frontend."
      />

      <div class="areas__list">
        <article
          v-for="area in engineeringAreas"
          :key="area.number"
          class="area"
        >
          <span class="area__number">{{ area.number }}</span>

          <div class="area__content">
            <span class="area__level">{{ area.level }}</span>

            <h3 class="card-title">
              {{ area.title }}
            </h3>

            <p class="area__description">
              {{ area.description }}
            </p>

            <div class="area__groups">
              <div
                v-for="group in area.groups"
                :key="group.title"
                class="area__group"
              >
                <h4 class="area__group-title">
                  {{ group.title }}
                </h4>

                <ul class="tag-list">
                  <li
                    v-for="technology in group.technologies"
                    :key="technology"
                    class="tag"
                  >
                    {{ technology }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.areas {
  border-block: 1px solid var(--line);
}
.areas__list {
  border-top: 1px solid var(--line-strong);
}
.area {
  display: grid;
  grid-template-columns: 70px minmax(240px, 0.85fr) minmax(320px, 1.15fr);
  align-items: start;
  gap: 24px;
  padding: 34px 0;
  border-bottom: 1px solid var(--line);
  transition: padding 180ms ease;
}
.area:hover {
  padding-inline: 10px;
}
.area__number {
  padding-top: 5px;
  color: var(--accent);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}
.card-title {
  font-size: clamp(1.45rem, 2.5vw, 2rem);
}
.area p {
  max-width: 570px;
  margin: 12px 0 0;
  color: var(--text-muted);
}
.area .tag-list {
  justify-content: flex-end;
  padding-top: 3px;
}
@media (max-width: 820px) {
  .area {
    grid-template-columns: 42px 1fr;
  }
  .area .tag-list {
    grid-column: 2;
    justify-content: flex-start;
  }
}
@media (max-width: 520px) {
  .area {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .area .tag-list {
    grid-column: 1;
  }
}
</style>
