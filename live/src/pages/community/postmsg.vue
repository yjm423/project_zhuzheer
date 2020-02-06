<template>
  <div class="wrap">
    <header>
      <span @click="goback">取消</span>
      <h4>新帖子</h4>
      <span class="send">发布</span>
    </header>
    <div class="saywords">
      <textarea placeholder="说点什么..." cols="30" rows="5"></textarea>
      <van-uploader v-model="fileList" multiple />
    </div>
    <h4 class="theme">主题</h4>
    <div class="theme-list">
      <van-tag plain round>#疫情防控</van-tag>
      <van-tag plain round>#新春快乐</van-tag>
      <van-tag plain round>#宠物</van-tag>
      <van-tag plain round>#旅拍</van-tag>
      <van-tag plain round>#童话点评</van-tag>
      <van-tag plain round>#个人影展</van-tag>
      <van-tag plain round>#友邻计划</van-tag>
      <van-tag plain round>#感谢信</van-tag>
      <van-tag plain round>#红黑榜</van-tag>
      <van-tag plain round>#新人报道</van-tag>
      <van-tag plain round>#租售</van-tag>
      <van-tag plain round>#邻里互助</van-tag>
      <van-tag plain round>#车位</van-tag>
    </div>
    <div class="authority">
      <span>仅本小区可见</span>
      <van-switch v-model="checked" size="20px"/>
    </div>
    <h5>开启后，仅本小区用户能够看到你的帖子</h5>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      fileList: []
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
.wrap {
  height: 100%;
}

header {
  display: flex;
  height: 0.7rem;
  justify-content: space-between;
  background-color: #fff;
  font-size: 0.18rem;
  padding: 0.3rem 0.2rem;
  margin-bottom: 0.1rem;
}

header h4 {
  font-size: 0.2rem;
  margin-left: 0.3rem;
  line-height: 0.1rem;
}

header i {
  font-size: 0.22rem;
}

.send {
  color: #ccc;
  flex: 1;
  text-align: right;
}

h3 {
  text-align: left;
  margin: 0.3rem 0;
}

textarea {
  border: 0;
  padding: 0.05rem;
}

.saywords {
  text-align: left;
  padding: 0.15rem;
  background-color: #fff;
}

.van-uploader {
  border: 1px solid #ccc;
}

.theme {
  height: 0.3rem;
  text-align: left;
  line-height: 0.3rem;
  margin-left: 0.2rem;
}

.theme-list {
  padding: 0.15rem;
  background-color: #fff;
  text-align: left;
}

.van-tag {
  font-size: 0.14rem;
  padding: 0.04rem 0.12rem;
  margin: 0.05rem;
}
.van-switch{
    margin-top 0.15rem
}
.authority{
    height 0.5rem
    background-color #fff
    margin-top 0.1rem
    display flex
    justify-content space-between
    padding 0 0.2rem
    line-height 0.5rem
}
h5{
    text-align left 
    padding 0.1rem 0.2rem
}
</style>