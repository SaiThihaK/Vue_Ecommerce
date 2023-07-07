<template>
  <div class="flex flex-col gap-3">
    <div class="text-[12px] font-[700] ">
      <RouterLink to="/" class="hover:border-b-2 border-black mx-1">
        Home
      </RouterLink>
      <span>
      /
    </span>
      <RouterLink to="/" class="hover:border-b-2 border-black mx-1">
        Men's Sale
      </RouterLink>
      <span>/</span>
    </div>

    <h3 class="capitalize text-[20px] font-[800]">Shel Wel's essential wears</h3>
    <p v-for="(nav,index) in navbarItem" class="text-[14px] font-[400]" :key=index>
      {{nav.name}}
    </p>
  </div>
</template>
<script setup>
import {navbarItem} from "@/assets/constant/navitem";
</script>