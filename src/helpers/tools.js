import { ref } from 'vue';
import { storageManager } from './storageManager';

export function generateRandomId() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }

  return id;
}

export function changeColorTheme(theme = 'light') {
  //update dom
  let html = document.documentElement;
  html.classList.remove(theme == 'light' ? 'dark' : 'light');
  html.classList.add(theme);
  //update LocalStorage
  storageManager.set('theme', theme);
}
