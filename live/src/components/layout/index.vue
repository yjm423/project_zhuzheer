<template>
  <div id="app">
    
   
    <!-- 工具栏 -->    
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

 <script src="../package/js/swiper.min.js"></script>
<script>
import Footer from "./Footer";



// console.log(Swiper)


export default {
  components: {
    Footer,
    
    
  }

  
};
</script>

<style scoped>
img {
  width: 100%;
}

</style>