<template>
  <div class="fair">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) of images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="tab">
      <van-grid square>
          
        <van-grid-item  icon="" text="喝水" />
        <span class="iconfont">&#xe640;</span>
      </van-grid>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  }
};
</script>
<style scoped>
.fair .van-swipe {
  height: 1.79rem;
  width: 100%;
  margin-bottom: 0.2rem;
}
.van-swipe-item img {
  height: 100%;
}
.iconfont{
    position: absolute;
    top:.05rem;
    left:.42rem;
    font-size:20px
}
.van-grid-item__text{
    font-size:.14rem;
  
   
}
</style>