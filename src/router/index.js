import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenVIew from "@/views/MenVIew.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/men',
    name: "men's clothings",
    component: MenVIew
  },
  {
    path: '/women',
    name: "women's clothings",
    component: MenVIew
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
