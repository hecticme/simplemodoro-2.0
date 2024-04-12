/**
 * Add '0' to the start of single digits.
 */
export function normalizedTimeUnit (time: number) {
  return time.toString().padStart(2, '0')
}

/**
 * Format time in number format to readable clock-like string.
 *
 * @example formatTime(25 * 60) // '25:00'
 */
export default function formatTime (time: number) {
  const minute = Math.floor(time / 60)
  const second = time % 60
  return `${normalizedTimeUnit(minute)}:${normalizedTimeUnit(second)}`
}
