<template>
  <nav class=" py-5 px-5  w-full flex mx-4">
    <div class="md:flex gap-5 flex-1 flex-col">
      <div @click="useStore.navToggleHandler" class="md:hidden flex-1" v-if="!useStore.navToggle"><i  class="fa-solid fa-bars mb-5 text-[20px] y-5 px-2 mt-3" ></i></div>
      <div v-else @click="useStore.navToggleHandler"  class="md:hidden flex-1"><i  class="fa-solid fa-xmark mb-5 text-[20px] y-5 px-2 mt-3" ></i></div>
      <ul class="md:flex md:flex-row gap-5 flex-1 flex-col"
      :class="{'hidden':!useStore.navToggle}"
      >

        <li v-for="(nav,index) in navbarItem" class="mb-2 md:mb-0">
          <RouterLink  :to=nav.path exact :key=index
                       class="font-[700] text-[14px] uppercase hover:md:border-b-2 border-black"
          >
            <span :class="{'text-[rgb(255,3,0)]':route.path == nav.path}">{{nav.name}}</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  <RouterLink to="/" class="flex-1">
    <img  :src="redlogo" class="md:w-[70px] w-[50px]" alt="logo">
</RouterLink>
    <ul class="flex gap-5">
   <li><i class="fa-solid fa-magnifying-glass"></i></li>
      <li @click="useStore.cartToggle = true"><i class="fa-solid fa-cart-shopping"></i></li>
    </ul>
  </nav>
  
</template>

<script setup>
import redlogo from "@/assets/ecommerceLogoRed.png"
import { navbarItem } from "@/assets/constant/navitem";
import { useFilterStore } from "@/store/useFilterStore";
import {useRoute} from "vue-router";
const useStore = useFilterStore();
const route = useRoute();

</script>