import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePomodoroStore = defineStore('pomodoro', () => {
  // Session durations
  const DEFAULT_FOCUS_DURATION = 25 * 60
  const DEFAULT_BREAK_DURATION = 5 * 60
  const localFocusDuration = localStorage.getItem('focusDuration')
  const localBreakDuration = localStorage.getItem('breakDuration')

  const focusDuration = ref(Number(localFocusDuration) || DEFAULT_FOCUS_DURATION)
  const breakDuration = ref(Number(localBreakDuration) || DEFAULT_BREAK_DURATION)

  function setFocusDuration (duration: number) {
    focusDuration.value = duration

    if (duration === DEFAULT_FOCUS_DURATION) {
      localStorage.removeItem('focusDuration')
      return
    }

    localStorage.setItem('focusDuration', JSON.stringify(focusDuration.value))
  }

  function setBreakDuration (duration: number) {
    breakDuration.value = duration

    if (duration === DEFAULT_BREAK_DURATION) {
      localStorage.removeItem('breakDuration')
      return
    }

    localStorage.setItem('breakDuration', JSON.stringify(breakDuration.value))
  }

  // Pomodoro's session state
  const isBreak = ref(false)

  function setIsBreak (state: boolean) {
    isBreak.value = state
  }

  return {
    focusDuration,
    breakDuration,
    DEFAULT_FOCUS_DURATION,
    DEFAULT_BREAK_DURATION,
    setFocusDuration,
    setBreakDuration,
    isBreak,
    setIsBreak,
  }
})
