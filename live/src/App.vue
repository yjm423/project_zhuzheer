<template>
  <div id="app">
   <Layout v-if="$route.meta.keep"></Layout>
    <router-view />
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
