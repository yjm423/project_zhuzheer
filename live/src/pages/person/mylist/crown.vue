<template>
  <div id="crown">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="goback"></i>
      <h2>
        <span>0</span>分
        <p>还差50分可开启神秘宝箱</p>
      </h2>
      <van-steps :active="active" active-icon="success" active-color="#ec7f78">
        <van-step>START</van-step>
        <van-step>神秘宝箱</van-step>
        <van-step>银色皇冠</van-step>
      </van-steps>
    </header>
    <ul>
      <li>
        <div>
          <h3>提升分值</h3>
          <span>畅想更多福利</span>
        </div>
      </li>
      <li>
        <div class="left">
          <i class="fa fa-calendar-check-o icon" aria-hidden="true"></i>
          <span>
            <h4>连续登录3天</h4>
            <p>+20分值</p>
          </span>
        </div>
        <button>去完成</button>
      </li>
      <li>
        <div class="left">
          <i class="fa fa-user-o icon" aria-hidden="true"></i>
          <span>
            <h4>注册成功</h4>
            <p>+10分值</p>
          </span>
        </div>
        <button>去完成</button>
      </li>
      <li>
        <div class="left">
          <i class="fa fa-home icon" aria-hidden="true"></i>
          <span>
            <h4>添加房屋成为小区住户</h4>
            <p>+20分值</p>
          </span>
        </div>
        <button>去完成</button>
      </li>
      <li>
        <div class="left">
          <i class="fa fa-camera icon" aria-hidden="true"></i>
          <span>
            <h4>上传个人头像</h4>
            <p>+10分值</p>
          </span>
        </div>
        <button>去完成</button>
      </li>
      <li>
        <div class="left">
          <i class="fa fa-id-card-o icon" aria-hidden="true"></i>
          <span>
            <h4>去社区新人报道</h4>
            <p>+10分值</p>
          </span>
        </div>
        <button>去完成</button>
      </li>
      <li>
        <div class="left">
          <i class="fa fa-handshake-o icon" aria-hidden="true"></i>
          <span>
            <h4>跟邻居打个招呼</h4>
            <p>+10分值</p>
          </span>
        </div>
        <button>去完成</button>
      </li>
      <li>
        <div class="left">
          <i class="fa fa-commenting-o icon" aria-hidden="true"></i>
          <span>
            <h4>给管家发条消息</h4>
            <p>+10分值</p>
          </span>
        </div>
        <button>去完成</button>
      </li>
      <li>
        <div class="left">
          <i class="fa fa-smile-o icon" aria-hidden="true"></i>
          <span>
            <h4>评价管家的服务</h4>
            <p>+10分值</p>
          </span>
        </div>
        <button>去完成</button>
      </li>
      <li>
        <div class="left">
          <i class="fa fa-free-code-camp icon" aria-hidden="true"></i>
          <span>
            <h4>了解友邻计划</h4>
            <p>+10分值</p>
          </span>
        </div>
        <button>去完成</button>
      </li>
      <li>
        <div class="left">
          <i class="fa fa-car icon" aria-hidden="true"></i>
          <span>
            <h4>添加你的车辆</h4>
            <p>+20分值</p>
          </span>
        </div>
        <button>去完成</button>
      </li>
      <li>
        <div class="left">
          <i class="fa fa-slideshare icon" aria-hidden="true"></i>
          <span>
            <h4>去社区秀出你的宠物</h4>
            <p>+10分值</p>
          </span>
        </div>
        <button>去完成</button>
      </li>
      <li>
        <div class="left">
          <i class="fa fa-handshake-o icon" aria-hidden="true"></i>
          <span>
            <h4>3个邻居向你打招呼 0/3</h4>
            <p>+10分值</p>
          </span>
        </div>
        <button>去完成</button>
      </li>
      <li>
        <div class="left">
          <i class="fa fa-heart-o icon" aria-hidden="true"></i>
          <span>
            <h4>话题收到3个点赞</h4>
            <p>+10分值</p>
          </span>
        </div>
        <button>去完成</button>
      </li>
    
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
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
#crown {
  height: 100%;
  overflow: auto;
}

header {
  background-color: #fff;
  padding: 0.2rem;
  text-align: left;
}

header p {
  margin-top: 0.1rem;
  letter-spacing: 0.01rem;
  font-size: 0.12rem;
  font-weight: 400;
}

ul {
  margin-top: 0.1rem;
  padding: 0 0.2rem;
  background-color: #fff;
  padding-bottom 0.5rem
}

ul li {
  display: flex;
  justify-content: space-between;
  height: 0.8rem;
  align-items: center;
  margin: 0;
  text-align: left;
}

li button {
  width: 0.8rem;
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.14rem !important;
  padding: 0;
  color: #ec7f78;
  border-color: #ec7f78;
}

li .left {
  display: flex;
  align-items: center;
}

li .icon {
  font-size: 0.22rem;
  margin-right: 0.2rem;
}

li .left h4 {
  font-weight: 500;
  color: #333;
  font-size: 0.16rem;
  letter-spacing: 0.01rem;
}

li .left p {
  margin: 0;
}
</style>