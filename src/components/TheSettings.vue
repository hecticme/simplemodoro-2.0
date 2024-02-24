<script setup>
import { ref } from 'vue'

// Import components.
import SettingsForm from './SettingsForm.vue'
import SettingsButton from './SettingsButton.vue'

const isOpen = ref(false)

function toggleSettingsForm () {
  isOpen.value = !isOpen.value
}
</script>

<template>
<div class="settings">
  <SettingsButton
    :is-open="isOpen"
    @toggle-settings-form="toggleSettingsForm"
  />

  <SettingsForm
    :is-open="isOpen"
    @toggle-settings-form="toggleSettingsForm"
  />
</div>
</template>

<style scoped>
.settings {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 4px;
}
</style>
