import { defineStore } from 'pinia'

export const useMenStore = defineStore('men', {
    state: () => {
        return { data: [] }
    },
   getters:{
     getData(){
         return state.data;
     }
   },
    actions: {
        storeData(data) {
           this.data = data;
        },
    },
})