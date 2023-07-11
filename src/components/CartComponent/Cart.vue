<template>
<div class="w-[100%] p-5 mt-2 relative">
  <i class="fa-solid fa-xmark absolute text-[30px] hover:rotate-90" @click="useStore.cartToggle = false"></i>
<div class="flex flex-col w-full">
    <i class="fa-solid fa-cart-shopping text-[25px] text-center"></i>
    <p class="text-center text-[12px] mt-2">
      {{useStore.cartItem.length === 0 ? "You're $75 away from free shipping":"Congrats! You get free standard shipping"}}
    </p>
</div>
  <hr class=" my-2 border-[4px] border-[rgb(245,245,245]"/>
   <CartItem />
  <div v-if="useStore.cartItem.length === 0" class="w-full flex-col gap-5">
    <h3 class="capitalize mt-5 text-center font-[600] tracking-wide">Your cart is empty</h3>
    <div class="flex flex-col gap-5 w-full mt-5">
      <RouterLink :to="item.path" @click="useStore.cartToggle = false" v-for="(item,index) in EmptyCartNav" :key="index" class="w-full flex justify-center">
        <button   class="border-2 hover:bg-black hover:text-white border-black w-[300px] font-[700] text-[14px] py-3 uppercase tracking-widest">{{item.title}}</button>
      </RouterLink>
    </div>

  </div>
  <div v-else class="py-3 w-full flex flex-col gap-5">

  </div>
</div>
</template>

<script setup>
import {useFilterStore} from "@/store/useFilterStore";
import CartItem from "@/components/CartComponent/CartItem.vue";


const useStore = useFilterStore();
const EmptyCartNav = [
  {
    title:"Shop Men's",
    path:"/men"
  },
  {
    title:"Shop Women's",
    path:"/women"
  },
  {
    title:"Shop Electronics'",
    path:"/electronics"
  },
  {
    title:"Shop Jeweleries'",
    path:"/jewelery"
  }
]
</script>