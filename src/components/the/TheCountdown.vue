<script setup lang="ts">
import { computed } from 'vue'
import { formatTime } from '@/src/utils/formatTime'

const props = defineProps<{
  timeLeft: number
}>()

const normalizedCountdown = computed(() => formatTime(props.timeLeft))
</script>

<template>
  <h1 class="countdown">
    {{ normalizedCountdown }}
  </h1>
</template>

<style scoped>
.countdown {
  font-size: 4.5rem;
  font-weight: 700;
}

/* For smaller screen. */
@media screen and (max-width: 37.5em) {
  .countdown {
    font-size: 3.5rem;
  }
}
</style>
