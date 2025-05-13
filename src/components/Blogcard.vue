<template>
    <router-link :to="`/blog/${id}`" class="size-70 border-2 border-b-amber-600 flex justify-center"></router-link>
</template>

<script>

    export default{
        props:{
            id:{
                type: String
            }
        }
    }
</script>