<template>
  <div id="choosecommunity">
    <!-- <div class="register-top"> -->

    <div class="next">
      <i class="fa fa-angle-left fa-2x" @click="back"></i>
      <i class="fa fa-search"></i>
    </div>

    <h2>选择社区</h2>
    <p class="city">所选城市</p>
    <div class="location">
        <div>
          <span>杭州市</span>
          <i class="fa fa-angle-down "></i>
        </div>
        <div>
            <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
            <span>重新定位</span>
        </div>
    </div>
    <p class="city">全部社区</p>
    <!-- 数据渲染 -->
    <ul>
        <li>杭州山水圣邸</li>
        <li>杭州山水圣邸</li>
        <li>杭州山水圣邸</li>
        <li>杭州山水圣邸</li>
        <li>杭州山水圣邸</li>
        <li>杭州山水圣邸</li>
        <li>杭州山水圣邸</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>




<style>
#choosecommunity {
  background-color: #fff;
  height: 100%;
}

.next {
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
}
.fa-search {
  font-size: 0.24rem;
}

/* 注册新账号 */
h2 {
  text-align: left;
  padding-left: 0.2rem;
}

p {
  height: 0.5rem;
  width: 100%;
  line-height: 0.5rem;
  padding-left: 0.2rem;
  text-align: left;
  background-color: #f9f9f9;
  letter-spacing: 0.02rem;
  font-size: 0.16rem;
}
.location{
    height: 0.6rem;
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between
}
.location span{
    line-height: 0.6rem
}
.location i{
    font-size: 0.18rem;
    padding: 0 0.1rem;
}
ul{
    text-align: left;
    padding-left: 0.2rem;
    height: 4rem;
    overflow: auto
}
li{
    height: 0.5rem;
    line-height: 0.5rem;
}
</style>