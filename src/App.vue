<template>
  <RootLayout>
    <div class="py-10 min-h-[--main-content-height]">
      <section class="flex sm:justify-end justify-center gap-3">
        <select
          id="countries"
          v-model="selectedFilter"
          class="bg-gray-50 border cursor-pointer outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="" disabled selected hidden>Filter by ...</option>
          <option value="all">All</option>
          <option value="completed">Completed Tasks</option>
          <option value="uncompleted">Uncompleted Tasks</option>
        </select>
        <button @click="handleSort" class="py-1 px-4 rounded-md bg-slate-700/10 shadow-md" title="sort tasks alphabetically">
          <SortIcon v-if="!sortOrder" />
          <SortAscIcon v-if="sortOrder == 'asc'" />
          <SortDescIcon v-if="sortOrder == 'desc'" />
        </button>
      </section>
      <AddTask :addItem="addItem" />
      <TodoList :filteredTodoItems="filteredTodoItems" :handleCompleteItem="handleCompleteItem" :removeItem="removeItem" />
    </div>
  </RootLayout>
</template>

<script setup>
import { SortIcon, SortAscIcon, SortDescIcon } from '@/assets/icons';
import { AddTask, TodoList,RootLayout } from '@/components';
import { ref, watch, computed } from 'vue';
import { storageManager } from '@/helpers';

const selectedFilter = ref('');
const todoItems = ref(storageManager.get('todoItems') || []);
const sortOrder = ref(null);

const addItem = (newItem) => {
  const uid = Date.now();
  todoItems.value.push({
    ...newItem,
    id: uid,
  });
};
const removeItem = (item) => {
  todoItems.value = todoItems.value.filter((todoItem) => todoItem.id !== item.id);
};
const handleCompleteItem = (item) => {
  todoItems.value = todoItems.value.map((todoItem) => {
    if (todoItem.id == item.id) {
      return { ...todoItem, isCompleted: !item.isCompleted };
    }
    return todoItem;
  });
};
const handleSort = () => {
  sortOrder.value = sortOrder.value == 'asc' ? 'desc' : 'asc';
};
const sortArrayAlphabetically = (arr, sortOrder) => {
  const comparisonFunction = sortOrder !== 'asc' ? (a, b) => b.title.localeCompare(a.title) : (a, b) => a.title.localeCompare(b.title);
  arr.sort(comparisonFunction);
  return arr;
};

const filteredTodoItems = computed(() => {
  let filteredItems = [...todoItems.value];
  //first sorting
  filteredItems = sortArrayAlphabetically(filteredItems, sortOrder.value);

  //second filtering by task status
  switch (selectedFilter.value) {
    case 'all':
      break;
    case 'completed':
      filteredItems = filteredItems.filter((todoItem) => todoItem.isCompleted);
      break;
    case 'uncompleted':
      filteredItems = filteredItems.filter((todoItem) => !todoItem.isCompleted);
      break;
    default:
    // console.warn(`Unexpected filter value: ${selectedFilter.value}`);
  }
  return filteredItems;
});

watch(
  () => todoItems.value,
  (newTodoItems) => {
    storageManager.set('todoItems', newTodoItems);
  },
  { deep: true }
);
</script>

<style lang="scss" scoped></style>
