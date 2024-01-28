/**
 * @param {number} time - A unit of time.
 * @returns {string} Add `0` at the start for single digits.
 */
function normalizedTimeUnit (time) {
  return time.toString().padStart(2, '0')
}

/**
 * @param {number} time - A duration in seconds.
 * @returns {string} A formatted time string.
 */
export default function formatTime (time) {
  const minute = Math.floor(time / 60)
  const second = time % 60

  return `${normalizedTimeUnit(minute)}:${normalizedTimeUnit(second)}`
}
