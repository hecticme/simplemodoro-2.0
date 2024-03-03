<script setup>
// Import components.
import { Icon } from '@iconify/vue'

defineProps({
  icons: {
    /** @type {import('vue').PropType<[string, string]>} */
    type: Array,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <button class="playback-button">
    <div class="playback-icon-anchor">
      <div
        class="playback-icon-wrapper"
        :class="{
          'is-active': isActive,
        }"
      >
        <Icon
          v-for="(icon, index) in icons"
          :key="index"
          class="playback-icon"
          :icon="icon"
        />
      </div>
    </div>
  </button>
</template>

<style scoped>
/* Playback button */
.playback-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625rem;
  aspect-ratio: 1;
  border-radius: 50%;
  color: var(--color-white-100);
  background-color: var(--color-black-900);
  transition-property: color, background-color, outline;
  transition-duration: 250ms;
  transition-timing-function: var(--transition-cubic-bezier);
  --playback-icon-size: 1.3rem;
}

.playback-button:is(:hover, :focus-visible) {
  color: var(--color-black-900);
  background-color: var(--color-white-100);
  outline: 1px solid var(--color-black-900);
}

.dark .playback-button {
  color: var(--color-black-800);
  background-color: var(--color-white-200);
}

.dark .playback-button:is(:hover, :focus-visible) {
  color: var(--color-white-200);
  background-color: var(--color-black-800);
  outline: 1px solid var(--color-white-200);
}

/* Playback icon */
.playback-icon-anchor {
  position: relative;
  display: flex;
  justify-content: center;
  width: var(--playback-icon-size);
  aspect-ratio: 1;
  overflow: hidden;
}

.playback-icon-wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: -100%;
  transition-property: top;
  transition-duration: 250ms;
  transition-timing-function: var(--transition-cubic-bezier);
}

.playback-icon-wrapper.is-active {
  top: 0;
}

.playback-icon {
  font-size: var(--playback-icon-size);
}

/* For smaller screen. */
@media screen and (max-width: 37.5em) {
  .playback-button {
    padding: 0.5rem;
    --playback-icon-size: 1.1rem;
  }
}
</style>
