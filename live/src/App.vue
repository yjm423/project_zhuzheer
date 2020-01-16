<template>
  <div id="app">
<<<<<<< HEAD
    <!-- app???? -->
    <layout></layout>
=======
    <Layout v-if="$route.meta.keep" />
    <router-view />
>>>>>>> f8f8000c76f44b8acf0a989d6c6a4d5c57c5a8e2
  </div>
</template>

<script>
import Layout from "./components/layout";
export default {
  components: {
    Layout
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
