<script setup>
import { ref } from 'vue'

const message = ref("Hello! I'll update this message")
</script>

<template>
<h2 class="message">
  {{ message }}
</h2>
</template>

<style scoped>
.message {
  margin-block: 2.5rem 9rem;
}
</style>
