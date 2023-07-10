import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./style.css"
import {createPinia} from "pinia";
import store from "@/store";

createApp(App).use(createPinia(store)).use(router).mount('#app')
