<script setup lang="ts">
defineProps<{ eyebrow: string; description?: string }>()
</script>

<template>
  <header class="section-heading">
    <h2 class="eyebrow">{{ eyebrow }}</h2>
    <p v-if="description" class="section-copy">{{ description }}</p>
  </header>
</template>

<style scoped>
.section-heading {
  margin-bottom: clamp(38px, 6vw, 68px);
}
</style>
