<template>
  <div id="settings">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="goback"></i>
      <h3>通知设置</h3>
    </header>
    <h5>社区消息设置</h5>
    <ul>
      <li>
        <div>
        <h4>系统推荐消息</h4>
        <p>打开后可收到新邻居加入和邻居推荐类消息</p>
        </div>
          <van-switch v-model="checked1" active-color="#ec7f78"/>
      </li>
      <li>
        <div>
        <h4>活动消息</h4>
        <p>打开后可收到社区活动相关消息</p>
        </div>
          <van-switch v-model="checked2" active-color="#ec7f78"/>
      </li>
      <li>
        <div>
        <h4>友两手消息</h4>
        <p>打开后可收到友两手留言消息</p>
        </div>
          <van-switch v-model="checked3" active-color="#ec7f78"/>
      </li>
      <li>
        <div>
        <h4>帖子相关消息</h4>
        <p>打开后可收到帖子评论、回复、点赞类消息</p>
        </div>
          <van-switch v-model="checked4" active-color="#ec7f78"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
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
#settings {
  text-align: left;
}

header {
  text-align: left;
  padding: 0.1rem 0.2rem;
  background-color: #fff;
}

header h3 {
  font-size: 0.26rem;
  padding: 0.15rem 0;
}

h5 {
  letter-spacing: 0.02rem;
  height: 0.5rem;
  line-height: 0.6rem;
  padding-left: 0.2rem;
}
ul{
    padding 0 0.15rem
    background-color #fff
}
ul li{
    display flex
    justify-content space-between
    height 0.8rem
    align-items: center;
    margin 0
    letter-spacing 0.01rem
}
.van-switch{
    width 0.5rem
}
.van-switch--on .van-switch__node {
    -webkit-transform: translateX(1em);
    transform: translateX(0.65em);
}

</style>