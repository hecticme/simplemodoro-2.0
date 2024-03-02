<script setup>
import { ref } from 'vue'

// Import stores.
import { usePomodoroStore } from '@/stores/pomodoro'

// Import components.
import { Icon } from '@iconify/vue'

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'toggleSettingsForm',
])

const pomodoro = usePomodoroStore()

const focusDuration = ref(pomodoro.focusDuration / 60)
const breakDuration = ref(pomodoro.breakDuration / 60)

function resetFocusDuration () {
  focusDuration.value = pomodoro.defaultFocusDuration / 60
}

function resetBreakDuration () {
  breakDuration.value = pomodoro.defaultBreakDuration / 60
}

function saveSettings () {
  emit('toggleSettingsForm')

  pomodoro.setFocusDuration(focusDuration.value * 60)
  pomodoro.setBreakDuration(breakDuration.value * 60)
}

// Handle min and max value for sessions' duration.
function handleBlurFocusDuration (event) {
  const minValue = 10
  const maxValue = 240

  const durationValue = event.target.value

  if (durationValue < minValue) {
    focusDuration.value = minValue

    return
  }

  if (durationValue > maxValue) {
    focusDuration.value = maxValue
  }
}

function handleBlurBreakDuration (event) {
  const minValue = 1
  const maxValue = 15

  const durationValue = event.target.value

  if (durationValue < minValue) {
    breakDuration.value = minValue

    return
  }

  if (durationValue > maxValue) {
    breakDuration.value = maxValue
  }
}

// Reset sessions' duration on modal closing if settings are not saved.
function onAfterLeave () {
  if (focusDuration.value * 60 !== pomodoro.focusDuration) {
    focusDuration.value = pomodoro.focusDuration / 60
  }

  if (breakDuration.value * 60 !== pomodoro.breakDuration) {
    breakDuration.value = pomodoro.breakDuration / 60
  }
}
</script>

<template>
  <Transition
    name="fly-in"
    :duration="250"
    @after-leave="onAfterLeave"
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
        <div class="input-section">
          <label
            for="focus-duration"
            class="label"
          >
            Focus session duration
          </label>

          <div class="input-container">
            <input
              v-model="focusDuration"
              @blur="handleBlurFocusDuration"
              type="number"
              min="10"
              max="240"
              id="focus-duration"
              name="focus-duration"
              class="input-session"
            />

            <button
              class="button-input-reset"
              @click="resetFocusDuration"
            >
              <Icon icon="material-symbols:reset-wrench-rounded" />
            </button>
          </div>
        </div>

        <div class="input-section">
          <label
            for="break-duration"
            class="label"
          >
            Break session duration
          </label>

          <div class="input-container">
            <input
              v-model="breakDuration"
              @blur="handleBlurBreakDuration"
              type="number"
              min="1"
              max="15"
              id="break-duration"
              name="break-duration"
              class="input-session"
            />

            <button
              class="button-input-reset"
              @click="resetBreakDuration"
            >
              <Icon icon="material-symbols:reset-wrench-rounded" />
            </button>
          </div>
        </div>

        <button
          @click="saveSettings"
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

.input-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.label {
  font-weight: 700;
  color: var(--color-white-100);
}

.input-container {
  display: flex;
  gap: 0.75rem;
  padding: 0.6rem 0.6rem;
  background-color: var(--color-white-100);
  border-radius: 4px;
}

.input-container:focus-within {
  outline: 2px solid var(--color-black-900);
  outline-offset: -3px;
}

.input-session {
  font-size: 1rem;
  border: none;
  flex: 1;
  min-width: 12.5rem;
}

.input-session:focus {
  outline: none;
}

.button-input-reset {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  color: var(--color-white-100);
  background-color: var(--color-black-900);
  padding: 0.5rem;
  border-radius: 50%;
  transition-property: color, background-color, outline;
  transition-duration: 150ms;
  transition-timing-function: var(--transition-cubic-bezier);
}

.button-input-reset:is(:hover, :focus-visible) {
  color: var(--color-black-900);
  background-color: var(--color-white-100);
  outline: 1px solid var(--color-black-900);
}

.settings-save {
  align-self: center;
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
