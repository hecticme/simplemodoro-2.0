<script setup lang="ts">
import { ref } from 'vue'
// Import components.
import ButtonPlaybackControl from './ButtonPlaybackControl.vue'
import ModalConfirmation from './ModalConfirmation.vue'
// Import stores.
import { usePomodoroStore } from '@/stores/pomodoro'

const props = defineProps<{
  isPaused: boolean
  hasStarted: boolean
}>()

const emit = defineEmits([
  'resume',
  'pause',
  'reset',
])

const pomodoro = usePomodoroStore()

function handleResumePause () {
  emit(props.isPaused ? 'resume' : 'pause')
}

// Confirm modal open state.
const confirmModalIsOpened = ref(false)

function toggleModal () {
  confirmModalIsOpened.value = !confirmModalIsOpened.value
}
</script>

<template>
  <section class="playback-controls">
    <ButtonPlaybackControl
      :icons="[
        'material-symbols:play-arrow-rounded',
        'material-symbols:pause-rounded',
      ]"
      :is-active="isPaused"
      @click="handleResumePause"
    />

    <ButtonPlaybackControl
      :disabled="!hasStarted"
      :icons="[
        'material-symbols:skip-next-rounded',
        'material-symbols:restart-alt-rounded',
      ]"
      :is-active="pomodoro.isBreak"
      @click="toggleModal"
    />

    <ModalConfirmation
      :is-opened="confirmModalIsOpened"
      @reset="$emit('reset')"
      @toggle-modal="toggleModal"
    />
  </section>
</template>

<style scoped>
.playback-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
