import axios from 'axios'
import { defineStore } from 'pinia'

const userRepositystor = defineStore('repository',{
    state:()=>{
        return{
            repository:[]
        }
    },
    actions:{
        async fetchRepository(){
            const {data} = await axios.get('https://api.github.com/users/tfd-ed/repos')
            this.repository = data
        }
    }
})

export default userRepositystor