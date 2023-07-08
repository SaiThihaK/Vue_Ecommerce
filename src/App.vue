<template>
  <div class="container mx-auto">
    <Navbar />
    <div class="px-2 flex gap-5">
      <div>
        <FilterBar />
      </div>
      <div class="flex w-full">
        <router-view/>
      </div>
    </div>

  </div>

</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
import FilterBar from "@/components/filterBar.vue";
console.log(window.innerWidth)
</script>