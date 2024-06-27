<script setup lang="ts">
import { ref } from 'vue'

// Import components.
import SettingsForm from '~/components/settings/SettingsForm.vue'
import SettingsButton from '~/components/settings/SettingsButton.vue'

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
