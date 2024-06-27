import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
// Import components
import BaseButton from '@/src/components/base/BaseButton.vue'

test('to have base-button class', () => {
  const wrapper = mount(BaseButton)

  expect(wrapper.classes()).toContain('base-button')
})
