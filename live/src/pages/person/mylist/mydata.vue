<template>
  <div id="mydata">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="goback"></i>
      <h4>个人资料</h4>
      <span></span>
    </header>
    <div class="avatar">
      <div class="left">
        <h3>yjm</h3>
        <div>
          <van-tag round>游客</van-tag>
          <span>某某小区</span>
        </div>
      </div>
      <img src="../../../assets/img/user-avatar.png" alt />
    </div>
    <ul>
      <li>
        <h4>实名认证</h4>
        <div>
          <span>未认证</span>
          <i class="fa fa-angle-right"></i>
        </div>
      </li>
      <li>
        <h4>昵称</h4>
        <div>
          <span></span>
          <i class="fa fa-angle-right"></i>
        </div>
      </li>
      <li>
        <h4>性别</h4>
        <div>
          <span>男</span>
          <i class="fa fa-angle-right"></i>
        </div>
      </li>
      <li>
        <h4>邮箱</h4>
        <div>
          <span>暂未填写</span>
          <i class="fa fa-angle-right"></i>
        </div>
      </li>
      <li>
        <h4>手机</h4>
        <div>
          <span>13354208752</span>
          <i class="fa fa-angle-right"></i>
        </div>
      </li>
      <p></p>
      <li>
        <h4>修改密码</h4>
      </li>
      <li class="quit">
        <h4>退出登录</h4>
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
#mydata {
  background-color: #fff;
  height: 100%;
}

header {
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
}

header h4 {
  font-size: 0.2rem;
}

.avatar {
  display: flex;
  justify-content: space-between;
  text-align: left;
  padding: 0 0.2rem;
}

.avatar h3 {
  margin-bottom: 0.2rem;
}

.left span {
  margin-right: 0.1rem;
}

ul li {
  padding: 0.2rem;
  height: 0.6rem;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li span {
  margin-right: 0.15rem;
}

.fa-angle-right {
  font-size: 0.22rem;
  color: #ccc;
}

ul p {
  background-color: #eee;
  height: 0.1rem;
}
ul h4{
    color #555
}
.quit{
    border-bottom 0
}
.quit h4{
    color #ec7f78
}
</style>