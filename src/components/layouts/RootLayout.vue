<template>
  <div class="bg-[--bg-clr] text-[--txt-clr]">
    <MainHeader class="h-[--main-header-height] w-full top-0 bg-[--white] z-20" />
    <main class="min-h-[--main-content-height] app-container relative">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { MainHeader } from '@/components';
</script>

<style lang="scss"></style>
