<template>
  <div id="verify">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="goback"></i>
    </header>
    <h2>欢迎：）</h2>
    <p>欢迎来到杭州魅力之城住这儿，你可以获取管家服务、参与邻里互动、体验友邻市集</p>
    <div>
         <li>
          <div class="left">
            <i class="fa fa-home"></i>
            <span class="tips">
                <h4>我住本小区</h4>
                <p>确认房间号后，可专享管家服务，参与邻里互动。</p>
            </span>
          </div>
          <i class="fa fa-angle-right"></i>
        </li>
         <li>
          <div class="left">
           <i class="fa fa-heart-o"></i>
            <span class="tips">
                <h4>关注本小区</h4>
                <p>可获取本社区公开资讯，了解社区动态。</p>

            </span>
          </div>
          <i class="fa fa-angle-right"></i>
        </li>
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
#verify {
  height: 100%;
  background-color: #fff;
   padding: 0.2rem;
   text-align left 
}
header {
  width: 100%;
  height: 0.4rem;
  text-align: left;
}
h2{
    padding 0.3rem 0
}
li {
  display: flex;
  justify-content: space-between;
  padding 0.2rem 0
}
.left{
    display flex
}
i{
    font-size 0.3rem
    margin-right 0.2rem
    color #909090
}
.tips{
    width 2rem
}
.fa-angle-right{
    margin-top 0.2rem
    font-size 0.2rem
}
</style>