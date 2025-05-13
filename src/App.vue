<template>
  <HelloWorld></HelloWorld>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer></Footer>
</template>



<script>
import HelloWorld from "./components/HelloWorld.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    HelloWorld,
    Footer,
  },
};
</script>
