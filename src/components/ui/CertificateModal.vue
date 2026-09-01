<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import type { Achievement } from '@/types/content'

const props = defineProps<{ achievement: Achievement | null }>()
const emit = defineEmits<{ close: [] }>()
const closeButton = ref<HTMLButtonElement | null>(null)
const isPdf = computed(() => props.achievement?.certificateImage?.toLowerCase().includes('.pdf'))

const close = () => emit('close')
const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') close()
}

watch(
  () => props.achievement,
  async (achievement) => {
    document.body.classList.toggle('modal-open', Boolean(achievement))
    if (achievement) {
      window.addEventListener('keydown', onKeydown)
      await nextTick()
      closeButton.value?.focus()
    } else {
      window.removeEventListener('keydown', onKeydown)
    }
  }
)

onBeforeUnmount(() => {
  document.body.classList.remove('modal-open')
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="achievement?.certificateImage"
        class="modal"
        role="dialog"
        aria-modal="true"
        :aria-label="`Диплом: ${achievement.title}`"
        @click.self="close"
      >
        <div class="modal__panel">
          <header class="modal__header">
            <div>
              <span>{{ achievement.result }} · {{ achievement.year }}</span>
              <h2>{{ achievement.title }}</h2>
            </div>
            <button ref="closeButton" type="button" aria-label="Закрыть диплом" @click="close">
              ×
            </button>
          </header>
          <div class="modal__content">
            <object v-if="isPdf" :data="achievement.certificateImage" type="application/pdf">
              <p>
                Браузер не может показать PDF.
                <a :href="achievement.certificateImage" target="_blank">Открыть файл</a>
              </p>
            </object>
            <img v-else :src="achievement.certificateImage" :alt="`Диплом: ${achievement.title}`" />
          </div>
          <a
            class="modal__external"
            :href="achievement.certificateImage"
            target="_blank"
            rel="noopener noreferrer"
            >Открыть в новой вкладке ↗</a
          >
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  padding: 24px;
  place-items: center;
  background: rgba(3, 5, 7, 0.86);
  backdrop-filter: blur(12px);
}
.modal__panel {
  display: flex;
  width: min(100%, 980px);
  height: min(90vh, 860px);
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--line-strong);
  border-radius: 16px;
  background: var(--surface);
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.55);
}
.modal__header {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--line);
}
.modal__header span {
  color: var(--accent);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}
.modal__header h2 {
  margin: 3px 0 0;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.2rem;
  line-height: 1.2;
}
.modal__header button {
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: transparent;
  color: var(--text);
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;
}
.modal__content {
  display: grid;
  min-height: 0;
  flex: 1;
  place-items: center;
  overflow: auto;
  background: #090d12;
}
.modal__content img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.modal__content object {
  width: 100%;
  height: 100%;
  border: 0;
}
.modal__external {
  flex: 0 0 auto;
  padding: 12px 20px;
  border-top: 1px solid var(--line);
  color: var(--text-muted);
  font-size: 0.76rem;
  text-align: right;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 180ms ease;
}
.modal-enter-active .modal__panel,
.modal-leave-active .modal__panel {
  transition: transform 180ms ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal__panel,
.modal-leave-to .modal__panel {
  transform: translateY(12px) scale(0.985);
}
@media (max-width: 600px) {
  .modal {
    padding: 0;
  }
  .modal__panel {
    width: 100%;
    height: 100%;
    max-height: none;
    border: 0;
    border-radius: 0;
  }
  .modal__header {
    padding: 13px 16px;
  }
}
</style>
