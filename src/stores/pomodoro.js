import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePomodoroStore = defineStore('pomodoro', () => {
  // Session duration settings.
  const focusDuration = ref(25 * 60)
  const breakDuration = ref(5 * 60)

  /**
   * @param {number} duration - Focus session duration
   * @returns {void}
   */
  function setFocusDuration (duration) {
    focusDuration.value = duration
  }

  /**
   * @param {number} duration - Break session duration
   * @returns {void}
   */
  function setBreakDuration (duration) {
    breakDuration.value = duration
  }

  // Pomodoro state.
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
