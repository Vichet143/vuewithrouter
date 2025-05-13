import { defineStore } from 'pinia'

export const defineStoreCounter = defineStore('counter',{
    state:()=>{
        return{
            count:0
        }
    },
    actions:{
        increment(){
            this.count++
        }
    }
})