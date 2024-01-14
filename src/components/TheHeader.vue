<script setup>
import IconGithubMark from '../assets/icons/IconGithubMark.vue';
</script>

<template>
<header class="header">
  <p class="logo-text">Simplemodoro.</p>

  <a href="https://github.com/">
    <IconGithubMark class="icon-github" />
  </a>
</header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-block: 1.5rem 2.5rem;
  width: 100%;
}

.logo-text {
  font-size: 0.75rem;
  font-weight: 700;
}

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
