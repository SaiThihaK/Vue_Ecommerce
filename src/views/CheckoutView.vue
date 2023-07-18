<template>
  
<div class="flex flex-col md:flex-row h-full w-full gap-5 overflow-scroll">
<div class=" bg-rgb(255,255,255) flex-1 w-full md:pe-5 px-2">
<BankPayment />
</div>
  <div class="flex-0 bg-[rgb(250,250,250)] flex-1 p-5 h-screen shadow-lg overflow-scroll ">
<CheckoutItem />
  </div>
   
</div>
</template>
<script setup>
import BankPayment from "@/components/Checkout/BankPayment.vue";
import CheckoutItem from "@/components/Checkout/CheckoutItem.vue";
</script>