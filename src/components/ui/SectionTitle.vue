<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; description?: string }>()
</script>

<template>
  <header class="section-heading">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="description" class="section-copy">{{ description }}</p>
  </header>
</template>

<style scoped>
.section-heading {
  margin-bottom: clamp(38px, 6vw, 68px);
}
</style>
