<template>
  <h3 class="uppercase font-[700] tracking-widest">Sizes</h3>
  <p class=" text-[12px] text-gray-500">Most of our shoes only come in full sizes. If you’re a half size, select your nearest whole size too.</p>
<div class="flex flex-wrap gap-2 mt-5">
  <button  v-for="(size,index) in sizefilters" :key=index
           :class="queryCheckButton(size)"
           @click="useStore.addSearchQuery(index,sizefilters)">
    <span class="w-full">{{size.sizeCode}}</span>
    <span v-if="size.size">{{size.size}}</span>
  </button>
</div>

</template>

<script setup>

import {sizefilters} from "@/assets/constant/filter";
import {useFilterStore} from "@/store/useFilterStore";

const useStore = useFilterStore();
console.log(useStore.searchQuery);

const queryCheckButton = (size) => {
  const found = useStore.searchQuery.find((query) => query.value === size.value);
  if (found) {
    return "px-4 uppercase py-1 border-black border-[1px] flex flex-col justify-center align-center flex-wrap bg-black text-white";
  } else {
    return "px-4 uppercase py-1  border-black border-[1px] flex flex-col justify-center align-center flex-wrap hover:bg-black hover:text-white";
  }
};

</script>