<script setup lang="ts">
import { ref } from 'vue'
import profilePhoto from '@/assets/profile.jpg'
import { profile } from '@/data/profile'
import SocialLinks from '@/components/ui/SocialLinks.vue'

const photoAvailable = ref(true)
</script>

<template>
  <section id="top" class="hero decorated-section decorated-section--hero">
    <div class="hero__grid container">
      <div class="hero__content">
        <p class="hero__status"><span></span> Engineering profile · 2026</p>
        <h1 class="display-title">{{ profile.name }}</h1>
        <p class="hero__role">{{ profile.role }}</p>
        <p class="hero__positioning">{{ profile.positioning }}</p>
        <div class="hero__actions">
          <a class="button button--primary" href="#projects"
            >Смотреть проекты <span aria-hidden="true">↓</span></a
          >
          <a
            v-if="profile.githubUrl"
            class="button"
            :href="profile.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            >GitHub ↗</a
          >
          <span v-else class="button button--disabled" title="Добавьте ссылку в src/data/profile.ts"
            >GitHub ↗</span
          >
        </div>
        <SocialLinks compact />
      </div>

      <div class="hero__portrait-wrap" aria-label="Фотография и специализация">
        <div class="hero__portrait">
          <img
            v-if="photoAvailable"
            :src="profilePhoto"
            :alt="profile.photoAlt"
            @error="photoAvailable = false"
          />
          <div v-else class="hero__placeholder">
            <span>{{ profile.shortName }}</span>
            <small>Добавьте фото в src/assets/profile.jpg</small>
          </div>
          <div class="hero__portrait-overlay"></div>
          <span class="hero__portrait-index">PROFILE / 01</span>
        </div>
        <div class="hero__marker">
          <span v-for="item in profile.marker" :key="item">{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="hero__footnote container">
      <span>Backend foundation</span><i></i><span>AI-native systems</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: calc(100svh - var(--header-height));
  padding: clamp(64px, 9vw, 120px) 0 34px;
  border-bottom: 1px solid rgba(143, 191, 244, 0.11);
}
.hero__grid,
.hero__footnote {
  position: relative;
  z-index: 2;
}
.hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.32fr) minmax(320px, 0.68fr);
  align-items: center;
  gap: clamp(48px, 8vw, 112px);
}
.hero__content {
  max-width: 760px;
}
.hero__status {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 26px;
  color: var(--text-dim);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.hero__status span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 5px rgba(143, 227, 194, 0.08);
}
.display-title {
  max-width: 780px;
  font-size: clamp(4rem, 8.4vw, 7.4rem);
  line-height: 0.88;
}
.hero__role {
  margin: 28px 0 0;
  color: var(--accent);
  font-family: 'Source Sans Pro', sans-serif;
  font-size: clamp(1.25rem, 2.4vw, 1.85rem);
  font-weight: 600;
  letter-spacing: -0.015em;
}
.hero__positioning {
  max-width: 680px;
  margin: 22px 0 0;
  color: var(--text-muted);
  font-size: clamp(1rem, 1.5vw, 1.17rem);
}
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 34px 0 24px;
}
.hero__portrait-wrap {
  position: relative;
  width: 100%;
  max-width: 390px;
  justify-self: end;
}
.hero__portrait {
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border: 1px solid var(--line-strong);
  border-radius: 18px;
  background: var(--surface);
}
.hero__portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 26%;
  filter: saturate(0.78) contrast(1.03);
}
.hero__portrait-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(5, 9, 12, 0.42), transparent 45%);
  pointer-events: none;
}
.hero__portrait-index {
  position: absolute;
  top: 18px;
  right: 18px;
  padding: 6px 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(9, 12, 16, 0.32);
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  backdrop-filter: blur(8px);
}
.hero__placeholder {
  display: grid;
  height: 100%;
  align-content: center;
  justify-items: center;
  gap: 12px;
  color: var(--text-dim);
  text-align: center;
}
.hero__placeholder span {
  color: var(--accent);
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 4rem;
}
.hero__placeholder small {
  max-width: 210px;
}
.hero__marker {
  position: absolute;
  right: -20px;
  bottom: 28px;
  display: flex;
  max-width: 250px;
  flex-wrap: wrap;
  gap: 5px 12px;
  padding: 14px 16px;
  border: 1px solid var(--line-strong);
  border-radius: 10px;
  background: rgba(13, 17, 23, 0.88);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(14px);
}
.hero__marker span {
  color: #c0ccd5;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
}
.hero__marker span:not(:last-child)::after {
  margin-left: 12px;
  color: var(--accent);
  content: '·';
}
.hero__footnote {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: clamp(48px, 7vw, 86px);
  color: var(--text-dim);
  font-size: 0.63rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}
.hero__footnote i {
  width: 80px;
  height: 1px;
  background: var(--line-strong);
}
@media (max-width: 900px) {
  .hero {
    padding-top: 70px;
  }
  .hero__grid {
    grid-template-columns: 1fr;
  }
  .hero__portrait-wrap {
    width: min(100%, 420px);
    justify-self: start;
  }
  .display-title {
    font-size: clamp(4rem, 15vw, 7rem);
  }
}
@media (max-width: 520px) {
  .hero {
    min-height: auto;
    padding-top: 54px;
  }
  .display-title {
    font-size: clamp(3.55rem, 18vw, 5.4rem);
  }
  .hero__role {
    line-height: 1.22;
  }
  .hero__actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .hero__portrait-wrap {
    width: calc(100% - 12px);
  }
  .hero__marker {
    right: -12px;
    bottom: 20px;
    max-width: 220px;
  }
  .hero__footnote {
    margin-top: 50px;
  }
}
</style>
