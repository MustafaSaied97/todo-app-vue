import { defineStore } from 'pinia';
import { storageManager, changeColorTheme } from '@/helpers';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(storageManager.get('theme') || 'light');
  function toogleTheme() {
    theme.value = theme.value == 'light' ? 'dark' : 'light';
    changeColorTheme(theme.value);
  }

  return { theme, toogleTheme };
});
