<template>
  <div class="container mx-auto relative">
    <Navbar />
    <div  v-if="useStore.cartToggle" class="w-full md:w-[400px] bg-white h-screen absolute z-50 top-0 right-0 shadow-xl">
      <Cart />
    </div>
      <div class="flex w-full md:px-5 px-1 relative">
        <router-view/>
      </div>
    </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
import FilterBar from "@/components/filterBar.vue";
import {useFilterStore} from "@/store/useFilterStore";
import Cart from "@/components/CartComponent/Cart.vue";
const useStore = useFilterStore();




</script>