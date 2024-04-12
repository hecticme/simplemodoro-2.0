import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePomodoroStore = defineStore('pomodoro', () => {
  // Session durations.
  const defaultFocusDuration = 25 * 60
  const defaultBreakDuration = 5 * 60

  const localFocusDuration = localStorage.getItem('focusDuration')
  const localBreakDuration = localStorage.getItem('breakDuration')

  const focusDuration = ref(Number(localFocusDuration) || defaultFocusDuration)
  const breakDuration = ref(Number(localBreakDuration) || defaultBreakDuration)

  function setFocusDuration (duration: number) {
    focusDuration.value = duration

    if (duration === defaultFocusDuration) {
      localStorage.removeItem('focusDuration')

      return
    }

    localStorage.setItem('focusDuration', JSON.stringify(focusDuration.value))
  }

  function setBreakDuration (duration: number) {
    breakDuration.value = duration

    if (duration === defaultBreakDuration) {
      localStorage.removeItem('breakDuration')

      return
    }

    localStorage.setItem('breakDuration', JSON.stringify(breakDuration.value))
  }

  // Pomodoro's session state.
  const isBreak = ref(false)

  function setIsBreak (state: boolean) {
    isBreak.value = state
  }

  return {
    focusDuration,
    breakDuration,
    defaultFocusDuration,
    defaultBreakDuration,
    setFocusDuration,
    setBreakDuration,
    isBreak,
    setIsBreak,
  }
})
