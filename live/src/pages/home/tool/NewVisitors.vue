<template>
  <div class="wrap">
    <div class="inner">
      <header>
        <i class="fa fa-chevron-left" @click="goback"></i>
        <span>完成</span>
      </header>
      <div class="visit">
        <h3>新邀请</h3>
        <p class="addr">居住地址：例如杭州某某小区</p>
        <ul class="register-info">
          <li class="bottom-line">访客姓名</li>
          <li class="bottom-line">来访人数</li>
          <li class="bottom-line">来访事由</li>
          <li>有效期至</li>
        </ul>
      </div>
    </div>
    <div class="car">
      <li>
        <span>是否驾车</span> 
        <van-switch v-model="checked"  />
      </li>
      <p>如驾车，填写车牌后，访客到访时车闸将自动打开</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.inner {
  background-color: #fff;
  padding: 0.2rem 0.2rem 0;
}

header {
  display: flex;
  justify-content: space-between;
}

header i {
  font-size: 0.2rem;
}

header span {
  width: 0.6rem;
  height: 0.3rem;
  line-height: 0.3rem;
  background-color: #ccc;
  border-radius: 0.1rem;
}

h3 {
  text-align: left;
  margin-top: 0.3rem;
}

.addr {
  text-align: left;
}

.register-info {
  text-align: left;
}

li {
  height: 0.5rem;
  line-height: 0.5rem;
  
}

.car {
  text-align: left;
  margin-top: 0.1rem;
}

.car li {
  background-color: #fff;
  padding: 0 0.2rem;
  display flex
  justify-content space-between
}

.car p {
  margin: 0.1rem 0.2rem;
}
.van-switch{
    margin-top 0.1rem
    width 0.5rem
    border 1px solid #ccc
}
.bottom-line {
  border-bottom: 1px solid #ccc;
}
</style>