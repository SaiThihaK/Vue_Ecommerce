<template>
  <nav class=" py-5 px-2 w-full flex">
    <ul class="md:flex gap-5 flex-1 hidden">
      <li v-for="(nav,index) in navbarItem">
        <RouterLink  :to=nav.path :key=index class="font-[700] text-[14px] uppercase hover:border-b-2 border-black">
          {{nav.name}}
        </RouterLink>
      </li>
    </ul>
     <div @click="useStore.navToggleHandler" class="md:hidden flex-1" v-if="!useStore.navToggle"><i  class="fa-solid fa-bars mb-5 text-[20px] y-5 px-2 mt-3" ></i></div>
     <div v-else @click="useStore.navToggleHandler"  class="md:hidden flex-1"><i  class="fa-solid fa-xmark mb-5 text-[20px] y-5 px-2 mt-3" ></i></div>
    <div class="flex-1">
     <img :src=logo alt="Ecommerce_logo" width="100">
    </div>

    <ul class="flex gap-5">
    <li v-for="(icon,index) in navbarIcon" :key=index>
    <i :class=icon.icon></i>
    </li>
    </ul>

  </nav>
  
</template>

<script setup>
import logo from "../assets/ecommmerceLogo.png"
import { navbarItem } from "@/assets/constant/navitem";
import { useFilterStore } from "@/store/useFilterStore";
const useStore = useFilterStore();
const navbarIcon = [
  {
    icon:"fa-solid fa-magnifying-glass"
  },

  { 
    icon: "fa-solid fa-cart-shopping"
  },
]
</script>