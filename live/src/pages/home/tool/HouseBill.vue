<template>
  <div id="bill">
    <div class="bill-title">
      <header>
        <i class="fa fa-angle-left fa-2x" @click="goback"></i>
        <i class="fa fa-question-circle-o"></i>
      </header>
      <h2>房屋账单</h2>
      <div class="bill-btn">
        <p class="addr">杭州金沙阳光公寓</p>
        <span>预缴充值</span>
        <span>自动扣款</span>
      </div>

      <div class="all-bill">
        <h4>全部账单</h4>
        <span>
          去看看
          <i class="fa fa-angle-right"></i>
        </span>
      </div>
    </div>
    <div class="bill-list">
        <img src="../../../assets/img/bill-logo.png" alt="">
        <p>暂无本月账单</p>
        <div class="pay">直接缴费</div>
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
#bill {
  height: 100%;
}

.bill-title {
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
.bill-btn{
    display flex
    height 0.4rem
}
.bill-btn span{
    width 0.8rem
    height 0.3rem
    line-height 0.3rem
    border 1px solid #cccccc
    border-radius 0.15rem
    float right
}
#bill .addr {
  text-align: left;
  flex 1
  line-height 0.3rem
}

.all-bill {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  padding-top: 0.2rem;
}

.fa-angle-right {
  margin-left: 0.1rem;
}
.bill-list{
    margin-top 0.1rem
    height 100%
    background-color #fff
}
.bill-list img{
    width 2rem
    height 1.5rem
    margin 1rem auto 0.3rem
}
.bill-list p{
    letter-spacing 0.02rem
}
.bill-list .pay{
    width 90%
    height 0.5rem
    background-color #eaeaea
    margin 0 auto
    line-height 0.5rem
    border-radius 0.1rem
    color #919191
    margin-top 0.4rem
}
</style>