<script setup lang="ts">
// Import components.
import { Icon } from '@iconify/vue'
import BaseButton from '@/src/components/base/BaseButton.vue'
defineProps<{
  isOpen: boolean
}>()

defineEmits([
  'toggleSettingsForm',
])
</script>

<template>
  <BaseButton
    class="button-settings"
    @click="$emit('toggleSettingsForm')"
  >
    <span>
      Set duration
    </span>

    <div class="icon-settings-wrapper">
      <Icon
        class="icon-settings"
        icon="material-symbols:settings-rounded"
      />
    </div>
  </BaseButton>
</template>

<style scoped>
/* Settings button. */
.button-settings {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 700;
}

/* Settings icon. */
.button-settings:is(:hover, :focus-visible) > .icon-settings-wrapper {
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
  color: var(--color-white-100);
  background-color: var(--color-black-900);
  transition-property: color, background-color, transform, border-radius;
  transition-duration: 250ms;
  transition-timing-function: var(--transition-cubic-bezier);
}

.dark .button-settings:is(:hover, :focus-visible) > .icon-settings-wrapper {
  color: var(--color-black-700);
}

.dark .icon-settings-wrapper {
  color: var(--color-black-800);
  background-color: var(--color-white-200);
}

/* For smaller screen. */
@media screen and (max-width: 37.5em) {
  .button-settings {
    font-size: 0.8rem;
  }
}
</style>
