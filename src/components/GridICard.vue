<template>
  <div v-for="(product,index) in props.data" :key=index class="mt-5 flex flex-col relative" id="card">


    <RouterLink :to="`/product/${product.id}`">
      <div class="flex justify-center md:justify-start h-[250px] md:h-[300px] relative">
        <img :src=product.image :alt=product.title class="md:w-[200px] w-[150px] pt-2"  />

      </div>
      <div class="flex flex-col ps-5  py-5 mt-2 justify-center  flex-wrap w-full md:w-[200px]">
        <p class="font-[700] text-[13px]  flex-wrap w-full">{{ product.title }}</p>
        <span class="text-[12px] text-gray-500">${{ product.price }}</span>
      </div>

    </RouterLink>
    <div class="flex  mt-2 ps-5 md:ps-0 flex-1 items-end " >
      <button v-if="!useStore.cartItem.find(item=>item.id === product.id)" class="w-[200px] bg-black text-white py-2 rounded-md h-[40px] block md:hidden" id="add" @click="useStore.addToCard(index,props.data)">Add to Cart</button>
      <button v-else class="w-[200px] bg-[rgb(255,3,0)] text-white py-2 rounded-md block h-[40px] " @click="useStore.cartItem = useStore.cartItem.filter(item=>item.id !== product.id)">Remove from Cart</button>
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


</style>