<template>
  <div class="tool">
    <van-swipe :loop="false" indicator-color="white">
      <van-swipe-item>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        </van-swipe-item>
      <van-swipe-item>
          <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
        <span class="item"></span>
      </van-swipe-item>
     
    </van-swipe>
  </div>
</template>

<script>

</script>

<style lang="stylus" scoped>
.item{
  display inline-block
  width 80px
  height 50px 
  background-color red
  margin-right 5px
}
</style>