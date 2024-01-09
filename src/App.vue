<script setup>
import ThePomodoro from './components/ThePomodoro.vue';
import TheHeader from './components/TheHeader/index.vue';
</script>

<template>
  <main class="app-container">
    <TheHeader />

    <ThePomodoro />
  </main>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-width: 1200px;
  padding-inline: clamp(0.75rem, 1.5vw, 1.5rem);
  margin-inline: auto;
}
</style>
