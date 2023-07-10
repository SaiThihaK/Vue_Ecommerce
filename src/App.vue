<template>
  <div class="container mx-auto">
    <Navbar />
    <div class="px-2 flex gap-5">
      <div>
        <FilterBar />
      </div>
      <div class="flex w-full">
        <router-view/>
      </div>
    </div>

  </div>

</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
import FilterBar from "@/components/filterBar.vue";
import { useFilterStore } from "./store/useFilterStore";

const useStore = useFilterStore;
const filterBarState = useStore.navToggle ? "hidden md:block" :"block md:block"
</script>