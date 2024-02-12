<script setup>
import { ref } from 'vue'

// Import components.
import TheCountdown from './TheCountdown.vue'
import ThePlaybackControls from './ThePlaybackControls.vue'

const initialDuration = 25 * 60

/** Remaining time value to be displayed. */
const timeLeft = ref(initialDuration)
/** Remaining time value for the next countdown after paused. */
const timeLeftMark = ref(initialDuration)

const intervalId = ref(null)
const resumeTime = ref(null)

function resume () {
  resumeTime.value = Date.now()

  intervalId.value = setInterval(() => {
    const timePassed = (Date.now() - resumeTime.value) / 1000
    timeLeft.value = Math.ceil(timeLeftMark.value - timePassed)
  }, 500)
}

function pause () {
  timeLeftMark.value = timeLeft.value
  clearInterval(intervalId.value)
}

function reset () {
  timeLeft.value = initialDuration
  timeLeftMark.value = initialDuration
  clearInterval(intervalId.value)
}
</script>

<template>
<section class="pomodoro">
  <TheCountdown :timeLeft="timeLeft" />

  <ThePlaybackControls
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
