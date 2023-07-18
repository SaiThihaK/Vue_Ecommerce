<template>
  <div 
  class="pb-5 oveflow-y-scroll"
  >
   <FilterNav />
    <FilterQuery />
   <hr class="w-full my-3" />
    <FilterSize />
    <hr class="w-full my-3" />
    <FilterWeather />
    <hr class="w-full my-3" />
    <FilterMaterial />
    <hr class="w-full my-3" />
    <FilterColor />
  </div>





</template>
<script setup>
import FilterNav from "@/components/Filter/FilterNav.vue";
import FilterSize from "@/components/Filter/FilterSize.vue";
import FilterQuery from "@/components/Filter/FilterQuery.vue";
import FilterWeather from "@/components/Filter/FilterWeather.vue";
import FilterMaterial from "@/components/Filter/FilterMaterial.vue";
import FilterColor from "@/components/Filter/FilterColor.vue";
import { useFilterStore } from "@/store/useFilterStore";
const useStore = useFilterStore();

</script>