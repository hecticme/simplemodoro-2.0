<script setup>
import IconGithubMark from '../assets/icons/IconGithubMark.vue'
</script>

<template>
<a
  href="https://github.com/"
  target="_blank"
  rel="noreferrer"
>
  <IconGithubMark class="icon-github" />
</a>
</template>

<style scoped>
.icon-github {
  width: 1rem;
  color: #151515;
  cursor: pointer;
  transition-property: transform;
  transition-duration: 150ms;
  transition-timing-function: var(--transition-cubic-bezier);
}

.icon-github:hover {
  transform: scale(1.1);
}
</style>
