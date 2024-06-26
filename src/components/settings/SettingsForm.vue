<script setup lang="ts">
import { ref } from 'vue'

// Import stores.
import { usePomodoroStore } from '@/src/stores/pomodoro'

// Import components.
import SettingsFormInput from '@/src/components/settings/SettingsFormInput.vue'
import ModalBackground from '@/src/components/modal/ModalBackground.vue'

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits([
  'toggleSettingsForm',
])

const pomodoro = usePomodoroStore()

const focusDuration = ref(pomodoro.focusDuration / 60)
const breakDuration = ref(pomodoro.breakDuration / 60)

function resetFocusDuration () {
  focusDuration.value = pomodoro.DEFAULT_FOCUS_DURATION / 60
}

function resetBreakDuration () {
  breakDuration.value = pomodoro.DEFAULT_BREAK_DURATION / 60
}

function saveSettings () {
  emit('toggleSettingsForm')

  pomodoro.setFocusDuration(focusDuration.value * 60)
  pomodoro.setBreakDuration(breakDuration.value * 60)
}

// Handle min and max value for sessions' duration.
function handleBlurFocusDuration (event: FocusEvent & {
  target: HTMLInputElement
}) {
  const MIN_VALUE = 10
  const MAX_VALUE = 240

  const durationValue = Number(event.target.value)

  if (durationValue < MIN_VALUE) {
    focusDuration.value = MIN_VALUE
    return
  }

  if (durationValue > MAX_VALUE) {
    focusDuration.value = MAX_VALUE
  }
}

function handleBlurBreakDuration (event: FocusEvent & {
  target: HTMLInputElement
}) {
  const MIN_VALUE = 1
  const MAX_VALUE = 15

  const durationValue = Number(event.target.value)

  if (durationValue < MIN_VALUE) {
    breakDuration.value = MIN_VALUE
    return
  }

  if (durationValue > MAX_VALUE) {
    breakDuration.value = MAX_VALUE
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
  <Teleport to="#modal-container">
    <Transition
      :duration="250"
      name="fly-in"
      @after-leave="onAfterLeave"
    >
      <section
        v-if="isOpen"
        class="settings-form-wrapper"
      >
        <!-- This component is for turning off the modal when clicking outside -->
        <ModalBackground @click="$emit('toggleSettingsForm')" />

        <div class="settings-form">
          <SettingsFormInput
            v-model="focusDuration"
            input-id="focus-duration"
            input-label="Focus session duration"
            max="240"
            min="10"
            type="number"
            @blur="handleBlurFocusDuration"
            @reset-input="resetFocusDuration"
          />
          <SettingsFormInput
            v-model="breakDuration"
            input-id="break-duration"
            input-label="Break session duration"
            max="15"
            min="1"
            type="number"
            @blur="handleBlurBreakDuration"
            @reset-input="resetBreakDuration"
          />
          <div class="settings-buttons">
            <button
              class="settings-save settings-button"
              @click="saveSettings"
            >
              Save
            </button>
            <button
              class="settings-cancel settings-button"
              @click="$emit('toggleSettingsForm')"
            >
              Cancel
            </button>
          </div>
        </div>
      </section>
    </Transition>
  </Teleport>
</template>

<style scope>
.settings-form-wrapper {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.settings-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-black-900);
  gap: 1.5rem;
  padding: 1.75rem 2.5rem;
  border-radius: 12px;
  z-index: 1;
}

/* Transition animation... */
.fly-in-enter-active :is(.settings-form, .modal-background),
.fly-in-leave-active :is(.settings-form, .modal-background) {
  transition-property: transform, opacity;
  transition-duration: 250ms;
  transition-timing-function: var(--transition-cubic-bezier);
}

.fly-in-enter-from .settings-form,
.fly-in-leave-to .settings-form {
  transform: translateY(20px);
  opacity: 0;
}

.fly-in-enter-from .modal-background,
.fly-in-leave-to .modal-background {
  opacity: 0%;
}
/* ...ends here. */

.settings-buttons {
  align-self: center;
  margin-block-start: 0.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  row-gap: 0.7rem;
}

.settings-button {
  padding-inline: 1rem;
  padding-block: 0.625rem;
  border-radius: 100vh;
  font-weight: 700;
  color: var(--color-white-100);
  background-color: var(--color-black-900);
  transition-property: background-color;
  transition-duration: 150ms;
  transition-timing-function: var(--transition-cubic-bezier);
}

.settings-button:is(:hover, :focus-visible) {
  background-color: var(--color-black-700);
}

.settings-save {
  background-color: var(--color-teal-500);
}

.settings-save:is(:hover, :focus-visible) {
  background-color: var(--color-teal-700);
}

/* For smaller screen. */
@media screen and (max-width: 37.5em) {
  .settings-form {
    padding: 1rem;
    gap: 1rem;
  }

  .settings-buttons {
    align-self: stretch;
    grid-template-columns: 1fr;
  }

  .settings-button {
    border-radius: 8px;
    padding-block: 1rem;
  }

  .settings-form {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}
</style>
