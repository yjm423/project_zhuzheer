
<template>
  <div>
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

img {
  width: 100%;
}


</style>