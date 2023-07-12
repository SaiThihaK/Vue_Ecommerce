<template>
<div class="w-full h-full">
{{ 
useStore.filterProducts.title    
}}
</div>
</template>


<script setup>
import { singleProduct } from '@/assets/API/products.api';
import { useFilterStore } from '@/store/useFilterStore';
import { useRoute } from 'vue-router';
import { onMounted,watch } from 'vue';
const useStore = useFilterStore();
const route = useRoute();
const id = route.params.id;
const url = singleProduct + id;
console.log(url);
console.log(useStore.filterProducts);
onMounted(() => {
    useStore.getDataFunction(url.toString());
})

watch(
    () => route.path,
    () => {
        useStore.getDataFunction(url.toString());
    }
)

</script>