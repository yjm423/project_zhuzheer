<template>
    <div id="nav">
      <router-link to="/home">主页</router-link> |
      <router-link to="/market">友邻市集</router-link> |
      <router-link to="/person">我的</router-link> |
      <router-link to="/housekeeper">管家</router-link> |
      <router-link to="/community">社区</router-link> |
      
    </div>
</template>
<style >
  #nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  border-top: 0.01rem solid #d8d8d8;
  padding-top: 0.05rem ;
  
  display: flex;
  justify-content: space-around;
  z-index: 10;
}
</style>