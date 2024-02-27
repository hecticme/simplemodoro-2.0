import { ref, computed, watch } from 'vue'
import { usePomodoroStore } from '@/stores/pomodoro'
import formatTime from '@/utils/formatTime'

export default function usePomodoro () {
  const pomodoro = usePomodoroStore()

  /** Remaining time value to be displayed. Default to focus duration. */
  const timeLeft = ref(pomodoro.focusDuration)
  /** Remaining time value for the next countdown after paused. */
  const timeLeftMark = ref(pomodoro.focusDuration)

  const intervalId = ref(null)
  const resumeTime = ref(null)

  const isPaused = computed(() => intervalId.value === null)

  // Play notification sound.
  const notificationSound = new Audio('/sounds/notification-sound.mp3')

  function playNotificationSound () {
    notificationSound.currentTime = 0
    notificationSound.play()
  }

  // Reflect changes on focus duration if the countdown is not active.
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

  // Playback functions.
  function resume () {
    resumeTime.value = Date.now()

    intervalId.value = setInterval(() => {
      const timePassed = (Date.now() - resumeTime.value) / 1000
      const remainingTime = Math.ceil(timeLeftMark.value - timePassed)

      if (remainingTime >= 0) {
        timeLeft.value = remainingTime

        const sessionName = pomodoro.isBreak ? 'Break 🔵' : 'Focus 🔥'
        document.title = `${sessionName} - ${formatTime(remainingTime)}`

        return
      }

      if (!pomodoro.isBreak) {
        timeLeft.value = pomodoro.breakDuration
        timeLeftMark.value = pomodoro.breakDuration
        resumeTime.value = Date.now()

        playNotificationSound()

        pomodoro.setIsBreak(true)
        document.title = 'Finished 🙌!'

        return
      }

      timeLeft.value = pomodoro.focusDuration
      timeLeftMark.value = pomodoro.focusDuration

      playNotificationSound()

      clearCountdownInterval()
      pomodoro.setIsBreak(false)

      document.title = 'Simplemodoro'
    }, 500)
  }

  function pause () {
    timeLeftMark.value = timeLeft.value
    document.title = 'Paused 👾'

    clearCountdownInterval()
  }

  function reset () {
    timeLeft.value = pomodoro.focusDuration
    timeLeftMark.value = pomodoro.focusDuration

    clearCountdownInterval()
    pomodoro.setIsBreak(false)

    document.title = 'Simplemodoro'
  }

  // Reusable functions specific to this composable.
  function clearCountdownInterval () {
    clearInterval(intervalId.value)
    intervalId.value = null
  }

  return {
    timeLeft,
    isPaused,
    resume,
    pause,
    reset,
  }
}
