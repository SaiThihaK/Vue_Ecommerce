import { createRouter, createWebHistory } from 'vue-router'
import {allProducts,allWomenProducts,allElectronicsProducts,allJeweleryProducts,allMenProducts} from "@/assets/API/products.api";
import TemplateView from "@/views/TemplateView.vue";
import CartView from "@/views/CartView.vue";
import ProductView from "@/views/ProductView"
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
  {
    path: '/cart',
    name: "cart Items",
    component: CartView,

  },
  {
    path: '/product/:id',
    name: "product detail",
    component:ProductView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
