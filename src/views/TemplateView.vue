<template>
  <div class="flex flex-col w-full h-full">
  <Navbar />
  <div  v-if="useStore.cartToggle" class="w-full md:w-[400px] bg-white   absolute z-50 top-0 right-0 shadow-xl">
    <Cart />
  </div>
  <div class="relative">
    <div class="md:relative flex gap-5"  :class="`${useStore.navToggle ? 'absolute z-30 w-full' : 'relative'}`">
  </div>

    <div  :class="filterClass()">
      <FilterBar />
    </div>
    <div class=" w-full grid-cols-2 xl:grid-cols-4 grid ps-5  grid-flow-row">
      <GridICard :data="useStore.getFilterProducts" />
    </div>
  </div>
  </div>


</template>

<script setup>


import { onMounted,watch} from "vue";
import GridICard from "@/components/GridICard.vue";
import { useFilterStore } from "@/store/useFilterStore";
import { defineProps } from 'vue';
import {useRoute} from "vue-router";
import FilterBar from "@/components/filterBar.vue";
import Cart from "@/components/CartComponent/Cart.vue";
import Navbar from "@/components/Navbar.vue";

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
    return `block  bg-white top-0 left-0 w-full   md:w-[400px] px-5 ml-3`;
  }
  else{
    return "hidden md:relative md:block  bg-white md:w-[400px] px-5";
  }
}
</script>