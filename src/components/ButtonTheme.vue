<script setup>
import { computed } from 'vue'

// Import components.
import { Icon } from '@iconify/vue'

// Import stores.
import { useThemeStore } from '@/stores/theme'

const iconThemeName = computed(() => theme.isDarkTheme
  ? 'material-symbols:dark-mode-rounded'
  : 'material-symbols:sunny-outline-rounded'
)

const theme = useThemeStore()
</script>

<template>
  <button
    class="button-theme"
    @click="theme.toggleDarkTheme"
  >
    <Icon
      :icon="iconThemeName"
      class="icon-theme"
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
  background-color: #fff;
  transition-property: background-color;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;
}

.button-theme:is(:hover, :focus-visible) {
  background-color: #eeeeee;
  outline: none;
}

.icon-theme {
  font-size: 1rem;
}
</style>
