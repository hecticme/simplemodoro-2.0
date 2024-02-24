import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePomodoroStore = defineStore('pomodoro', () => {
  // Session duration settings
  const focusDuration = ref(localStorage.getItem('focusDuration') ?? 25 * 60)
  const breakDuration = ref(localStorage.getItem('breakDuration') ?? 5 * 60)

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

  // Pomodoro state
  const isBreak = ref(false)

  function toggleSession () {
    isBreak.value = !isBreak.value
  }

  return {
    focusDuration,
    breakDuration,
    setFocusDuration,
    setBreakDuration,
    isBreak,
    toggleSession,
  }
})
