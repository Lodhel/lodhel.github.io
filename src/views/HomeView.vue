<script setup lang="ts">
import AboutSection from '@/components/sections/AboutSection.vue'
import AchievementsSection from '@/components/sections/AchievementsSection.vue'
import AreasSection from '@/components/sections/AreasSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import CurrentFocusSection from '@/components/sections/CurrentFocusSection.vue'
import DirectionSection from '@/components/sections/DirectionSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import HighlightsSection from '@/components/sections/HighlightsSection.vue'
import JourneySection from '@/components/sections/JourneySection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import TechStackSection from '@/components/sections/TechStackSection.vue'
</script>

<template>
  <main>
    <HeroSection />
    <HighlightsSection />
    <AboutSection />
    <AreasSection />
    <ProjectsSection />
    <JourneySection />
    <AchievementsSection />
    <CurrentFocusSection />
    <DirectionSection />
    <TechStackSection />
    <ContactSection />
  </main>
</template>
