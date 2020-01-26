<template>
  <div id="verify">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="goback"></i>
    </header>
    <img src="../../../assets/img/verify-logo.png" alt="">
    <p>此功能需要选择房屋后才能使用，现在选择房屋吗？</p>
    <router-link to='/chooseHouse' tag='span'>选择身份</router-link>
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
#verify {
  height: 100%;
  background-color: #fff;
   padding: 0.2rem;
}
header {
  width: 100%;
  height: 0.4rem;
  text-align: left;
}
img{
  width 2rem
  height 2rem
  margin 1rem auto 0
}
p{
  padding 0.2rem 0.5rem
  letter-spacing 0.02rem
}
span{
  color #eb5b58
  display inline-block
  font-size 0.18rem
  height 0.4rem
  line-height 0.4rem
  width 1.5rem
  border 1px solid #eb5b58
  border-radius 0.2rem
}
</style>