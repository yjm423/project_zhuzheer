<template>
  <!-- 我的帖子 -->
  <div id="mygoods">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="goback"></i>
      <h3>我的友两手</h3>
      <h3>帮助</h3>
    </header>
  

    <ul>
      <!-- 二级路由 -->
      <router-link to="person/mygoods/myjoining" router-link-active="active" tag="li">我卖出的</router-link>
      <router-link to="person/mygoods/mypublish" tag="li">我买到的</router-link>
      <router-link to="person/mygoods/mypublish" tag="li">我发布的</router-link>
    </ul>
    <router-view></router-view>
    <img src="../../../assets/img/car-logo.png" alt class="bill-logo" />
    <p>暂无参与的主题</p>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      show: false
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
#mygoods {
  height: 100%;
  padding: 0.2rem;
  background-color: #fff;
}

header {
  width: 100%;
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
}

.fa-chevron-left {
  font-size: 0.2rem;
}

.fa-question-circle-o {
  font-size: 0.24rem;
}

h3 {
    font-size 0.22rem
  text-align: left;
}

ul {
  display: flex;
  margin-top: 0.2rem;
}

li {
  margin-right: 0.2rem;
  height: 0.4rem;
  line-height: 0.4rem;
   border-bottom: 0;
}

.active {
  border-bottom: 1px solid #ccc;
}

.bill-logo {
  width: 2rem;
  height: 1.5rem;
  margin: 1rem auto 0.3rem;
}

p {
  letter-spacing: 0.02rem;
}
</style>