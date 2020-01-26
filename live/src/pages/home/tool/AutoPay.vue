<template>
  <div id="autopay">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="goback"></i>
      <i class="fa fa-question-circle-o"></i>
    </header>
    <h2>自动扣缴</h2>

    <ul>
      <!-- 二级路由 -->
      <li>
        未开通(
        <span>0</span>)
      </li>
      <li>
        已开通(
        <span>0</span>)
      </li>
    </ul>
    <img src="../../../assets/img/bill-logo.png" alt class="bill-logo" />
    <p>暂无未开通的业务哦</p>
    <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
    <van-popup v-model="show" closeable>
      <img src="../../../assets/img/pay-logo.png" alt />
      <p>自动扣款介绍：</p>
      <p>房屋自动扣缴范围包括物业服务费、维修资金、代收的水电费等；车位自动扣缴范围包括车位管理费用等。具体以（前期）物业服务合同的约定为准。开通后请确保绑定的银行卡内资金充足。如需取消，可本人在线办理取消扣缴。</p>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Popup } from "vant";

Vue.use(Popup);
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
  },
  mounted() {
    this.show = true;
  }
};
</script>

<style lang="stylus" scoped>
#autopay {
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

.van-popup {
  height: 55%;
  width: 80%;
  border-radius: 0.1rem;
}

.van-popup img {
  width: 100%;
}

.van-popup p {
  text-align: left;
  padding: 0 0.2rem;
  margin-bottom: 0;
}
</style>