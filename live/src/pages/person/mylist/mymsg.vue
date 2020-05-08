<template>
  <!-- 我的帖子 -->
  <div id="mymsg">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="goback"></i>
    </header>
    <h2>我的帖子</h2>

    <ul>
      <!-- 二级路由 -->
      <router-link to="person/mymsg/myjoining" router-link-active="active" tag="li">我参与的</router-link>
      <router-link to="person/mymsg/mypublish" tag="li">我发表的</router-link>
    </ul>
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
#mymsg {
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

h2 {
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