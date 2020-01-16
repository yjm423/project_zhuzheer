<template>
  <div id="app">
    <Header></Header>
   
    <!-- 工具栏 -->
   
    
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

 <script src="../package/js/swiper.min.js"></script>
<script>
import Footer from "./Footer";
import Header from "./Header";


// console.log(Swiper)


export default {
  components: {
    Footer,
    Header,
    
  }

  
};
</script>

<style scoped>
img {
  width: 100%;
}

</style>