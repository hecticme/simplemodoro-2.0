<template>
  <button class="button-base">
    <slot></slot>
  </button>
</template>

<style scoped>
.button-base {
  color: var(--color-white-100);
  background-color: var(--color-black-900);
  transition-property: color, background-color, outline;
  transition-duration: 250ms;
  transition-timing-function: var(--transition-cubic-bezier);
}

.button-base:is(:hover, :focus-visible) {
  color: var(--color-black-900);
  background-color: var(--color-white-100);
  outline: 1px solid var(--color-black-900);
}

.dark .button-base {
  color: var(--color-black-800);
  background-color: var(--color-white-200);
}

.dark .button-base:is(:hover, :focus-visible) {
  color: var(--color-white-200);
  background-color: var(--color-black-800);
  outline: 1px solid var(--color-white-200);
}
</style>
