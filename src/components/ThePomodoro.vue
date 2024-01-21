<script setup>
import TheCountdown from './TheCountdown.vue'
import ThePlaybackControls from './ThePlaybackControls.vue'
</script>

<template>
<section class="pomodoro">
  <TheCountdown />
  <ThePlaybackControls />
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
