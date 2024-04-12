import { test, expect, describe } from 'vitest'
import { formatTime, normalizedTimeUnit } from '../formatTime'

describe('normalizedTimeUnit', () => {
  test('Pad single digit with "0"', () => {
    expect(normalizedTimeUnit(1)).toBe('01')
  })

  test("Don't touch more than single digit number", () => {
    expect(normalizedTimeUnit(24)).toBe('24')
  })
})

describe('formatTime', () => {
  test('To return clock-like string format', () => {
    expect(formatTime(25 * 60)).toBe('25:00')
  })
})
