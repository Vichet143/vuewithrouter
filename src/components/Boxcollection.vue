<template>
    <div style="max-width: 1200px;" class=" column-3 border border-amber-400 m-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Blogcard v-for="(item,index) in arr" 
        :key="index"
        :id="item.id"></Blogcard>
    </div>
</template>

<script>
import Blogcard from './Blogcard.vue';

    export default{
        data(){
            return{
                arr:[
                    {id:"232-2323"},{id:"345-564"},{id:"789-456"},{id:"123-563"}
                ]
            }
        },
        components:{
            Blogcard
        }
    }
</script>