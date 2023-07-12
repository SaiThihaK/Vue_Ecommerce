<template>
  <div class="w-full">
    <div class="w-full mt-5">
    <CartItem />
    </div>
    <div>
<!--     Discount Input   -->
    </div>
    <div class="mt-3">
      <div class="w-full py-1 flex">
        <p class=" font-[600] text-[16px] flex-1">Subtal</p>
        <p class="flex-0">${{totalCartPrice()}}</p>
      </div>
      <div class="w-full py-1 flex">
        <p class=" font-[600] text-[16px] flex-1">Shipping</p>
        <p class="flex-0 uppercase tracking-wider">Free</p>
      </div>
    </div>
    <hr class="mt-3 border-[1px]">
    <div class="mt-3">
      <div class="w-full py-1 flex">
        <p class=" font-[600] text-[16px] flex-1">Total</p>
        <p class="flex-0">
          <span class="text-[14px] text-gray-500">USD</span>
          <span class="text-[25px]  ps-2">${{totalCartPrice()}}</span>
        </p>
      </div>

    </div>
  </div>
</template>

<script setup>
import {useFilterStore} from "@/store/useFilterStore";
import CartItem from "@/components/CartComponent/CartItem.vue";

const useStore = useFilterStore();
const totalCartPrice = ()=>{
  let totalPrice = 0;
  useStore.cartItem.map((item)=>{
    totalPrice += item.price;
  });
  totalPrice = totalPrice.toFixed(2);
  return totalPrice;
}
</script>