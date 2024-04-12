let countdownIntervalId = null

onmessage = event => {
  const message = event.data

  if (message === 'start') {
    countdownIntervalId = setInterval(() => {
      postMessage('')
    }, 500)
  }

  if (message === 'clear') {
    clearInterval(countdownIntervalId)
    countdownIntervalId = null
  }
}
