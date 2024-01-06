<script setup>
import ThePomodoro from './components/ThePomodoro.vue';
</script>

<template>
  <main class="app-container">
    <ThePomodoro />
  </main>
</template>

<style scoped>
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
