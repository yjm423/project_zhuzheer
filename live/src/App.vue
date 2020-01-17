<template>
  <div id="app">
    
    <layout v-if="$route.meta.keep"></layout>
     <router-view></router-view>
  </div>
</template>

<script>
import Layout from './components/layout'
export default {
   name: 'app',
  components: {
   
    Layout
  }
}
</script>
<style lang="stylus">

</style>
