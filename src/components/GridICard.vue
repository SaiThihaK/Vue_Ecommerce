<template>
  <div v-for="(product,index) in props.data" :key=index class="mt-5" id="card">
    <div class="flex justify-center md:justify-start h-[250px] md:h-[300px] relative">
      <img :src=product.image :alt=product.title class="md:w-[200px] w-[150px] pt-2"  />
      <i v-if="!useStore.cartItem.find((cart) => cart.title === product.title)" class="fa-regular fa-heart" id="add" @click="useStore.addToCard(index,props.data)"></i>
      <i v-else @click="useStore.deleteCart(index)" class="fa-solid fa-heart text-[rgb(255,3,0)]"></i>

    </div>
    <div class="flex flex-col ps-5  py-5 mt-2 justify-center  flex-wrap w-full md:w-[200px]">
      <p class="font-[700] text-[13px]  flex-wrap w-full">{{product.title}}</p>
      <span class="text-[12px] text-gray-500">${{product.price}}</span>
    </div>

  </div>
</template>

<script setup>
import {defineProps} from "vue";
import {useFilterStore} from "@/store/useFilterStore";
const props = defineProps(['data']);
const useStore = useFilterStore();


</script>

<style>
#card:hover #add{
  display:block
}
#add{
  display:none
}
</style>