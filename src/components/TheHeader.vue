<script setup>
import ButtonTheme from './ButtonTheme.vue'
import LinkGithub from './LinkGithub.vue'
</script>

<template>
<header class="header">
  <p class="logo-text">Simplemodoro.</p>

  <div class="header-utils">
    <ButtonTheme />

    <LinkGithub />
  </div>
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

.header-utils {
  display: flex;
  gap: 0.75rem;
}

.logo-text {
  font-size: 0.75rem;
  font-weight: 700;
}
</style>
