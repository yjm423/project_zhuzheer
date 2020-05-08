<template>
  <div id="aboutUs">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="goback"></i>
      <h4>关于我们</h4>
      <span></span>
    </header>
    <div>
      <img src="../../../assets/img/aboutUs.png" alt />
    </div>
    <ul>
      <li>
        <span>软件许可及服务协议</span>
        <i class="fa fa-angle-right"></i>
      </li>
      <li>
        <span>隐私协议</span>
        <i class="fa fa-angle-right"></i>
      </li>
      <li>
        <span>开源许可</span>
        <i class="fa fa-angle-right"></i>
      </li>
      <li>
        <span>为住这儿打分</span>
        <i class="fa fa-angle-right"></i>
      </li>
    </ul>
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
header {
  display: flex;
  padding: 0.1rem 0.2rem;
  background-color: #fff;
  justify-content: space-between;
}

img {
  margin-top: 0.5rem;
  margin-bottom: 0.2rem;
  width: 3rem;
}

ul {
  background-color: #fff;
  padding: 0 0.2rem;
  text-align: left;
}

li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
  height: 0.6rem;
  line-height: 0.6rem;
}

.fa-angle-right {
  font-size: 0.25rem;
  margin-top 0.15rem
  color #ccc
}
</style>