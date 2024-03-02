<script setup>
import IconGithubMark from '../assets/icons/IconGithubMark.vue'
</script>

<template>
  <a
    class="icon-github-container"
    href="https://github.com/hecticme/simplemodoro-2.0"
    rel="noreferrer"
    target="_blank"
  >
    <IconGithubMark class="icon-github" />
  </a>
</template>

<style scoped>
.icon-github-container {
  padding: 0.5rem;
  border-radius: 50%;
  transition-property: background-color;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;
}

.icon-github-container:is(:hover, :focus-visible) {
  background-color: var(--color-gray-100);
}

.icon-github {
  width: 1rem;
  color: var(--color-black-900);
  cursor: pointer;
  transition-property: color, transform;
  transition-duration: 150ms;
  transition-timing-function: var(--transition-cubic-bezier);
}

.dark .icon-github-container:is(:hover, :focus-visible) {
  background-color: var(--color-black-700);
}

.dark .icon-github {
  color: var(--color-white-200);
}
</style>
