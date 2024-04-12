import { ref, watch, computed } from 'vue'
import { usePomodoroStore } from '@/src/stores/pomodoro'
import formatTime from '@/src/utils/formatTime'

export default function usePomodoro () {
  const pomodoro = usePomodoroStore()

  /** The countdown interval id used when there's no Web Worker. */
  const intervalId = ref<number | null>(null)
  /** Remaining time value to be displayed. Default to focus duration. */
  const timeLeft = ref(pomodoro.focusDuration)
  /** Remaining time value for the next countdown after paused. */
  const timeLeftMark = ref(pomodoro.focusDuration)
  /** The timestamp when the resume button was pressed. Used to calculate elapsed time. */
  const resumeTime = ref<number | null>(null)

  const isPaused = ref(true)
  const hasStarted = computed(() =>
    pomodoro.isBreak || timeLeft.value !== pomodoro.focusDuration
  )

  // Alert the users if they close the website when the countdown is running.
  window.addEventListener('beforeunload', (e) => {
    if (!isPaused.value) {
      e.preventDefault()
    }
  })

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

  // Web worker to avoid throttling. Use it set interval if the browser supports it.
  const countdownWorker = window.Worker
    ? new Worker(new URL('@/src/workers/countdownWorker', import.meta.url))
    : null

  if (countdownWorker) {
    countdownWorker.onmessage = () => {
      countdownTick()
    }
  }

  // Playback functions.
  function resume () {
    isPaused.value = false
    resumeTime.value = Date.now()

    if (countdownWorker) {
      countdownWorker.postMessage('start')
    } else {
      intervalId.value = setInterval(countdownTick, 500)
    }
  }

  function pause () {
    timeLeftMark.value = timeLeft.value
    isPaused.value = true
    document.title = 'Paused 👾'

    clearCountdownInterval()
  }

  function reset () {
    timeLeft.value = pomodoro.focusDuration
    timeLeftMark.value = pomodoro.focusDuration

    clearCountdownInterval()
    isPaused.value = true
    pomodoro.setIsBreak(false)

    document.title = 'Simplemodoro'
  }

  // Reusable functions specific to this composable.
  function clearCountdownInterval () {
    if (countdownWorker) {
      countdownWorker.postMessage('clear')
      return
    }

    if (intervalId.value) {
      clearInterval(intervalId.value)
      intervalId.value = null
    }
  }

  function countdownTick () {
    const timePassed = resumeTime.value ? (Date.now() - resumeTime.value) / 1000 : 0
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
    isPaused.value = true
    pomodoro.setIsBreak(false)

    document.title = 'Simplemodoro'
  }

  return {
    timeLeft,
    isPaused,
    hasStarted,
    resume,
    pause,
    reset,
  }
}
