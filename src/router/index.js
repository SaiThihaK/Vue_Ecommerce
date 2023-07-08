import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenView from "@/views/MenView.vue";
import WomanView from "@/views/WomanView.vue";
import ElectronicView from "@/views/ElectronicView.vue";
import JeweleryView from "@/views/JeweleryView.vue";
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/men',
    name: "men",
    component: MenView
  },
  {
    path: '/women',
    name: "women",
    component: WomanView
  },
  {
    path: '/electronics',
    name: "electronics",
    component: ElectronicView
  },
  {
    path: '/jewelery',
    name: "electronics",
    component: JeweleryView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
