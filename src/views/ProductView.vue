<template>
    <div class="flex w-full flex-col overflow-hidden h-screen">
      <div class="flex flex-wrap flex-col w-full">
      <Navbar />
      </div>
      <div  v-if="useStore.cartToggle" class="w-full md:w-[400px] bg-white   absolute z-50 top-0 right-0 shadow-xl">
        <Cart />
      </div>
<div class="w-full h-screen py-5">
<div class="flex flex-col md:flex-row px-5 w-full h-full py-5 justify-center items-center">
<div class=" w-[60%] flex-1">
    <img :src="useStore.filterProducts.image" :alt="useStore.filterProducts.title" class="w-[400px]" />
</div>
<div class="flex-1">
    <h1 class="font-[700] text-[30px]">{{ useStore.filterProducts.title }}</h1>
    <div class="flex gap-5">
        <span>${{ useStore.filterProducts.price }}</span>
        <span class="uppercase italic bg-[#f5f5f5]">Free Shipping</span>
    </div>
    <div class="mt-5 flex gap-3 items-start">
          <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg> 
        <p class="text-[14px]">{{ useStore.filterProducts.rating?.rate }}</p>
    </div>
    <div>{{ useStore.filterProducts.description }}</div>
    <div class="w-full mt-5">
            <button v-if="!useStore.cartItem.find(item => item.id === useStore.filterProducts.id)" @click="addToCart(useStore.filterProducts)" class="bg-black text-white p-3 rounded-sm">ADD TO CART - ${{ useStore.filterProducts.price }}</button>
              <button v-else @click="deleteCart(useStore.filterProducts)" class="bg-[#ff0300] text-white p-3 rounded-sm">REMOVE FROM CART - ${{ useStore.filterProducts.price }}</button>
    </div>
</div>
</div>
</div>
    </div>


</template>


<script setup>
import { singleProduct } from '@/assets/API/products.api';
import { useFilterStore } from '@/store/useFilterStore';
import { useRoute } from 'vue-router';
import { onMounted,watch } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Cart from '@/components/CartComponent/Cart.vue';
const useStore = useFilterStore();
const route = useRoute();
const id = route.params.id;
const url = singleProduct + id;


const addToCart = (product)=>{
useStore.cartItem.push({...product});
    useStore.cartToggle = true;
    find();
   
    console.log(find);
};
const deleteCart = (product)=>{
      useStore.cartItem = useStore.cartItem.filter((des) => des.id !== product.id);
}
onMounted(() => {
    useStore.getDataFunction(url.toString());
    find();
})

watch(
    () => route.path,
    () => {
        useStore.getDataFunction(url.toString());
       
    }
)

</script>