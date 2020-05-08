<template>
  <div class="wrap">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="goback"></i>
    </header>
    <div class="content">
      <h3></h3>
      <ul class="opened">
        <router-link to='/opendoor' tag='li'>
          <div class="left">
            <span class="iconfont">&#xe652;</span>
            <span class="tips">手机开门</span>
          </div>
          <i class="fa fa-angle-right"></i>
        </router-link>
        <router-link to='/housebill' tag='li'>
          <div class="left">
            <span class="iconfont">&#xe63f;</span>
            <span class="tips">房屋账单</span>
          </div>
          <i class="fa fa-angle-right"></i>
        </router-link>
        <router-link to='/visitors' tag='li'>
          <div class="left">
            <span class="iconfont">&#xe84a;</span>
            <span class="tips">访客邀请</span>
          </div>
          <i class="fa fa-angle-right"></i>
        </router-link>
        <router-link to='/repair' tag='li'>
          <div class="left">
            <span class="iconfont">&#xe64a;</span>
            <span class="tips">维修</span>
          </div>
          <i class="fa fa-angle-right"></i>
        </router-link>
         <router-link to='/mycar' tag='li'>
          <div class="left">
            <span class="iconfont">&#xe629;</span>
            <span class="tips">我的车</span>
          </div>
          <i class="fa fa-angle-right"></i>
        </router-link>
        <router-link to='/ems' tag='li'>
          <div class="left">
            <span class="iconfont">&#xe784;</span>
            <span class="tips">快递查询</span>
          </div>
          <i class="fa fa-angle-right"></i>
        </router-link>
        <router-link to='/scan' tag='li'>
          <div class="left">
            <span class="iconfont">&#xe73e;</span>
            <span class="tips">扫一扫</span>
          </div>
          <i class="fa fa-angle-right"></i>
        </router-link>
        <router-link to='/autopay' tag='li'>
          <div class="left">
            <span class="iconfont">&#xe615;</span>
            <span class="tips">自动扣缴</span>
          </div>
          <i class="fa fa-angle-right"></i>
        </router-link>
        <li>
          <div class="left">
            <span class="iconfont">&#xe680;</span>
            <span class="tips">赞赏</span>
          </div>
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          <div class="left">
            <span class="iconfont">&#xe647;</span>
            <span class="tips">一卡通</span>
          </div>
          <i class="fa fa-angle-right"></i>
        </li>
        <li>
          <div class="left">
            <span class="iconfont">&#xe61a;</span>
            <span class="tips">过户</span>
          </div>
          <i class="fa fa-angle-right"></i>
        </li>
      </ul>
      <ul class="no-open">
        <li @click="hint">
          <div class="left">
            <span class="iconfont">&#xeae1;</span>
            <span class="tips">人脸开门</span>
          </div>
          <span>未开通</span>
        </li>
        <li @click="hint">
          <div class="left">
            <span class="iconfont">&#xe617;</span>
            <span class="tips">新房交付</span>
          </div>
          <span>未开通</span>
        </li>
        <li @click="hint">
          <div class="left">
            <span class="iconfont">&#xe621;</span>
            <span class="tips">送水</span>
          </div>
          <span>未开通</span>
        </li>
        <li @click="hint">
          <div class="left">
            <span class="iconfont">&#xe640;</span>
            <span class="tips">卖房</span>
          </div>
          <span>未开通</span>
        </li>
        <li @click="hint">
          <div class="left">
            <span class="iconfont">&#xe689;</span>
            <span class="tips">出租</span>
          </div>
          <span>未开通</span>
        </li>
        <li @click="hint">
          <div class="left">
            <span class="iconfont">&#xe622;</span>
            <span class="tips">装修登记</span>
          </div>
          <span>未开通</span>
        </li>
        <li @click="hint">
          <div class="left">
            <span class="iconfont">&#xe6b1;</span>
            <span class="tips">违停举报</span>
          </div>
          <span>未开通</span>
        </li>
        <li @click="hint">
          <div class="left">
            <span class="iconfont">&#xe65b;</span>
            <span class="tips">房屋保修</span>
          </div>
          <span>未开通</span>
        </li>
      </ul>
      <p>- 没有更多了 -</p>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
export default {
  methods: {
    goback() {
      this.$router.go(-1);
    },
    hint(){
      Toast('本小区暂未开通此服务')
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrap {
  background-color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
}

header {
  width: 100%;
  height: 0.6rem;
  background-color: #fff;
  position: fixed;
  z-index: 1;
  padding: 0.2rem;
  text-align: left;
}

.content {
  padding: 0 0.2rem;
  flex: 1;
  overflow: auto;
}

.fa-chevron-left {
  font-size: 0.2rem;
  position: fixed;
}

h3 {
  text-align: left;
  margin-top: 0.6rem;
}

li {
  display: flex;
  justify-content: space-between;
  // font-size 0.2rem
  height: 0.8rem;
  line-height: 0.8rem;
}

li .tips {
  display: inline-block;
  height: 0.5rem;
  // line-height 0.4rem
}

li .iconfont {
  font-size: 0.26rem;
  margin-right: 0.15rem;
}

li .fa-angle-right {
  margin-top: 0.28rem;
  font-size: 0.24rem;
  color: #a2a2a2;
}

.no-open {
  color: #a1a1a1;
}

p {
  margin: 0.2rem 0;
}
</style>