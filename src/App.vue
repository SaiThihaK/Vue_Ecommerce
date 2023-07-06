<template>
  <div class="container mx-auto">
    <Navbar />
    <div class="px-2">
      <router-view/>
    </div>

  </div>

</template>



<script setup>
import Navbar from "@/components/Navbar.vue"
</script>