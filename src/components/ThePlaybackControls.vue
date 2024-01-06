<script setup>

</script>

<template>
<div class="playback-controls">
  <button class="playback-button button-play">

  </button>
  <button class="playback-button button-reset">

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
  width: 2.5rem;
  aspect-ratio: 1;
  border-radius: 50%;
  color: var(--color-white);
  background-color: var(--color-black);
}
</style>
