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

  /**
   * @param {number} duration - Focus session duration.
   * @returns {void}
   */
  function setFocusDuration (duration) {
    focusDuration.value = duration

    if (duration === defaultFocusDuration) {
      localStorage.removeItem('focusDuration')

      return
    }

    localStorage.setItem('focusDuration', focusDuration.value)
  }

  /**
   * @param {number} duration - Break session duration.
   * @returns {void}
   */
  function setBreakDuration (duration) {
    breakDuration.value = duration

    if (duration === defaultBreakDuration) {
      localStorage.removeItem('breakDuration')

      return
    }

    localStorage.setItem('breakDuration', breakDuration.value)
  }

  // Pomodoro's session state.
  const isBreak = ref(false)

  /**
   * @param {boolean} state - A boolean value to know if it is break session.
   */
  function setIsBreak (state) {
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
