import { defineStore } from 'pinia'

import axios from "axios";

export const useFilterStore = defineStore('filter', {
    state: () => {
        return {
            searchQuery:[],
            shouldPush:true,
            filterProducts: [],
            navToggle: false,
            cartItem:[],
            cartToggle:false,

        }
    },
   getters:{
     getFilterProducts(state){
         return  state.filterProducts;
     },

   },
    actions: {
        addSearchQuery(index,arrayValue){
            this.shouldPush = true;
            this.searchQuery.map((query,queryIndex)=>{
                if(query.value === arrayValue[index].value){
              this.deleteFilter(queryIndex);
              this.shouldPush = false;
                }
            });
            if(this.shouldPush){
                this.searchQuery.push({...arrayValue[index]});
            }
        },
        deleteFilter(index){

            this.searchQuery = this.searchQuery.filter((des)=>des.value !== this.searchQuery[index].value);

        },
        clearAllQuery(){
            this.searchQuery = [];
        },
         async getDataFunction(url){
            this.filterProducts =[];
            try{
                const response = await axios.get(url);
                this.filterProducts = response.data;
            }catch (error){
                console.log(error.message)
                throw  new Error(error);
            }

        },
        navToggleHandler() {
                this.navToggle = !this.navToggle;
                
         },
        addToCard(index,arrayValue){
                this.cartItem.push({...arrayValue[index]});
              
        },
        deleteCart(index){
            this.cartItem = this.cartItem.filter((des)=>des.id !== this.cartItem[index].id);
        },
    },
})