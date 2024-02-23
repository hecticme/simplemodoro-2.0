<script setup>
import { ref } from 'vue'

// Import stores
import { usePomodoroStore } from '@/stores/pomodoro'

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

defineEmits([
  'toggleSettingsForm',
])

const pomodoro = usePomodoroStore()

const focusDuration = ref(pomodoro.focusDuration / 60)
const breakDuration = ref(pomodoro.breakDuration / 60)
</script>

<template>
<section
  v-if="isOpen"
  class="settings-form-wrapper"
>
  <div class="settings-form">
    <div class="input-container">
      <label
        for="focus-duration"
        class="label"
      >
        Focus session duration
      </label>
      <input
        v-model="focusDuration"
        type="number"
        id="focus-duration"
        name="focus-duration"
        class="input-session"
      />
    </div>

    <div class="input-container">
      <label
        for="break-duration"
        class="label"
      >
        Break session duration
      </label>
      <input
        v-model="breakDuration"
        type="number"
        id="break-duration"
        name="break-duration"
        class="input-session"
      />
    </div>

    <button
      @click="$emit('toggleSettingsForm')"
      class="settings-save"
    >
      Save
    </button>
  </div>
</section>
</template>

<style scope>
.settings-form-wrapper {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(0, 0%, 9%, 0.5);
  backdrop-filter: blur(4px);
}

.settings-form {
  display: flex;
  flex-direction: column;
  background-color: var(--color-black-900);
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 4px;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.label {
  font-weight: 700;
  color: var(--color-white-100);
}

.input-session {
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  padding: 0.3rem 0.5rem;
}

.settings-save {
  font-weight: 700;
  padding: 0.625rem 1rem;
  margin-block-start: 1rem;
  border-radius: 4px;
}
</style>
