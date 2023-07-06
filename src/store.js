import { createPinia } from 'pinia';
import {useMenStore} from "@/store/useMenStore";
const pinia = createPinia();

pinia.use(useMenStore);

export default pinia;
