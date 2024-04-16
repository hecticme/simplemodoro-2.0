<script setup lang="ts">
// Import components.
import { Icon } from '@iconify/vue'

defineOptions({
  inheritAttrs: false,
})

const model = defineModel<string>({ required: true })

defineProps<{
  inputId: string
  inputLabel: string
}>()

defineEmits([
  'resetInput',
])

</script>

<template>
  <div class="input-section">
    <label
      class="label"
      :for="inputId"
    >
      {{ inputLabel }}
    </label>

    <div class="input-container">
      <input
        :id="inputId"
        v-bind="$attrs"
        v-model="model"
        class="input-session"
        :name="inputId"
      >

      <button
        class="button-input-reset"
        @click="$emit('resetInput')"
      >
        <Icon icon="material-symbols:reset-wrench-rounded" />
      </button>
    </div>
  </div>
</template>

<style scoped>
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
  border-radius: 8px;
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

/* For smaller screen. */
@media screen and (max-width: 37.5em) {
  .input-session {
    min-width: 0;
  }
}
</style>
