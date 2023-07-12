<template>
<div class="flex w-full gap-5 overflow-hidden">
<div class="flex-1 bg-rgb(255,255,255) w-full pe-5">
<BankPayment />
</div>
  <div class="flex-1 bg-[rgb(250,250,250)] p-5 min-h-screen shadow-lg">
<CheckoutItem />
  </div>
</div>
</template>
<script setup>
import BankPayment from "@/components/Checkout/BankPayment.vue";
import CheckoutItem from "@/components/Checkout/CheckoutItem.vue";
</script>