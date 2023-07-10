<template>
  <div class="z-10">
    <div  :class="filterClass()">
      <FilterBar />
    </div>
  </div>
      <div class=" w-full grid-cols-2 xl:grid-cols-4 grid  grid-flow-row">
        <GridICard :data="useStore.getFilterProducts" />
      </div>
</template>

<script setup>


import { onMounted,watch} from "vue";
import GridICard from "@/components/GridICard.vue";
import { useFilterStore } from "@/store/useFilterStore";
import { defineProps } from 'vue';
import {useRoute} from "vue-router";
import FilterBar from "@/components/filterBar.vue";

const route = useRoute();

const props = defineProps(['url']);

const useStore = useFilterStore();
onMounted(()=>{
  useStore.getDataFunction(props.url);
})

watch(
    () => route.path,
    () => {
    useStore.getDataFunction(props.url)
      useStore.clearAllQuery();
    }
)
const filterClass = ()=>{
  if(useStore.navToggle){
    return "block absolute md:relative zIndex-[20] bg-white top-0 left-0 w-[80%] md:w-[400px] px-5";
  }
  else{
    return "hidden md:relative md:block zIndex-[20] bg-white md:w-[400px] px-5";
  }
}
</script>