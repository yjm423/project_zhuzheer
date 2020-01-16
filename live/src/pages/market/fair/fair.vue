<template>
  <div class="fair">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) of images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="tab">
      <van-grid square>
          
        <van-grid-item v-for="value in 7" :key="value" icon="photo-o" text="文字" />
        
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
</style>