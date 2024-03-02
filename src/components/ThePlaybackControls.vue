<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
  isPaused: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'resume',
  'pause',
  'reset',
])

function handleResumePause () {
  emit(props.isPaused ? 'resume' : 'pause')
}

function handleResetCountdown () {
  emit('reset')
}
</script>

<template>
  <section class="playback-controls">
    <button
      class="playback-button button-play"
      @click="handleResumePause"
    >
      <div class="playback-icon-anchor">
        <div
          class="playback-icon-wrapper"
          :class="{
            'is-paused': isPaused,
          }"
        >
          <Icon
            class="playback-icon"
            icon="material-symbols:play-arrow-rounded"
          />

          <Icon
            class="playback-icon"
            icon="material-symbols:pause-rounded"
          />
        </div>
      </div>
    </button>

    <button
      class="playback-button button-reset"
      @click="handleResetCountdown"
    >
      <Icon
        class="playback-icon"
        icon="material-symbols:restart-alt-rounded"
      />
    </button>
  </section>
</template>

<style scoped>
.playback-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

/* Playback button */
.playback-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
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

.playback-icon-wrapper.is-paused {
  top: 0;
}

.playback-icon {
  font-size: var(--playback-icon-size);
}
</style>
