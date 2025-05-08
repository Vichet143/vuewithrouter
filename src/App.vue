<template>
  <HelloWorld></HelloWorld>
  <router-view></router-view>
  <Footer></Footer>
</template>



<script>
import HelloWorld from "./components/HelloWorld.vue"
import Footer from "./components/Footer.vue"

export default{
  components:{
    HelloWorld,
    Footer,
  }
}
</script>