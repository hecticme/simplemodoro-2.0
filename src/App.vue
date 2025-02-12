<script setup lang="ts">
// Import stores.
import { useThemeStore } from './stores/theme'

// Import components.
import ThePomodoro from '~/components/the/ThePomodoro.vue'
import TheHeader from '~/components/the/TheHeader.vue'
import TheSettings from '~/components/the/TheSettings.vue'

const theme = useThemeStore()
</script>

<template>
  <div
    class="app-body"
    :class="{
      dark: theme.isDarkTheme
    }"
  >
    <main class="app-container">
      <TheHeader />
      <ThePomodoro />
      <TheSettings />
    </main>
  </div>
</template>

<style scoped>
.app-body {
  color: var(--color-black-900);
  background-color: var(--color-white-100);
  transition-property: color, background-color;
  transition-duration: 150ms;
  transition-timing-function: var(--transition-cubic-bezier);
}

.app-body.dark {
  background-color: var(--color-black-800);
  color: var(--color-white-200);
}

.app-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  height: 100vh;
  max-width: 1200px;
  padding-inline: clamp(0.75rem, 1.5vw, 1.5rem);
  margin-inline: auto;
}
</style>
