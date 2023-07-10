<template>
  <div class=" w-full grid-cols-2 xl:grid-cols-4 grid  grid-flow-row">
    <GridICard :data="useStore.getFilterProducts" />
  </div>
</template>

<script setup>


import { onMounted} from "vue";
import GridICard from "@/components/GridICard.vue";
import { useFilterStore } from "@/store/useFilterStore";
import { defineProps } from 'vue';

const props = defineProps(['url']);
console.log(props.url);
const useStore = useFilterStore();
onMounted(()=>{
  useStore.getDataFunction(props.url);
})

</script>