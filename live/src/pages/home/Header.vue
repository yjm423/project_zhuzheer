
<template>
  <header class="navbar">
    <span>
      <van-icon name="aim" />
    </span>
    <div class="livehere">住这儿</div>
    <div class="icon">
      <span class="iconfont">&#xe71c;</span>
      <span class="iconfont">&#xe75a;</span>
    </div>
  </header>
</template>

<style lang="stylus" scoped>
.navbar {
  height: 0.7rem;
  // color: #fff;
  background: #fff;
  padding: 0 0.2rem ;
  display: -webkit-box;
  display: -ms-flexbox;
  position: relative;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}

.nav-header {
  display: block;
  -webkit-box-flex: 1;
  font-size: 0.18rem;
  font-weight: 400;
  text-align: center;
  line-height: 0.5rem;
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.van-icon-aim {
  font-size: 0.28rem;
  
}

.iconfont {
  font-size: 0.28rem;
  margin-left 0.25rem
  
}
.icon{
  position: absolute;
  right 0.2rem
}
.livehere {
  font-size 0.3rem;
  // vertical-align middle
  position absolute
  line-height 0.5rem
  top 0
  bottom 0
  left 0
  right 0
  margin auto 
}
</style>