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
}
</style>
