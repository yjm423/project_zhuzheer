<template>
  <div class="tool">
    <van-swipe :loop="false" :show-indicators='false'>
      <van-swipe-item>
        <router-link to='/opendoor' class="item">
          <span class="iconfont icon">&#xe652;</span>
          <p class="tips">手机开门</p>
        </router-link>
        <router-link to='/housebill' class="item">
          <span class="iconfont icon">&#xe63f;</span>
          <p class="tips">房屋账单</p>
        </router-link>
        <router-link to='/visitors' class="item">
          <span class="iconfont icon">&#xe84a;</span>
          <p class="tips">访客邀请</p>
        </router-link>
        <router-link to='/repair' class="item">
          <span class="iconfont icon">&#xe64a;</span>
          <p class="tips">维修</p>
        </router-link>
        </van-swipe-item>
      <van-swipe-item>
        <router-link to='/mycar' class="item">
          <span class="iconfont icon">&#xe629;</span>
          <p class="tips">我的车</p>
        </router-link>
        <router-link to='/ems' class="item">
          <span class="iconfont icon">&#xe784;</span>
          <p class="tips">快递查询</p>
        </router-link >
        <router-link to='/scan' class="item">
          <span class="iconfont icon">&#xe73e;</span>
          <p class="tips">扫一扫</p>
        </router-link>
        <router-link to='/checkmore' class="item">
          <p class="more">查看更多</p>
        </router-link>
      </van-swipe-item>
     
    </van-swipe>
  </div>
</template>

<script>

</script>

<style lang="stylus" scoped>
.tool{
  padding 0.1rem 0.15rem
}
.item{
  display block
  float left
  width 0.7rem
  height 0.8rem
  margin-right 0.1rem
  text-align center
  padding 0.15rem 0
  background-color #fff
  border 1px solid #eee
  transform: translateZ(0);
  box-shadow: 0.01rem -0.02rem 0.05rem #ccc
}
.icon{
  font-size:0.28rem
}
p {
  margin 0
}
.tips{
  font-size 0.12rem
}
.more{
  font-size 0.16rem
  color red
  padding 0 0.18rem
}
</style>