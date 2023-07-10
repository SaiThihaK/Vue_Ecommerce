import { createRouter, createWebHistory } from 'vue-router'
import {allProducts,allWomenProducts,allElectronicsProducts,allJeweleryProducts,allMenProducts} from "@/assets/API/products.api";
import TemplateView from "@/views/TemplateView.vue";
const routes = [
  {
    path: '/',
    name: 'home',
    component:TemplateView,
    props:{url:allProducts}
  },
  {
    path: '/men',
    name: "men",
    component: TemplateView,
    props:{url:allMenProducts}
  },
  {
    path: '/women',
    name: "women",
    component: TemplateView,
    props:{url:allWomenProducts}
  },
  {
    path: '/jewelery',
    name: "jewelery",
    component: TemplateView,
    props:{url:allJeweleryProducts}
  },
  {
    path: '/electronics',
    name: "electronics",
    component: TemplateView,
    props:{url:allElectronicsProducts}
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
