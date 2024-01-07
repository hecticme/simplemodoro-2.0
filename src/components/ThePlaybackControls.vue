<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const isPlaying = ref(false);

function handleResumePause() {
  isPlaying.value = !isPlaying.value;
}
</script>

<template>
<div class="playback-controls">
  <button
    class="playback-button button-play"
    @click="handleResumePause"
  >
    <div class="playback-icon-anchor">
      <div
        class="playback-icon-wrapper"
        :class="{
          'is-playing': isPlaying,
        }"
      >
        <Icon
          icon="material-symbols:play-arrow-rounded"
          class="playback-icon"
        />

        <Icon
          icon="material-symbols:pause-rounded"
          class="playback-icon"
        />
      </div>
    </div>
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
  --playback-icon-size: 1.3rem;
}

.playback-button:is(:hover, :focus-visible) {
  transform: translateY(-3px);
  color: var(--color-black);
  background-color: var(--color-white);
  outline: 1px solid var(--color-black);
}

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
  top: 0;
  transition-property: top;
  transition-duration: 150ms;
  transition-timing-function: var(--cubic-bezier);
}

.playback-icon-wrapper.is-playing {
  top: -100%;
}

.playback-icon {
  font-size: var(--playback-icon-size);
}
</style>
