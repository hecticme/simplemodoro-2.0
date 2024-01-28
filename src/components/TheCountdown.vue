<script setup>
import { ref, computed } from 'vue'
import formatTime from '@/utils/formatTime'

const countdown = ref(25 * 60)
const normalizedCountdown = computed(
  () => formatTime(countdown.value)
)
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
</style>
