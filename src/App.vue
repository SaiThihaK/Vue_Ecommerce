<template>
  <div class="container mx-auto relative overflow-x-hidden">

      <div class="flex w-full md:px-5 px-1 relative">
        <router-view/>
      </div>
    </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
import {useFilterStore} from "@/store/useFilterStore";
import Cart from "@/components/CartComponent/Cart.vue";
const useStore = useFilterStore();




</script>