<template>
  <div id="ems">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="goback"></i>
    </header>
    <h2>快递查询</h2>
    <div class="addr">
      <p>杭州金沙阳光公寓</p>
      
      <h5>
       
        <span>杭州金沙阳光公寓几幢几单元几楼几室</span>
        <i class="fa fa-question-circle"></i>
      </h5>
    </div>
    <span class="nodata">暂无数据</span>
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
#ems {
  height: 100%;
  background-color: #fff;
  padding: 0.2rem;
  position: relative;
}

header {
  width: 100%;
  height: 0.4rem;
  text-align: left;
}

.fa-chevron-left {
  font-size: 0.2rem;
}

h2 {
  text-align: left;
  margin: 0.2rem 0;
}

#ems .addr {
  text-align: left;
}

h5 {
  font-size: 0.18rem;
  display flex
}
h5 span{
  flex 1
}
h5 i{
  font-size 0.14rem
}
.nodata {
  display block
  margin-top: 1.5rem;
  color #ccc
}
</style>