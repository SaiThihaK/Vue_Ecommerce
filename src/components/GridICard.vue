<template>
  <div v-for="(product,index) in data" :key=index class="mt-5">
    <div class="flex justify-center md:justify-start h-[250px] md:h-[300px]">
      <img :src=product.image :alt=product.title class="md:w-[200px] w-[150px] pt-2"  />
    </div>
    <div class="flex flex-col ps-5  py-5 mt-2 justify-center  flex-wrap w-full md:w-[200px]">
      <p class="font-[700] text-[13px]  flex-wrap w-full">{{product.title}}</p>
      <span class="text-[12px] text-gray-500">${{product.price}}</span>
    </div>

  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>