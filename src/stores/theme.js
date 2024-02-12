import { ref } from 'vue'
import { defineStore } from 'pinia'

const darkThemeIsPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches

export const useThemeStore = defineStore('theme', () => {
  const isDarkTheme = ref(localStorage.getItem('isDarkTheme') ?? darkThemeIsPreferred)

  const toggleDarkTheme = () => {
    isDarkTheme.value = !isDarkTheme.value
    localStorage.setItem('isDarkTheme', JSON.stringify(!isDarkTheme.value))
  }

  return {
    isDarkTheme,
    toggleDarkTheme,
  }
})
