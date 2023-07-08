<template>
<h1>Hello</h1>
  <div class="flex gap-5 w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 px-5 gap-5 w-full">
      <GridICard :data="useStore.getFilterProducts" />
    </div>
  </div>

</template>

<script setup>


import {ref, onMounted} from "vue";
import {useFilterStore} from "@/store/useFilterStore";
import GridICard from "@/components/GridICard.vue";
import {allElectronicsProducts} from "@/assets/API/products.api";

let data = ref([]);
const useStore = useFilterStore();

onMounted(()=>{
  useStore.getDataFunction(allElectronicsProducts);
})

</script>
