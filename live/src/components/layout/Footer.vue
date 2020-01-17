
<template>

  <van-tabbar route>
    <van-tabbar-item icon="search"  active-class="active" replace to="/home">
      
      <span>主页</span>
    </van-tabbar-item>

  <van-tabbar-item  icon="search"  active-class="active" replace to="/market/fair">
     
      <span>友邻市集</span>
    </van-tabbar-item>


    <van-tabbar-item  icon="search"  active-class="active" replace to="/housekeeper">
     
      <span>管家你好</span>
    </van-tabbar-item>
    <van-tabbar-item icon="search"  active-class="active" replace to="/community">
      <span>社区</span>
    </van-tabbar-item>
    <van-tabbar-item icon="search"  active-class="active" replace to="/person">
      
      <span>我</span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<style lang="stylus" scoped>
.redcolor {
  color: #f03d37;
}


.active {
    color: #f03d37;
}
.van-tabbar-item--active {
    color: #f03d37;
    
}
</style>
