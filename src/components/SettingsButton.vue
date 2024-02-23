<script setup>
// Import components
import { Icon } from '@iconify/vue'

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

defineEmits([
  'toggleSettingsForm',
])
</script>

<template>
<button
  @click="$emit('toggleSettingsForm')"
  class="button-settings"
>
  <span>
    Set duration
  </span>

  <div class="icon-settings-wrapper">
    <Icon
      icon="material-symbols:settings-rounded"
      class="icon-settings"
    />
  </div>
</button>
</template>

<style scoped>
.button-settings {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-white-100);
  background-color: var(--color-black-900);
  transition-property: color, background-color, outline;
  transition-duration: 250ms;
  transition-timing-function: var(--transition-cubic-bezier);
}

.button-settings:is(:hover, :focus-visible) {
  color: var(--color-black-900);
  background-color: var(--color-white-100);
  outline: 1px solid var(--color-black-900);
}

.button-settings:is(:hover, :focus-visible) > .icon-settings-wrapper {
  color: var(--color-white-100);
  background-color: var(--color-black-900);
  border-radius: 50%;
  transform: rotate(30deg);
}

.icon-settings-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  aspect-ratio: 1 / 1;
  padding: 0.5rem;
  color: var(--color-black-900);
  background-color: var(--color-white-100);
  transition-property: color, background-color, transform, border-radius;
  transition-duration: 250ms;
  transition-timing-function: var(--transition-cubic-bezier);
}
</style>
