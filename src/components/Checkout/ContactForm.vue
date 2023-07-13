<template>
<div class="w-full">
<div class="w-full flex">
    <h5 class="flex-1 font-[600] text-[20px]">Contact</h5>
   <div>Already have an account?&nbsp;<router-link to="/login" class="underline font-[600] tracking-wider">Log in</router-link></div>
</div>
  <form class="mt-5 w-full">
   <input class="w-full border-[1px] border-gray-300 p-3 rounded-sm focus:border-black" placeholder="Email" type="email"/>
    <div class="mt-3 flex gap-2">
      <input type="checkbox" class="w-4">
      <p class="tracking-wider">Email me wit news and offers</p>
    </div>

    <div class="mt-5 py-5 flex flex-col gap-3">
      <h4 class="text-[18px] font-[600] tracking-wider">Shipping address</h4>
      <input class="w-full border-[1px] border-gray-300 p-3 rounded-sm focus:border-black" placeholder="Country/Region" type="text"/>
      <div class="flex flex-col md:flex-row  gap-3">
        <input class="w-full border-[1px] border-gray-300 p-3 rounded-sm focus:border-black" placeholder="First Name" type="text"/>
        <input class="w-full border-[1px] border-gray-300 p-3 rounded-sm focus:border-black" placeholder="Last Name" type="text"/>
      </div>
      <input class="w-full border-[1px] border-gray-300 p-3 rounded-sm focus:border-black" placeholder="Company(required for business addresses)" type="text"/>
      <input class="w-full border-[1px] border-gray-300 p-3 rounded-sm focus:border-black" placeholder="Apartment, suite, etc.(optional)" type="text"/>
      <div class="flex gap-3">
        <input class="w-full border-[1px] border-gray-300 p-3 rounded-sm focus:border-black" placeholder="City" type="text"/>
        <input class="w-full border-[1px] border-gray-300 p-3 rounded-sm focus:border-black" placeholder="State" type="text"/>
        <input class="w-full border-[1px] border-gray-300 p-3 rounded-sm focus:border-black" placeholder="ZIP code" type="text"/>
      </div>
      <input class="w-full border-[1px] border-gray-300 p-3 rounded-sm focus:border-black" placeholder="Phone(optional)" type="text"/>
      <div class="flex w-full justify-end mt-3">
        <button class="w-[200px] text-[14px] bg-black p-3 text-white uppercase tracking-wider font-[600]">Continue Shipping</button>
      </div>
    </div>


  </form>
</div>
</template>

<script setup>

</script>