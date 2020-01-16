<template>
  <div>
    <!-- 顶部轮播 -->
    <div class="topWrap">

    
    <div class="top">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img
            src="https://z1.muscache.cn/pictures/hongbao/marquee/original/aca01536-8332-4b18-93ff-24ba1c8bede7.jpg"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://z1.muscache.cn/pictures/hongbao/marquee/original/00c8f282-2798-445e-aa19-fe7a0fea09e3.jpg"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://z1.muscache.cn/pictures/hongbao/marquee/original/cc0e1701-91e9-4c86-a114-a619ba9d69f3.jpg"
            alt
          />
        </van-swipe-item>
      </van-swipe>
      <Slide></Slide>
      <div class="notice">

      </div>
    </div>
    </div>
    <!-- 社区活动 -->
    <div class="activity"></div>
    <!-- 明星员工 -->
    <div class="star"></div>
    <!-- 阳光物业 -->
    <div class="management"></div>
    <!-- 资产服务计划 -->
  </div>
</template>

<script>
import Slide from "./Slide";
export default {
  components: {
    Slide
  }
};
</script>

<style lang="stylus" scoped>

.topWrap{
  padding  0.1rem 0.1rem 0.05rem
  height 100%
  width 100%
  
}
.top{
  border-radius:0.01rem
  margin-top 0.05rem
  border 0.01rem solid #ccc
}
img {
  width: 100%;
}
.notice{
  height 0.5rem
  width 100%
  margin-top 0.1rem
  background blue
}
</style>