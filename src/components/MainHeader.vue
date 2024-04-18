<template>
  <header class="dark:bg-slate-800 bg-white">
    <nav class="app-container border-gray-200 shadow-lg min-h-[--main-header-height] flex items-center justify-between">
      <h1 class="font-bold sm:text-2xl text-base text-gray-500">Todo App</h1>
      <button @click="toogleTheme" class="flex items-center gap-3 text-gray-500 dark:text-gray-200 shadow-md font-medium bg-slate-500/20 dark:bg-slate-500/50 py-1 px-2 rounded-md">
        toogle theme
        <DarkICon v-if="theme == 'dark'" color="#e8e8e8" />
        <LightIcon v-if="theme == 'light'" color="#d3a527" />
      </button>
    </nav>
  </header>
</template>

<script setup>
import { DarkICon, LightIcon } from '@/assets/icons';
import { ref, onMounted, watch } from 'vue';
import { storageManager, changeColorTheme } from '@/helpers';

const theme = ref(storageManager.get('theme') || 'light');

const toogleTheme = () => {
  theme.value = theme.value == 'light' ? 'dark' : 'light';
  changeColorTheme(theme.value);
};

onMounted(() => {
  changeColorTheme(theme.value);
});
</script>
<style scoped></style>
