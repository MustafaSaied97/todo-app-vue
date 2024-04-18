<template>
  <div class="mt-10 w-full text-sm">
    <section v-if="filteredTodoItems.length" class="flex flex-col gap-5 text-gray-500 dark:text-gray-400">
      <article
        v-for="(todoItem, index) in filteredTodoItems"
        :key="index"
        :class="`shadow-md rounded-md gap-3 p-4 flex sm:flex-row flex-col justify-between items-center dark:bg-slate-800/80   h-fit min-h-[4rem]`"
      >
        <!-- title -->
        <p class="font-semibold sm:text-base text-sm max-w-[100%]  sm:text-start text-center overflow-hidden text-ellipsis  ">{{ todoItem.title }}</p>
        <!-- actions -->
        <div class="flex gap-8 justify-end items-center">
          <button @click="() => handleCompleteItem(todoItem)" :title="todoItem.isCompleted ? 'Completed task' : 'UnCompleted task'">
            <UnmarkedIcon v-if="!todoItem.isCompleted" />
            <CompletedIcon v-if="todoItem.isCompleted" title="" />
          </button>
          <button @click="() => removeItem(todoItem)" class="bg-rose-800/30 p-1 rounded-full hover:bg-red-800/50" title="delete the task"><DeleteIcon /></button>
        </div>
      </article>
    </section>
    <img v-else :src="NoTasksImg" class="mx-auto" alt="" />
  </div>
</template>

<script setup>
import { DeleteIcon, UncompletedIcon, CompletedIcon, UnmarkedIcon } from '@/assets/icons';
import NoTasksImg from '@/assets/images/no-tasks.png';
import { ref, defineProps, reactive, watchEffect, watch, computed } from 'vue';
import { storageManager } from '@/helpers';
defineProps({
  filteredTodoItems: {
    type: Array,
    default: [],
  },
  handleCompleteItem: {
    type: Function,
    default: () => {},
  },
  removeItem: {
    type: Function,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped></style>
