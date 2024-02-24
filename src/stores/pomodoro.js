import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePomodoroStore = defineStore('pomodoro', () => {
  // Session durations
  const localFocusDuration = localStorage.getItem('focusDuration')
  const localBreakDuration = localStorage.getItem('breakDuration')

  const focusDuration = ref(Number(localFocusDuration) || 25 * 60)
  const breakDuration = ref(Number(localBreakDuration) || 5 * 60)

  /**
   * @param {number} duration - Focus session duration.
   * @returns {void}
   */
  function setFocusDuration (duration) {
    focusDuration.value = duration
    localStorage.setItem('focusDuration', focusDuration.value)
  }

  /**
   * @param {number} duration - Break session duration.
   * @returns {void}
   */
  function setBreakDuration (duration) {
    breakDuration.value = duration
    localStorage.setItem('breakDuration', breakDuration.value)
  }

  // Pomodoro's session state
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
    setFocusDuration,
    setBreakDuration,
    isBreak,
    setIsBreak,
  }
})
