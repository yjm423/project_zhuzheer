<template>
  <div id="login">
    <div class="login-top">
      <!-- 下一步 -->
      <div class="head">
        <i class="fa fa-angle-left fa-2x" @click="back"></i>
        <!-- <p>忘记密码</p> -->
        <p>忘记密码</p>
      </div>
      <!-- 登录 -->
      <h2>手机登录</h2>

      <!--手机号 -->

      <li class="phone-input">
        <div class="country-code">
          <span @click="handler">+86</span>
          <i class="fa fa-caret-down"></i>
        </div>
        <input type="text" placeholder="手机号" />

        <van-action-sheet
          v-model="show"
          :round="false"
          :actions="actions"
          cancel-text="取消"
          @cancel="onCancel"
        />
      </li>
      <!-- 密码 -->
      <li class="pass">
        <input type="text" placeholder="密码" />
      </li>
    </div>

    <!-- 其他注册方式 -->
    <div class="rest">
      <p>———— 其他注册方式————</p>

      <i class="fa fa-weixin"></i>
    </div>
    <button>登录</button>
  </div>
</template>

<script>
import Vue from "vue";
import { ActionSheet } from "vant";
import { Toast } from "vant";
Vue.use(ActionSheet);
export default {
  data() {
    return {
      show: false,
      actions: [{ name: "选项", color: "#07c160" }, { name: "禁用选项" }]
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    onCancel() {
      this.show = false;
      Toast("cancel");
    },
    handler() {
      this.show = true;
    }
  }
};
</script>




<style>
#login {
  background-color: #fff;
  height: 100%;
  position: relative;
}
.login-top {
  padding: 0.2rem;
}
.head {
  display: flex;
  justify-content: space-between;
}
.head p{
  font-size: 0.18rem;
}
/* 注册新账号 */
h2 {
  text-align: left;
  padding: 0.2rem 0;
}
.login-top p {
  text-align: left;
  margin-bottom: 0;
}
/* 多选框 */
.phone-input {
  margin-top: 0.1rem;
  display: flex;
  line-height: 0.5rem;
}
.country-code {
  display: flex;
}
.country-code span {
  font-size: 0.2rem;
  border: 0;
}
.country-code i {
  margin-left: 0.1rem;
  line-height: 0.5rem;
}
#login input {
  padding: 0;
  margin-bottom: 0;
  margin-left: 0.1rem;
  margin-top: 0.05rem;
  border: 0;
}
.multiple {
  display: flex;
  margin-top: 0.5rem;
}
.multiple p {
  margin-left: 0.1rem;
}
/* 密码 */
li {
  margin-bottom: 0.1rem;
  border-bottom: 1px solid #ccc;
  margin-top: 0 !important;
}
#login button {
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
  margin-top: 0.3rem;
}
/* 其他注册方式 */
.rest {
  font-size: 0.17rem;
  height: 0.8rem;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.fa-weixin {
  font-size: 0.24rem;
  margin-top: 0.1rem;
}
</style>