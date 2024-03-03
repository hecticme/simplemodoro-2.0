<script setup>
// Import components.
import ButtonPlaybackControl from './ButtonPlaybackControl.vue'

// Import stores.
import { usePomodoroStore } from '@/stores/pomodoro'

const props = defineProps({
  isPaused: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'resume',
  'pause',
  'reset',
])

const pomodoro = usePomodoroStore()

function handleResumePause () {
  emit(props.isPaused ? 'resume' : 'pause')
}

function handleResetCountdown () {
  emit('reset')
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
      :icons="[
        'material-symbols:skip-next-rounded',
        'material-symbols:restart-alt-rounded',
      ]"
      :is-active="pomodoro.isBreak"
      @click="handleResetCountdown"
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
