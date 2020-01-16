<template>
<div id='app'>
    <router-link to="/search">
      <div class="IP">
        <input type="text" placeholder="搜索商品" class="inp" /> 
        
      </div>
    </router-link>

    <span class="sPan">
      <router-link to="/plan">
        <van-icon name="chart-trending-o" />
      </router-link>
    </span>
    <span class="POT">
      <router-link to="/shop_car">
        <van-icon name="shopping-cart-o" />
      </router-link>
    </span> 
    <div class="nav">
        <router-link to="/market/fair">市集</router-link>
        <router-link to="/market/community">社区拼团</router-link>
        <router-link to="/market/convenience">便利</router-link>
    </div>
    <router-view />
  </div>
</template>
  
    

     
  

<script>
export default {
  
};
</script>
<style scoped>
 .IP {
  width: 2.4rem;
  border: .01rem solid #ccc;
  margin: 0.1rem 0.15rem;
  border-radius: 0.2rem;
}
.inp {
  margin-left: 0.2rem;
  border: 0;
  text-align: center;
}
.van-search__content {
  border-radius: 0.15rem !important;
}
.sPan {
  position: absolute;
  top:0.07rem;
  right: 0.67rem;
  font-size: 0.26rem;
}
.sPan a {
  color: rgb(153, 150, 150);
}
.POT {
  position: absolute;
  top: .07rem;
  right: 0.22rem;
  font-size: 0.26rem;
}
.POT a {
  color: rgb(153, 150, 150);
} 
.nav{
  margin-left:.15rem;
  text-align: left;
  
}
.nav a{
  color: rgb(145, 143, 143);
  display: inline-block;
  margin-right:.2rem;
  padding-bottom:.1rem
}
.nav .router-link-active{
  color:black;
  border-bottom: .01rem solid black
}
</style>