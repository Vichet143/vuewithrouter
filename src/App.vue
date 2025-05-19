<template>
  <HelloWorld></HelloWorld>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <Register/>
  <Footer></Footer>

</template>

 
<script>
import HelloWorld from "./components/HelloWorld.vue";
import Footer from "./components/Footer.vue";
import Register from "./components/modal/register.vue";


export default {
  mounted() {
    setTimeout(() => window.HSStaticMethods.autoInit(), 100);
  },
  components: {
    HelloWorld,
    Footer,
    Register
  },
};
</script>

