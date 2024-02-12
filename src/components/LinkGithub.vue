<script setup>
import IconGithubMark from '../assets/icons/IconGithubMark.vue'
</script>

<template>
<a
  href="https://github.com/"
  target="_blank"
  rel="noreferrer"
  class="icon-github-container"
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
  background-color: #eeeeee;
  outline: none;
}

.icon-github {
  width: 1rem;
  color: #151515;
  cursor: pointer;
  transition-property: transform;
  transition-duration: 150ms;
  transition-timing-function: var(--transition-cubic-bezier);
}
</style>
