<template>
  <div class="container mx-auto">
    <Navbar />
    <div class="px-2 flex gap-5 relative">
      <div  :class="filterClass()">
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
import {useFilterStore} from "@/store/useFilterStore";
const useStore = useFilterStore();


const filterClass = ()=>{
  if(useStore.navToggle){
    return "block absolute md:relative zIndex-[5] bg-white top-0 left-0 w-[80%] md:w-[400px] px-5";
  }
  else{
    return "hidden md:relative md:block zIndex-[5] bg-white md:w-[400px] px-5";
  }
}

</script>