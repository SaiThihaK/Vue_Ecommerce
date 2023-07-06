<template>

  <div class="flex gap-5">
    <div>
  <FilterBar />
    </div>
    <div class="grid grid-cols-2 px-5 gap-5 flex-1">
      <div v-for="(product,index) in data" :key=index class="grid  w-[400px] mt-5">
        <div class="w-full flex justify-center">
          <img :src=product.image :alt=product.title class="w-[200px] pt-2"  />
         </div>
      <div class="flex flex-col justify-start px-5 py-2 flex-wrap">
        <p class="font-[700] text-[13px] text-start w-full">{{product.title}}</p>
        <span class="text-[12px] text-gray-500">${{product.price}}</span>
      </div>

      </div>
    </div>
  </div>

</template>

<script setup>


import {allMenProducts} from "@/assets/API/men.api";
import {ref, onMounted} from "vue";
import axios from "axios";
import FilterBar from "@/components/filterBar.vue";

let data = ref([]);


const getProduct = async ()=>{
  try{
    const response = await axios.get(allMenProducts);
    data.value = response.data;
    console.log(response.data);
  }catch (error){
    throw  new Error(error);
  }
}

onMounted(()=>{
  getProduct();
})

</script>