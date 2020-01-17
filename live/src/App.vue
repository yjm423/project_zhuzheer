<template>
  <div id="app">

  <!-- <Footer></Footer> -->
    <Footer v-if="$route.meta.keep"></Footer>
    <router-view />
    

  </div>
</template>

<script>
import Footer from "./components/layout/Footer.vue";
export default {
  components: {

    Footer
  }
};
</script>
<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 0.16rem;
}
</style>
