<template>
  <div class=" w-full grid-cols-2 md:grid-cols-4 xl:grid-cols-6 grid  grid-flow-row">
    <GridICard :data="useStore.cartItem" />
  </div>
</template>

<script setup>
import {useFilterStore} from "@/store/useFilterStore";
import GridICard from "@/components/GridICard.vue";

const useStore = useFilterStore();
</script>