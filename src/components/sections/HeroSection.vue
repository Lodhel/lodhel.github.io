<script setup lang="ts">
import { ref } from 'vue'
import profilePhoto from '@/assets/profile.jpg'
import { profile } from '@/data/profile'
import SocialLinks from '@/components/ui/SocialLinks.vue'

const photoAvailable = ref(true)
</script>

<template>
  <section id="top" class="hero">
    <div class="hero__backdrop" aria-hidden="true">
      <span class="hero__glow hero__glow--blue"></span>
      <span class="hero__glow hero__glow--violet"></span>
      <span class="hero__glow hero__glow--mint"></span>

      <svg
        class="hero__pattern"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g class="hero__pattern-lines" stroke="currentColor" stroke-width="1.5">
          <path d="M64 118h38l18 30h42" />
          <circle cx="64" cy="118" r="4" />
          <circle cx="162" cy="148" r="4" />
          <path d="M1284 94h38l22 31h44" />
          <circle cx="1284" cy="94" r="4" />
          <circle cx="1388" cy="125" r="4" />
          <path d="M1130 708h44l22-34h50" />
          <circle cx="1130" cy="708" r="4" />
          <circle cx="1246" cy="674" r="4" />
          <path d="M156 740h48l18 26h43" />
          <circle cx="156" cy="740" r="4" />
          <circle cx="265" cy="766" r="4" />
        </g>

        <g class="hero__icon hero__icon--soft" transform="translate(88 232) rotate(-8)">
          <rect width="72" height="54" rx="15" />
          <path d="M18 54 11 68l22-14M19 20h34M19 33h23" />
        </g>
        <g class="hero__icon" transform="translate(286 112) rotate(7)">
          <path d="m30 0 7 18 19 2-15 12 5 19-16-10-16 10 5-19L4 20l19-2 7-18Z" />
        </g>
        <g class="hero__icon hero__icon--tiny" transform="translate(516 210) rotate(-5)">
          <path d="m18 0 4 13 13 5-13 5-4 13-5-13-13-5 13-5 5-13Z" />
        </g>
        <g class="hero__icon hero__icon--soft" transform="translate(692 78) rotate(11)">
          <path d="m25 2-8 24h18L15 55l8-22H5L25 2Z" />
        </g>
        <g class="hero__icon" transform="translate(924 152) rotate(-6)">
          <path d="m20 3-18 18 18 18M46 3l18 18-18 18M39 0 27 43" />
        </g>
        <g class="hero__icon hero__icon--large" transform="translate(1208 202) rotate(9)">
          <path d="M28 13V3M52 13V3M13 28H3M77 28H67M13 52H3M77 52H67" />
          <rect x="13" y="13" width="54" height="54" rx="15" />
          <circle cx="31" cy="38" r="3" />
          <circle cx="49" cy="38" r="3" />
          <path d="M29 53h22" />
        </g>
        <g class="hero__icon hero__icon--soft" transform="translate(52 472) rotate(6)">
          <circle cx="34" cy="34" r="7" />
          <circle cx="7" cy="19" r="5" />
          <circle cx="62" cy="13" r="5" />
          <circle cx="66" cy="57" r="5" />
          <circle cx="12" cy="61" r="5" />
          <path d="m13 22 15 9M39 29l18-13M40 39l21 15M29 40 16 57" />
        </g>
        <g class="hero__icon hero__icon--tiny" transform="translate(382 422) rotate(-11)">
          <circle cx="23" cy="23" r="21" />
          <path d="M14 23h18M23 14v18" />
        </g>
        <g class="hero__icon hero__icon--large" transform="translate(734 398) rotate(-5)">
          <path d="M23 61H14a14 14 0 0 1-1-28A22 22 0 0 1 55 24a17 17 0 1 1 4 37H23Z" />
          <path d="m32 45 8-8 8 8M40 37v24" />
        </g>
        <g class="hero__icon" transform="translate(1038 400) rotate(8)">
          <path d="M30 2 56 17v30L30 62 4 47V17L30 2Z" />
          <circle cx="30" cy="32" r="9" />
          <path d="M30 12v11M13 22l10 6M47 22l-10 6M13 43l10-6M47 43l-10-6M30 52V41" />
        </g>
        <g class="hero__icon hero__icon--soft" transform="translate(1324 476) rotate(-9)">
          <path d="m0 24 18 18L55 5M9 6h25M9 58h45" />
        </g>
        <g class="hero__icon" transform="translate(270 650) rotate(5)">
          <path d="M4 11h50v38H4z" />
          <path d="m14 24 8 7-8 7M30 38h13M19 3v8M39 3v8" />
        </g>
        <g class="hero__icon hero__icon--large" transform="translate(516 696) rotate(-7)">
          <path d="m32 2 8 21 22 2-17 14 5 22-18-12-19 12 6-22L2 25l22-2 8-21Z" />
        </g>
        <g class="hero__icon hero__icon--tiny" transform="translate(842 646) rotate(9)">
          <path d="M4 4h40v40H4zM14 17h20M14 25h12M14 33h16" />
        </g>
        <g class="hero__icon hero__icon--soft" transform="translate(1030 770) rotate(-8)">
          <path d="m4 29 16-16 12 12L55 2M42 2h13v13" />
          <circle cx="4" cy="29" r="3" />
        </g>
        <g class="hero__icon" transform="translate(1320 716) rotate(6)">
          <rect x="2" y="2" width="58" height="46" rx="13" />
          <path d="m45 48 8 13-20-13M16 18h30M16 30h18" />
        </g>
      </svg>
    </div>

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
  position: relative;
  isolation: isolate;
  min-height: calc(100svh - var(--header-height));
  padding: clamp(64px, 9vw, 120px) 0 34px;
  overflow: hidden;
  border-bottom: 1px solid rgba(143, 191, 244, 0.11);
  background:
    radial-gradient(circle at 78% 34%, rgba(84, 96, 211, 0.2), transparent 31rem),
    radial-gradient(circle at 16% 15%, rgba(47, 132, 170, 0.15), transparent 26rem),
    linear-gradient(135deg, #071016 0%, #0a1420 38%, #101125 70%, #080c12 100%);
}
.hero::before {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(90deg, rgba(7, 13, 19, 0.5) 0%, transparent 56%),
    linear-gradient(180deg, transparent 65%, rgba(8, 12, 16, 0.66) 100%);
  content: '';
  pointer-events: none;
}
.hero__backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
}
.hero__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(12px);
}
.hero__glow--blue {
  top: -22%;
  right: 8%;
  width: clamp(300px, 46vw, 720px);
  aspect-ratio: 1;
  background: radial-gradient(circle, rgba(37, 132, 220, 0.17), transparent 68%);
}
.hero__glow--violet {
  right: -13%;
  bottom: -39%;
  width: clamp(360px, 54vw, 820px);
  aspect-ratio: 1;
  background: radial-gradient(circle, rgba(121, 73, 205, 0.16), transparent 67%);
}
.hero__glow--mint {
  bottom: -34%;
  left: 1%;
  width: clamp(260px, 37vw, 560px);
  aspect-ratio: 1;
  background: radial-gradient(circle, rgba(58, 179, 151, 0.1), transparent 69%);
}
.hero__pattern {
  position: absolute;
  top: 50%;
  left: 50%;
  width: max(112%, 1180px);
  height: 112%;
  color: #b8d8ff;
  opacity: 0.19;
  transform: translate(-50%, -50%);
  -webkit-mask-image: radial-gradient(ellipse at center, #000 38%, transparent 92%);
  mask-image: radial-gradient(ellipse at center, #000 38%, transparent 92%);
}
.hero__pattern-lines {
  opacity: 0.34;
}
.hero__icon {
  stroke: currentColor;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
  vector-effect: non-scaling-stroke;
}
.hero__icon--soft {
  opacity: 0.58;
}
.hero__icon--tiny {
  opacity: 0.46;
  stroke-width: 1.35;
}
.hero__icon--large {
  opacity: 0.72;
  stroke-width: 1.8;
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
  .hero::before {
    background:
      linear-gradient(180deg, rgba(7, 13, 19, 0.24), rgba(8, 12, 16, 0.7)),
      radial-gradient(circle at 32% 18%, rgba(7, 13, 19, 0.62), transparent 42%);
  }
  .hero__pattern {
    left: 56%;
    width: 1320px;
    opacity: 0.15;
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
  .hero__pattern {
    left: 62%;
    width: 1180px;
    opacity: 0.12;
  }
  .hero__glow--blue {
    top: -8%;
    right: -42%;
  }
  .hero__glow--violet {
    right: -58%;
    bottom: -8%;
  }
}
</style>
