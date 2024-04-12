<script setup lang="ts">
import { computed } from 'vue'
// Import stores.
import { usePomodoroStore } from '@/stores/pomodoro'
// Import components.
import { Icon } from '@iconify/vue'
import ModalBackground from '@/components/modal/ModalBackground.vue'

defineProps<{
  isOpened: boolean
}>()

defineEmits([
  'reset',
  'toggleModal',
])

const pomodoro = usePomodoroStore()
const modalTitle = computed(() => pomodoro.isBreak
  ? 'Skip the break?'
  : 'Reset the timer?'
)
</script>

<template>
  <Teleport to="#modal-container">
    <Transition
      :duration="250"
      name="fly-in"
    >
      <div
        v-if="isOpened"
        class="modal-pseudo-container"
      >
        <ModalBackground @click="$emit('toggleModal')" />
        <div class="modal-container">
          <div class="icon-warning">
            <Icon icon="material-symbols:exclamation-rounded" />
          </div>
          <h3 class="modal-title">
            {{ modalTitle }}
          </h3>
          <div class="modal-buttons">
            <button
              class="modal-button modal-button--confirm"
              @click="() => {
                $emit('reset')
                $emit('toggleModal')
              }"
            >
              Yes
            </button>
            <button
              class="modal-button modal-button--cancel"
              @click="$emit('toggleModal')"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-pseudo-container {
  position: fixed;
  inset: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2.5rem 2rem;
  max-width: 90%;
  border-radius: 8px;
  color: var(--color-white-100);
  background-color: var(--color-black-900);
  z-index: 1;
  box-shadow: var(--box-shadow-modal);
}

/* Transition animation... */
.fly-in-enter-active :is(.modal-container, .modal-background),
.fly-in-leave-active :is(.modal-container, .modal-background) {
  transition-property: transform, opacity;
  transition-duration: 250ms;
  transition-timing-function: var(--transition-cubic-bezier);
}

.fly-in-enter-from .modal-container,
.fly-in-leave-to .modal-container {
  transform: translateY(20px);
  opacity: 0;
}

.fly-in-enter-from .modal-background,
.fly-in-leave-to .modal-background {
  opacity: 0%;
}
/* ...ends here. */

.icon-warning {
  color: var(--color-white-100);
  background-color: var(--color-red-600);
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  padding: 0.25rem;
  aspect-ratio: 1;
  border-radius: 50%;
}

.modal-title {
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
}

.modal-buttons {
  align-self: stretch;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  row-gap: 0.6rem;
}

.modal-button {
  padding: 0.6rem 1.2rem;
  font-weight: 700;
  border-radius: 100vh;
  color: var(--color-white-100);
  background-color: transparent;
  transition: background-color 250ms var(--transition-cubic-bezier);
}

.modal-button--confirm {
  background-color: var(--color-teal-500);
}

.modal-button--confirm:is(:hover, :focus-visible) {
  background-color: var(--color-teal-700);
}

.modal-button--cancel:is(:hover, :focus-visible) {
  background-color: var(--color-black-700);
}

@media screen and (max-width: 37.5em) {
  .modal-buttons {
    grid-template-columns: 1fr;
  }

  .modal-button {
    padding: 0.8rem 1.2rem;
    border-radius: 8px;
  }
}
</style>
