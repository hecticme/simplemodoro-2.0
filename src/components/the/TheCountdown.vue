<script setup lang="ts">
import { computed } from 'vue'
import { formatTime } from '~/utils/formatTime'
import { usePomodoroStore } from '~/stores/pomodoro'

const props = defineProps<{
  timeLeft: number
}>()

const normalizedCountdown = computed(() => formatTime(props.timeLeft))

const pomodoro = usePomodoroStore()
</script>

<template>
  <h1
    class="countdown"
    :class="{
      'isBreak': pomodoro.isBreak,
    }"
  >
    {{ normalizedCountdown }}
  </h1>
</template>

<style scoped>
.countdown {
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 4.5rem;
  font-weight: 700;
}

.countdown::after {
  content: '';
  position: absolute;
  top: 82%;
  background-color: var(--color-emerald-500);
  width: 0;
  height: 6px;
  transition: width 250ms var(--transition-cubic-bezier);
}

.countdown.isBreak::after {
  width: 100%;
}

/* For smaller screen. */
@media screen and (max-width: 37.5em) {
  .countdown {
    font-size: 3.5rem;
  }
}
</style>
