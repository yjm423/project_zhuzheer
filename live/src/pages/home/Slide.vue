<template>
  <div class="tool">
    <van-swipe :loop="false" :show-indicators='false'>
      <van-swipe-item>
        <router-link to='/home/opendoor' class="item">
          <span class="iconfont icon">&#xe652;</span>
          <p class="tips">手机开门</p>
        </router-link>
        <div class="item">
          <span class="iconfont icon">&#xe63f;</span>
          <p class="tips">房屋账单</p>
        </div>
        <div class="item">
          <span class="iconfont icon">&#xe84a;</span>
          <p class="tips">访客邀请</p>
        </div>
        <div class="item">
          <span class="iconfont icon">&#xe64a;</span>
          <p class="tips">维修</p>
        </div>
        </van-swipe-item>
      <van-swipe-item>
        <div class="item">
          <span class="iconfont icon">&#xe629;</span>
          <p class="tips">我的车</p>
        </div>
        <div class="item">
          <span class="iconfont icon">&#xe784;</span>
          <p class="tips">快递查询</p>
        </div>
        <div class="item">
          <span class="iconfont icon">&#xe73e;</span>
          <p class="tips">扫一扫</p>
        </div>
        <div class="item">
          <p class="more">查看更多</p>
        </div>
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
  width 0.75rem
  height 0.8rem
  background-color #ccc
  margin-right 0.05rem
  text-align center
  padding-top 0.01rem
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
  font-size 0.18rem
  color red
  padding 0.1rem 0.18rem
}
</style>