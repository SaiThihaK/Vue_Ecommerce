<template>
  <div class="mt-5">
    <div class="flex">
      <h3 class="text-[16px] font-[700] flex-1">Filter By:</h3>
      <button v-if="useStore.searchQuery.length > 0" class="underline font-[300]" @click=useStore.clearAllQuery()>Clear All</button>
    </div>
    <div class="flex flex-wrap gap-1 mt-2">
      <button v-for="(query,index) in useStore.searchQuery" class="px-2 py-1 flex gap-2  border-2 rounded-full capitalize" :key="index">
        <span>{{query.value}}</span>
        <span  @click="useStore.deleteFilter(index)"><i class="fa-regular fa-circle-xmark"></i></span>

      </button>

    </div>

  </div>

</template>


<script setup>

import {useFilterStore} from "@/store/useFilterStore";

const useStore = useFilterStore();
</script>
