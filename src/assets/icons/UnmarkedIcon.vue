<template>
  <svg :fill="color" :width="size" :height="size" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#7d7d7d">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M960 1807.059c-467.125 0-847.059-379.934-847.059-847.059 0-467.125 379.934-847.059 847.059-847.059 467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059M960 0C430.645 0 0 430.645 0 960s430.645 960 960 960 960-430.645 960-960S1489.355 0 960 0"
        fill-rule="evenodd"
      ></path>
    </g>
  </svg>
</template>
<script setup>
defineProps({
  size: { default: 20 },
  color: { default: '#a8a8a8' },
});
</script>
