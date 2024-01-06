<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
<div class="playback-controls">
  <button class="playback-button button-play">
    <Icon
      icon="material-symbols:play-arrow-rounded"
      class="playback-icon"
    />
  </button>
  <button class="playback-button button-reset">
    <Icon
      icon="material-symbols:restart-alt-rounded"
      class="playback-icon"
    />
  </button>
</div>
</template>

<style scoped>
.playback-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.playback-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  aspect-ratio: 1;
  border-radius: 50%;
  color: var(--color-white);
  background-color: var(--color-black);
  transition-property: transform, color, background-color;
  transition-duration: 150ms;
  transition-timing-function: var(--cubic-bezier);
}

.playback-button:is(:hover, :focus) {
  transform: translateY(-3px);
  color: var(--color-black);
  background-color: var(--color-white);
  outline: 1px solid var(--color-black);
}

.playback-icon {
  font-size: 1.3rem;
}
</style>
