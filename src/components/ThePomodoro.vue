<script setup>
// Import composables
import usePomodoro from '@/composables/usePomodoro'

// Import components
import TheCountdown from './TheCountdown.vue'
import ThePlaybackControls from './ThePlaybackControls.vue'

const {
  timeLeft,
  isPaused,
  resume,
  pause,
  reset,
} = usePomodoro()

</script>

<template>
<section class="pomodoro">
  <TheCountdown :timeLeft="timeLeft" />

  <ThePlaybackControls
    :isPaused="isPaused"
    @resume="resume"
    @pause="pause"
    @reset="reset"
  />
</section>
</template>

<style scoped>
.pomodoro {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
</style>
