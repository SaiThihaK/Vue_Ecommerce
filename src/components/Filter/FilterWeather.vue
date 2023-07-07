<template>
<h3 class="text-[18px] font-[600]">Best For</h3>
  <div class="flex flex-col gap-5 mt-4">
    <div class="flex items-center"  v-for="(query,index) in filterWeather" @click="useStore.addSearchQuery(index,filterWeather)" :key="index">
      <input id="default-checkbox" :checked="useStore.searchQuery.find(e=>e.value=== query.value)"  type="checkbox" value="" class="w-5 h-5 checkbox-secondary checked:bg-black border-black rounded focus:ring-black  focus:ring-2 ">
      <label for="default-checkbox" class="ml-2 text-sm capitalize font-medium ">{{query.value}}</label>
    </div>
  </div>

</template>

<script setup>

import {filterWeather} from "@/assets/constant/filter";
import {useFilterStore} from "@/store/useFilterStore";
const useStore = useFilterStore()
</script>