<template>
  <div class="w-[100%] p-5 mt-2 relative  flex flex-col">
    <i class="fa-solid fa-xmark absolute text-[30px] hover:rotate-90" @click="useStore.cartToggle = false"></i>
    <div class="flex flex-col w-full h-ful flex-0l">
      <i class="fa-solid fa-cart-shopping text-[25px] text-center"></i>
      <p class="text-center text-[12px] mt-2">
        {{ useStore.cartItem.length === 0 ? "You're $75 away from free shipping" : "Congrats! You get free standard shipping"}}
      </p>
    </div>
    <hr class="mt-1 border-[4px] border-[rgb(245,245,245]" />

    <div v-if="useStore.cartItem.length === 0" class="w-full flex-col gap-5 h-screen ">
      <h3 class="capitalize mt-5 text-center font-[600] tracking-wide">Your cart is empty</h3>
      <div class="flex flex-col gap-5 w-full mt-5">
        <RouterLink :to="item.path" @click="useStore.cartToggle = false" v-for="(item, index) in EmptyCartNav" :key="index"
          class="w-full flex justify-center">
          <button
            class="border-2 hover:bg-black hover:text-white border-black w-[300px] font-[700] text-[14px] py-3 uppercase tracking-widest">{{ item.title }}</button>
        </RouterLink>
      </div>

    </div>
    <div v-else class="py-3 w-full flex flex-col gap-5 h-full justify-end">
      <div class=" flex-col h-full flex flex-0">
        <div class="overflow-y-scroll h-[82vh]">
          <CartItem />
        </div>
      </div>
    </div>
    <div  class="h-full flex-1 w-full  flex items-end">
      <div class="flex flex-col  w-full">
        <div class="w-full py-1 flex">
          <p class=" font-[600] text-[16px] flex-1">Subtal</p>
          <p class="flex-0">${{ totalCartPrice() }}</p>
        </div>
        <div class="w-full py-1 flex">
          <p class=" font-[600] text-[16px] flex-1">Shipping</p>
          <p class="flex-0 uppercase tracking-wider">Free</p>
        </div>
        <div class="w-full bg-black py-3 rounded-sm mt-2">
          <button class="w-full uppercase text-white font-[600] text-[14px] tracking-wider"
            @click="router.push('/checkout')">proceed to checkout</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useFilterStore } from "@/store/useFilterStore";
import CartItem from "@/components/CartComponent/CartItem.vue";
import { useRoute } from "vue-router";
import router from "@/router";


const useStore = useFilterStore();
const EmptyCartNav = [
  {
    title: "Shop Men's",
    path: "/men"
  },
  {
    title: "Shop Women's",
    path: "/women"
  },
  {
    title: "Shop Electronics'",
    path: "/electronics"
  },
  {
    title: "Shop Jeweleries'",
    path: "/jewelery"
  }
]

const totalCartPrice = () => {
  let totalPrice = 0;
  useStore.cartItem.map((item) => {
    totalPrice += item.price;
  });
  totalPrice = totalPrice.toFixed(2);
  return totalPrice;
}
</script>