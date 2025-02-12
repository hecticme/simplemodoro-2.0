<script setup lang="ts">
import ButtonTheme from '~/components/button/ButtonTheme.vue'
import LinkGithub from '~/components/LinkGithub.vue'
import { usePomodoroStore } from '~/stores/pomodoro'

const pomodoro = usePomodoroStore()
</script>

<template>
  <header class="header">
    <p
      class="logo-text"
      :class="{
        'isBreak': pomodoro.isBreak,
      }"
    >
      Simplemodoro.
    </p>

    <div class="header-utils">
      <ButtonTheme />

      <LinkGithub />
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-block: 1.5rem 2.5rem;
  width: 100%;
}

.header-utils {
  display: flex;
  gap: 0.25rem;
}

.logo-text {
  position: relative;
  font-size: 0.75rem;
  font-weight: 700;
}

.logo-text::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-emerald-500);
  transition: width 250ms var(--transition-cubic-bezier);
}

.logo-text.isBreak::after {
  width: 70%;
}
</style>
