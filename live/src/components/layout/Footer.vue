
<template>

  <van-tabbar route>
    <van-tabbar-item icon="search" replace to="/home">
      <!-- <span class="icon icon-home"></span> -->
      <span>主页</span>
    </van-tabbar-item>
    <van-tabbar-item icon="search" replace to="/market">
      <!-- <span class="icon icon-friends"></span> -->
      <span>友邻市集</span>
    </van-tabbar-item>
    <van-tabbar-item  icon="search" replace to="/housekeeper">
      <!-- <van-icon name="newspaper-o" /> -->
      <span>管家你好</span>
    </van-tabbar-item>
    <van-tabbar-item icon="search" replace to="/community">
      <span>社区</span>
    </van-tabbar-item>
    <van-tabbar-item icon="search" replace to="/person">
      
      <span>我</span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<style lang="stylus" scoped>
.redcolor {
  color: #f03d37;
}

a {
  color: #f03d37;
}
.van-tabbar-item--active {
    color: #f03d37;
}
</style>
