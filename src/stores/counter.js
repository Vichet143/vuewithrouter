import { defineStore } from 'pinia'

const userStoreCounter = defineStore('counter',{
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

export default userStoreCounter