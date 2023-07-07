import { createPinia } from 'pinia';
import {useFilterStore} from "@/store/useFilterStore";
const pinia = createPinia();

pinia.use(useFilterStore);

export default pinia;
