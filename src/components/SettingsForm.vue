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
<Transition
  name="fly-in"
  :duration="250"
>
  <section
    v-if="isOpen"
    class="settings-form-wrapper"
  >
    <!-- This `div` is for turning off the modal when clicking outside -->
    <div
      @click="$emit('toggleSettingsForm')"
      class="settings-background"
    ></div>

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
</Transition>
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

.settings-background {
  position: absolute;
  inset: 0;
}

.settings-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-black-900);
  gap: 1.5rem;
  padding: 1.75rem 2.5rem;
  border-radius: 12px;
  z-index: 1;
}

.fly-in-enter-active .settings-form,
.fly-in-leave-active .settings-form {
  transition-property: transform, opacity;
  transition-duration: 250ms;
  transition-timing-function: var(--transition-cubic-bezier);
}

.fly-in-enter-from .settings-form,
.fly-in-leave-to .settings-form {
  transform: translateY(20px);
  opacity: 0;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.label {
  font-weight: 700;
  color: var(--color-white-100);
}

.input-session {
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 0.5rem;
}

.settings-save {
  width: fit-content;
  padding: 0.625rem 2.75rem;
  margin-block-start: 0.5rem;
  border-radius: 100vh;
  font-weight: 700;
  color: var(--color-white-100);
  background-color: var(--color-black-900);
  transition-property: background-color;
  transition-duration: 150ms;
  transition-timing-function: var(--transition-cubic-bezier);
}

.settings-save:is(:hover, :focus-visible) {
  background-color: var(--color-black-700);
}
</style>
