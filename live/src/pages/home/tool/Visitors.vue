<template>
  <div id="visitors">
    <div class="visitor-record">
      <header>
        <i class="fa fa-angle-left fa-2x" @click="goback"></i>
      </header>
      <h3>访客邀请</h3>
      <p class="addr">地址：例如杭州金沙阳光公寓</p>
      <div>
        <img src="../../../assets/img/visitor-logo.png" alt />
        <p>暂无邀请记录</p>
      </div>
    </div>

    <div class="go-visit">
      
      <router-link to='/newVisitors' tag='span'>+</router-link>
      <p>去邀请</p>
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
#visitors {
  height: 100%;
  background-color: #fff;
}

.visitor-record {
  padding: 0.2rem;
}

header {
  width: 100%;
  height: 0.4rem;
  text-align: left;
}

.fa-chevron-left {
  font-size: 0.2rem;
}

h3 {
  text-align: left;
}

#visitors .addr {
  text-align: left;
}

#visitors img {
  height: 1.4rem;
  width: 1.8rem;
  margin: 0.5rem auto;
  display: block;
}


.go-visit {
  width: 100%;
  height: 0.7rem;
  padding-top: 0.1rem;
  border-top :1px solid #ccc
  position: absolute;
  bottom: 0;
}

.go-visit span {
  font-size: 0.4rem;
  font-weight: 100;
  color: #e86861;
}
</style>