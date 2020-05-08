<template>
  <div id="register">
    <div class="register-top">
      <!-- 下一步 -->
      <div class="next">
        <i class="fa fa-angle-left fa-2x" @click="back"></i>
        <p>下一步</p>
      </div>
      <!-- 注册新账号 -->
      <h2>注册新账号</h2>
      <!--手机号 -->

      <div class="phone-input">
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
      </div>
      <!-- 多选框 -->
      <div class="multiple">
        <label>
          <input type="checkbox" name="sex" value />
        </label>
        <p>同意&nbsp;《住着儿服务协议》和《隐私协议》</p>
      </div>
    </div>

    <!-- 其他注册方式 -->
    <div class="rest">
      <p>———— 其他注册方式————</p>

      <i class="fa fa-weixin " ></i>
    </div>
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
      actions: [
        { name: "选项", color: "#07c160" },
        { loading: true },
        { name: "禁用选项" }
      ]
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
#register {
  background-color: #fff;
  height: 100%;
  position: relative;
}
.register-top {
  padding: 0.2rem;
}
.next {
  display: flex;
  justify-content: space-between;
}

.next p {
  width: 0.8rem;
  height: 0.36rem;
  line-height: 0.4rem;
  font-size: 0.16rem;
  background-color: #eee;
  border-radius: 0.1rem;
  letter-spacing: 0.02rem;
}
/* 注册新账号 */
h2 {
  text-align: left;
}
/* 多选框 */
.phone-input {
  margin-top: 0.3rem;
  display: flex;
  height: 0.5rem;
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
#register input {
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
/* 其他注册方式 */
.rest {
  font-size: 0.17rem;
  height: 0.8rem;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.fa-weixin{
    font-size: 0.24rem;
    margin-top: 0.1rem;
}
</style>