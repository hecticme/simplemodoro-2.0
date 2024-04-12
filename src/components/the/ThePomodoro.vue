<script setup lang="ts">
// Import composables.
import usePomodoro from '@/src/composables/usePomodoro'

// Import components.
import TheCountdown from '@/src/components/the/TheCountdown.vue'
import ThePlaybackControls from '@/src/components/the/ThePlaybackControls.vue'

const {
  timeLeft,
  isPaused,
  hasStarted,
  resume,
  pause,
  reset,
} = usePomodoro()

</script>

<template>
  <section class="pomodoro">
    <TheCountdown :time-left="timeLeft" />

    <ThePlaybackControls
      :has-started="hasStarted"
      :is-paused="isPaused"
      @pause="pause"
      @reset="reset"
      @resume="resume"
    />
  </section>
</template>

<style scoped>
.pomodoro {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-block-start: clamp(4rem, 20vh, 10rem);
}
</style>
