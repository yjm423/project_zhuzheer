<template>
  <div id="mycart">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="goback"></i>
      <h4>添加新卡</h4>
    </header>
    <h2>我的一卡通</h2>
    <span>尚未绑定一卡通</span>
    <p>申请一卡通</p>
  </div>
</template>

<script>
export default {
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
#mycart{
    background-color #fff
    height 100%
    padding 0.2rem
}
header{
    display flex
    justify-content space-between
}
span {
    display block
    margin-top 1.5rem
    color #ccc
    
}
p{
    position absolute
    bottom 0.5rem
    left 50%
    text-align center
    margin-left -0.35rem
    color #ccc
}
</style>