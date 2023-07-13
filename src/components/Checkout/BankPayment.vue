<template>
 <div class="w-full h-full mt-5">
     <div class="w-full flex justify-start flex-col gap-5 pe-5">
       <img :src="companylogo" alt="company logo" class="w-[100px]"/>
       <div class="flex gap-3">
         <span class="text-[14px] text-gray-400">Shipping</span>
         <span class="text-[14px] text-gray-400"> <i class="fa-solid fa-chevron-right"></i> </span>
         <span class="text-[14px] text-gray-400">Payment</span>
       </div>
     </div>
   <div class="my-5 border-2 relative">
     <p class="absolute left-[30%] font-[600] -top-4 px-3 bg-white">Express Checkout</p>
     <div class="flex gap-2 w-full  p-5">
       <div v-for="(method,index) in payment" :key="index" :class="`flex-1 justify-center items-center`">
         <img :src="method.img" alt="payment" class="w-[100px] h-[30px] bg-[rgb(250,214,118)]"  />
       </div>
     </div>
   </div>
   <div class="mt-5 border-2 relative">
     <p class="absolute left-[10%] font-[400] text-[12px] md:text-[16px] text-gray-400 -top-3 md:-top-4 px-3 bg-white">
       or continue below to pay with a credit card
     </p>
   </div>
   <div class="mt-5">
     <ContactForm />
   </div>


 </div>
</template>

<script setup>
import companylogo from "@/assets/ecommmerceLogo.png"
import amazonPay from "@/assets/amazonPay.png"
import payPay from "@/assets/payPal.png"
import shopyPay from "@/assets/shopPay.png"
import ContactForm from "@/components/Checkout/ContactForm.vue";

const payment = [
  {
    img:  amazonPay,
    color:'rgb(250,214,118)'
  },
  {
    img:payPay,
  color:'#ffc439'
  },
  {
    img: shopyPay,
    color:'rgb(255,255,255)'
  }

]
</script>