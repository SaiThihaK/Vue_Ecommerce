<template>
  <div v-for="(product,index) in data" :key=index class="grid w-[200px]">
    <div class="w-full flex justify-start">
      <img :src=product.image :alt=product.title class="md:w-[400px] w-[250px] pt-2 h-[250px]"  />
    </div>
    <div class="flex flex-col justify-start px-5 py-2 flex-wrap">
      <p class="font-[700] text-[13px] text-start w-full">{{product.title}}</p>
      <span class="text-[12px] text-gray-500">${{product.price}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>