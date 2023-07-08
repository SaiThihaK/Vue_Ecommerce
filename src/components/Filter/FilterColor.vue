<template>
  <h3 class="text-[18px] font-[600]">HUE</h3>
  <div class="flex flex-col gap-3 mt-4">
   <div v-for="(color,index) in filterColor" :key="index" class="flex gap-3" @click="useStore.addSearchQuery(index,filterColor)">
   <span :class="queryCheckColor(color)" :style="{'background-color':color.color}" ></span>
     <p class="capitalize">{{color.value}}</p>
   </div>
  </div>

</template>

<script setup>


import {useFilterStore} from "@/store/useFilterStore";
import {filterColor} from "@/assets/constant/filter";
const useStore = useFilterStore();
const queryCheckColor = (color) => {
  const found = useStore.searchQuery.find((el) => el.value === color.value);
  if (found) {
    return `p-3  rounded-full  border-2 border-black`;
  } else {
    return `p-3  rounded-full`;
  }
};
</script>