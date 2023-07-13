<template>
  <div class="flex flex-col gap-3">

    <h3 class="capitalize text-[20px] font-[800]">Shel Wel's essential wears</h3>
    <p v-for="(nav,index) in productCat()" @click="useStore.addSearchQuery(index,productCat())" :class="queryCheckClass(nav)" :key=index>
      {{nav.value}}
    </p>
  </div>
</template>
<script setup>

import {menProduct,womenProduct,jeweleryProduct,electronicProduct} from "@/assets/constant/filter";

import {useRoute} from "vue-router";
import {useFilterStore} from "@/store/useFilterStore";
const route = useRoute();
const useStore = useFilterStore();

const productCat = () => {
  switch (route.path) {
    case "/men": return menProduct;
    case "/women": return womenProduct;
    case "/electronics": return electronicProduct;
    case "/jewelery": return jeweleryProduct;
  }
  


}
const queryCheckClass = (nav) => {
  const found = useStore.searchQuery.find((query) => query.value === nav.value);
  if (found) {
   return "text-[14px] font-[700] cursor-pointer capitalize"
  } else {
    return "text-[14px] font-[500] cursor-pointer capitalize"
  }
};

const filterBarNav = []

// const showRouthPath = ()=>{
//   switch (route.path) {
//     case "/":return "products' sale"
//     case "/men":return "men's Sale";
//     case "/women":return "women's Sale";
//     case "/electronics":return "electronics's Sale";
//     case "/jewelery":return "jewelery's sale";
//   }
// }
</script>