<script setup>
import { computed } from 'vue'

// Import components.
import { Icon } from '@iconify/vue'

// Import stores.
import { useThemeStore } from '@/stores/theme'

const theme = useThemeStore()

const iconThemeName = computed(() => theme.isDarkTheme
  ? 'material-symbols:dark-mode-rounded'
  : 'material-symbols:sunny-outline-rounded'
)
</script>

<template>
  <button
    class="button-theme"
    @click="theme.toggleDarkTheme"
  >
    <Icon
      class="icon-theme"
      :icon="iconThemeName"
    />
  </button>
</template>

<style scoped>
.button-theme {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  color: var(--color-black-900);
  background-color: transparent;
  transition-property: color, background-color;
  transition-duration: 150ms;
  transition-timing-function: var(--transition-cubic-bezier);
}

.button-theme:is(:hover, :focus-visible) {
  background-color: var(--color-gray-100);
}

.dark .button-theme {
  color: var(--color-white-200);
}

.dark .button-theme:is(:hover, :focus-visible) {
  background-color: var(--color-black-700);
}

.icon-theme {
  font-size: 1rem;
}
</style>
