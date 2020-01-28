
<template>
  <div class="layout">
    <Header></Header>
    <Container></Container>
    <Footer></Footer>
    <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
    <van-popup v-model="show" closeable>
      <h3>欢迎来到</h3>
      <h3>杭州魅力之城</h3>
      <div class="identity">
        当前身份：
        <span>游客</span>
      </div>
      <div class="btn">
        <button>我住这，去选房</button>
        <button>只想接收小区信息</button>
      </div>
      <p style="color:'red">我可以干嘛？ &gt;</p>
    </van-popup>
  </div>
</template>

<script>
import Header from "./Header";
import Container from "./Container";
import Footer from "../../components/layout/Footer.vue";

export default {
  components: {
    Header,
    Container,
    Footer
  },
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;
  }
};
</script>

<style scoped>
html,
body {
  height: 100%;
}
.layout {
  display: flex;
  flex-direction: column;
}
.van-popup {
  height: 55%;
  width: 80%;
  border-radius: 0.1rem;
  padding-top: 0.3rem;
}

.van-popup p {
  padding: 0.2rem 0;
  margin-bottom: 0;
}
.identity {
  margin-top: 0.1rem;
}
.btn {
  margin-top: 0.3rem;
}
.layout button {
  width: 90%;
  height: 0.5rem;
  line-height: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.16rem;
  border: 0;
  letter-spacing: 0.02rem;
  background-color: #da645d;
  outline: none;
  color: #fff;
  padding: 0;
  margin-top: 0.2rem;
}
</style>



