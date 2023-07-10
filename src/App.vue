<template>
  <div class="container mx-auto">
    <Navbar />

      <div class="flex w-full md:px-5 px-1 relative">
        <router-view/>
      </div>
    </div>

</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
import FilterBar from "@/components/filterBar.vue";
import {useFilterStore} from "@/store/useFilterStore";
const useStore = useFilterStore();




</script>