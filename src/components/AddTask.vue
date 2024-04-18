<template>
  <form @submit.prevent="onFormSubmission" class="mt-10 flex gap-1">
    <div class="flex-1">
      <input
        v-model="title"
        type="text"
        id="title"
        class="border dark:border-gray-600 dark:focus:border-blue-600 bg-transparent text-[14px] sm:text-[15px] md:text-[16px] h-[45px] md:h-[48px] 3xl:h-[50px] text-sm rounded-lg focus:ring-0 outline-none focus:border-blue-600 block w-full p-2.5 sm:px-3 md:px-5"
        :placeholder="'Add Your Task...'"
      />
    </div>
    <button type="submit" class="bg-blue-600/20 hover:bg-blue-600/30 transition-all duration-150 py-2 md:py-3 px-3.5 md:px-4 rounded-[7px] max-w-[220px] text-center" title="add new task">
      <PlusIcon />
    </button>
  </form>
</template>

<script setup>
import { PlusIcon } from '@/assets/icons';
import { defineProps, ref } from 'vue';
const { addItem } = defineProps({
  addItem: {
    type: Function,
    required: false,
  },
});
const title = ref('');

function onFormSubmission() {
  const trimedTitle = title.value.trim();
  if (trimedTitle === '') return; //title validations
  addItem({
    title: trimedTitle,
  });
  title.value = ''; //reset title
}
</script>

<style lang="scss" scoped></style>
