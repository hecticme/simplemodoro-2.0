<script setup>
import { ref } from 'vue';

const countdown = ref(25 * 60);

</script>

<template>
  <h1 class="countdown">
    {{ countdown }}
  </h1>
</template>

<style scoped>

</style>
