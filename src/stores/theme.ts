import { ref } from 'vue'
import { defineStore } from 'pinia'

const darkThemeIsPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches

export const useThemeStore = defineStore('theme', () => {
  const localIsDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme') ?? 'null')
  const isDarkTheme = ref(localIsDarkTheme ?? darkThemeIsPreferred)

  const toggleDarkTheme = () => {
    const nextTheme = !isDarkTheme.value

    isDarkTheme.value = nextTheme
    localStorage.setItem('isDarkTheme', JSON.stringify(nextTheme))
  }

  return {
    isDarkTheme,
    toggleDarkTheme,
  }
})
