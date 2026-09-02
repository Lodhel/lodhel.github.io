<script setup lang="ts">
import { contacts } from '@/data/profile'

withDefaults(defineProps<{ compact?: boolean }>(), { compact: false })
</script>

<template>
  <div class="social-links" :class="{ 'social-links--compact': compact }" aria-label="Контакты">
    <template v-for="contact in contacts" :key="contact.kind">
      <a
        v-if="contact.url"
        class="text-link"
        :href="contact.url"
        :target="contact.kind === 'email' ? undefined : '_blank'"
        :rel="contact.kind === 'email' ? undefined : 'noopener noreferrer'"
      >
        {{ contact.label }}<span aria-hidden="true">↗</span>
      </a>
      <span
        v-else
        class="text-link"
        aria-disabled="true"
        title="Добавьте адрес в src/data/profile.ts"
      >
        {{ contact.label }}<span aria-hidden="true">↗</span>
      </span>
    </template>
  </div>
</template>

<style scoped>
.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.social-links--compact {
  gap: 16px;
}
</style>
