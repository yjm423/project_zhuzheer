<template>
  <div id="opendoor">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="goback"></i>
    </header>
    <div class="hello">
        <h2>您好！</h2>
        <h2>欢迎使用手机开门</h2>
        <p>当前小区：<span>杭州金沙阳光公寓</span></p>
    </div>
    <!-- 开门的提示 -->
    <div class="course">  
        <h5>点击开门</h5>
        <p>请靠近需要开启的通闸或门禁</p>
    </div>
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
#opendoor {
  height: 100%;
  background-color: #fff;
  padding: 0.2rem;
  text-align: left;
}
.hello{
    margin-top 0.5rem
}
h2{
    margin-bottom 0.1rem
}
p{
    letter-spacing 0.01rem
}

.course{
    height 1.2rem
    width 100%
    background-color #8093c3
    border-radius 0.1rem
    color #ffffff
    margin-top 0.8rem
    padding-top 0.3rem
    padding-left 0.3rem
}
h5{
   
    font-size 0.22rem
    color #ffffff
    
}
.course p{
    color #fff
    letter-spacing 0.02rem
}
</style>