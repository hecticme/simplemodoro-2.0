import { ref, computed, watch } from 'vue'
import { usePomodoroStore } from '@/stores/pomodoro'

export default function usePomodoro () {
  const pomodoro = usePomodoroStore()

  /** Remaining time value to be displayed. Default to focus duration. */
  const timeLeft = ref(pomodoro.focusDuration)
  /** Remaining time value for the next countdown after paused. */
  const timeLeftMark = ref(pomodoro.focusDuration)

  const isPaused = computed(() => intervalId.value === null)
  watch(
    () => pomodoro.focusDuration,
    () => {
      if (!isPaused.value) {
        return
      }


      timeLeft.value = pomodoro.focusDuration
      timeLeftMark.value = pomodoro.focusDuration
    }
  )

  const intervalId = ref(null)
  const resumeTime = ref(null)

  function resume () {
    resumeTime.value = Date.now()

    intervalId.value = setInterval(() => {
      const timePassed = (Date.now() - resumeTime.value) / 1000
      timeLeft.value = Math.ceil(timeLeftMark.value - timePassed)
    }, 500)
  }

  function pause () {
    timeLeftMark.value = timeLeft.value

    clearInterval(intervalId.value)
    intervalId.value = null
  }

  function reset () {
    timeLeft.value = pomodoro.focusDuration
    timeLeftMark.value = pomodoro.focusDuration

    clearInterval(intervalId.value)
    intervalId.value = null
  }

  return {
    timeLeft,
    resume,
    pause,
    reset,
  }
}



