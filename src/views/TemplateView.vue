<template>
  <div class="flex flex-wrap flex-col relative w-full relative  pb-5">
    <Navbar />
    <div v-if="useStore.cartToggle" class="w-full md:w-[400px] bg-white h-full overflow-hidden absolute z-50 top-0 right-0 shadow-xl">
      <Cart />
    </div>
    <div :class="`relative w-full ${useStore.navToggle ? 'h-[70vh]':'h-[85vh]'} overflow-scroll  flex`">
      <div class="md:relative flex"
        :class="`${useStore.navToggle ? 'absolute z-30 w-full' : 'relative'}`">
        <div :class="filterClass()">
          <FilterBar />
        </div>
      </div>

      <div class=" w-full  grid-cols-2 xl:grid-cols-4 grid overflow-y-scroll  grid-flow-row">
        <GridICard :data="useStore.getFilterProducts" />
      </div>
    </div>
  </div>
</template>

<script setup>


import { onMounted, watch } from "vue";
import GridICard from "@/components/GridICard.vue";
import { useFilterStore } from "@/store/useFilterStore";
import { defineProps } from 'vue';
import { useRoute } from "vue-router";
import FilterBar from "@/components/filterBar.vue";
import Cart from "@/components/CartComponent/Cart.vue";
import Navbar from "@/components/Navbar.vue";

const route = useRoute();

const props = defineProps(['url']);

const useStore = useFilterStore();
onMounted(() => {
  useStore.getDataFunction(props.url);
})

watch(
  () => route.path,
  () => {
    useStore.getDataFunction(props.url)
    useStore.clearAllQuery();
  }
)
const filterClass = () => {
  if (useStore.navToggle) {
    return `block  bg-white top-0 left-0 w-full   md:w-[400px] px-5`;
  }
  else {
    return "hidden md:relative md:block w-full  bg-white md:w-[400px] px-5 h-screen ";
  }
}
</script>