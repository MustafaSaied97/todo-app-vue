<template>
  <header class="dark:bg-slate-800 bg-white">
    <nav class="app-container border-gray-200 shadow-lg min-h-[--main-header-height] flex items-center justify-between">
      <h1 class="font-bold sm:text-2xl text-base text-gray-500">Todo App</h1>
      <button @click="store.toogleTheme" class="flex items-center gap-3 text-gray-500 dark:text-gray-200 shadow-md font-medium bg-slate-500/20 dark:bg-slate-500/50 py-1 px-2 rounded-md">
        toogle theme
        <DarkICon v-if="store.theme == 'dark'" color="#e8e8e8" />
        <LightIcon v-if="store.theme == 'light'" color="#d3a527" />
      </button>
    </nav>
  </header>
</template>

<script setup>
import { DarkICon, LightIcon } from '@/assets/icons';
import { onMounted } from 'vue';
import { changeColorTheme } from '@/helpers';
import { useThemeStore } from '@/stores/theme';

const store = useThemeStore();
onMounted(() => {
  changeColorTheme(store.theme);
});
</script>
<style scoped></style>
