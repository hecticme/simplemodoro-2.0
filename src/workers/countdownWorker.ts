let countdownIntervalId: number | null = null

onmessage = event => {
  const message = event.data

  if (message === 'start') {
    countdownIntervalId = setInterval(() => {
      postMessage('')
    }, 500)
  }

  if (message === 'clear' && countdownIntervalId !== null) {
    clearInterval(countdownIntervalId)
    countdownIntervalId = null
  }
}
