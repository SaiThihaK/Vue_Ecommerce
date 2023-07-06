<template>
  <nav class="flex py-5 px-2 w-full">

    <ul class="flex gap-5 flex-1">
      <li v-for="(nav,index) in navbarItem">
        <RouterLink  :to=nav.path :key=index class="font-[700] text-[14px] uppercase hover:border-b-2 border-black">
          {{nav.name}}
        </RouterLink>
      </li>
    </ul>
    <div class="flex-1">
      <h1>Shel Wel</h1>
    </div>

    <ul class="flex gap-5">
    <li v-for="(icon,index) in navbarIcon" :key=index>
    <i :class=icon.icon></i>
    </li>
    </ul>

  </nav>

</template>

<script setup>

const navbarItem = [
  {
    name:"MEN",
    path:"/men"
  },
  {
    name:"WOMEN",
    path:"/women"
  },
  {
    name:"ELECTRONICS",
    path:"/electronics"
  },
  {
    name:"JEWELERY",
    path:"/jewelery"
  }
]
const navbarIcon = [
  {
    icon:"fa-solid fa-magnifying-glass"
  },

  {
    icon: "fa-solid fa-cart-shopping"
  },
]
</script>