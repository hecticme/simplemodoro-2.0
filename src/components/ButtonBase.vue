<template>
  <button class="button-base">
    <slot></slot>
  </button>
</template>

<style scoped>
.button-base {
  color: var(--color-black-900);
  background-color: var(--color-white-100);
  box-shadow: var(--box-shadow-button-dark);
  transition-property: color, background-color, opacity;
  transition-duration: 250ms;
  transition-timing-function: var(--transition-cubic-bezier);
}

.button-base:disabled {
  opacity: 0.4;
  cursor: auto;
  pointer-events: none;
}

.button-base:is(:hover, :focus-visible) {
  background-color: var(--color-gray-100);
}

.dark .button-base {
  color: var(--color-white-200);
  background-color: var(--color-black-800);
  box-shadow: var(--box-shadow-button-light);
}

.dark .button-base:is(:hover, :focus-visible) {
  background-color: var(--color-black-700);
}
</style>
