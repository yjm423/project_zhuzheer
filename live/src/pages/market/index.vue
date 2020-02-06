<template>
  <div id="app">
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
export default {};
</script>
<style scoped>
#app {
  background: #fff;
}
.IP {
  width: 2.4rem;

  margin: 0.1rem 0.15rem;
  border-radius: 0.2rem;
}
.inp {
  border: 0;
  text-align: center;
  background: #ccc;
  border-radius: 0.2rem;
  width: 2.4rem;
  height: 0.24rem;
  font-size: 0.17rem;
}
.van-search__content {
  border-radius: 0.15rem !important;
}
.sPan {
  position: absolute;
  top: 0.08rem;
  right: 0.67rem;
  font-size: 0.26rem;
}
.sPan a {
  color: rgb(153, 150, 150);
}
.POT {
  position: absolute;
  top: 0.08rem;
  right: 0.22rem;
  font-size: 0.26rem;
}
.POT a {
  color: rgb(153, 150, 150);
}
.nav {
  margin-left: 0.15rem;
  text-align: left;
}
.nav a {
  color: rgb(145, 143, 143);
  display: inline-block;
  margin-right: 0.2rem;
  padding-bottom: 0.1rem;
}
.nav .router-link-active {
  color: black;
  border-bottom: 0.01rem solid black;
}
/* .active {
    color: #f03d37;
}
.van-tabbar-item--active {
    color: #f03d37;
} */
</style>