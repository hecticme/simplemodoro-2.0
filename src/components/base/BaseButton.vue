<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  color: var(--color-black-900);
  background-color: var(--color-white-100);
  box-shadow: var(--box-shadow-button-dark);
  transition-property: color, background-color, opacity;
  transition-duration: 250ms;
  transition-timing-function: var(--transition-cubic-bezier);
}

.base-button:disabled {
  opacity: 0.4;
  cursor: auto;
  pointer-events: none;
}

.base-button:is(:hover, :focus-visible) {
  background-color: var(--color-gray-100);
}

.dark .base-button {
  color: var(--color-white-200);
  background-color: var(--color-black-800);
  box-shadow: var(--box-shadow-button-light);
}

.dark .base-button:is(:hover, :focus-visible) {
  background-color: var(--color-black-700);
}
</style>
