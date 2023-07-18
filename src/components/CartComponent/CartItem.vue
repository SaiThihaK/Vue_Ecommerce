<template>
 
     <div v-for="(item,index) in useStore.cartItem" class="flex flex-col"  :key="index">
    <div class="flex">
      <img :src="item.image" :alt="item.title" class="w-[100px] h-[100px]" />
      <div class="flex flex-col flex-1 ps-5">
        <div class="flex">
          <h6 class="font-[600] flex-1">{{item.title}}</h6>
          <i class="fa-solid fa-xmark ps-5 pt-2" @click="useStore.deleteCart(index)"></i>
        </div>
        <p class="text-gray-500 text-[14px] flex-1 py-2 tracking-wider">Price:&nbsp;${{item.price}}</p>
      </div>
    </div>
    <hr class="my-3 border-[1px]">
  </div>

 
</template>

<script setup>
import {useFilterStore} from "@/store/useFilterStore";

const useStore = useFilterStore();
</script>