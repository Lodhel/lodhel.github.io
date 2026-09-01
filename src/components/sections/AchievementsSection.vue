<script setup lang="ts">
import { ref } from 'vue'
import { achievements } from '@/data/achievements'
import type { Achievement } from '@/types/content'
import AchievementCard from '@/components/ui/AchievementCard.vue'
import CertificateModal from '@/components/ui/CertificateModal.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const selectedAchievement = ref<Achievement | null>(null)
</script>

<template>
  <section id="achievements" class="section">
    <div v-reveal class="container">
      <SectionTitle
        eyebrow="Recognition"
        title="Достижения"
        description="Соревнования — один из способов проверять инженерные решения в условиях ограниченного времени и высокой плотности задач."
      />
      <div class="achievements">
        <AchievementCard
          v-for="(achievement, index) in achievements"
          :key="`${achievement.event}-${achievement.result}`"
          :achievement="achievement"
          :index="index"
          @open-certificate="selectedAchievement = $event"
        />
      </div>
    </div>
    <CertificateModal :achievement="selectedAchievement" @close="selectedAchievement = null" />
  </section>
</template>

<style scoped>
.achievements {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}
@media (max-width: 860px) {
  .achievements {
    grid-template-columns: 1fr;
  }
}
</style>
