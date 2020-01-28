<template>
  <div class="member">
    <!-- 标题 -->
    <div class="text">
      <h3>关注权益，点评服务</h3>
      <p>让你做社区的主人</p>
    </div>
    <!-- 图片 -->
    <div class="logo">
      <img src="../../assets/登录注册.png" alt />
    </div>
    <!-- 登录 -->
    <div class="btn1">
      <router-link to="/register">
        <button>注册</button>
      </router-link>
    </div>
    <!-- 注册 -->
    <div class="btn2">
      <router-link to="/login">
        <button>登录</button>
      </router-link>
    </div>
    <!--邀请码 -->
    <div class="invitation">
      <p>扫描邀请码注册</p>

      <!-- 如果没有登录注册 直接跳到选择社区 -->
      <!-- 属于路由拦截 -->
      <router-link to="/home" router-link-active='active'>
        <span>去逛逛</span>
      </router-link>
    </div>
  </div>
</template>



 <script>
export default {};
</script>


 <style soped>
.member {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding-top: 0.3rem;
  /* box-sizing: border-box; */
}

.text h3 {
  text-align: center;
  font-size: 0.25rem;
  color: #555555;
}
.text p {
  text-align: center;
  font-size: 0.2rem;
  color: #555555;
}
/* 图片 */
.logo img {
  width: 3.7rem;
  height: 2.73rem;
}
/* 注册 */
button {
  width: 90%;
  height: 0.5rem;
  line-height: 0.5rem;
  border-radius: 0.25rem!important;
  font-size: 0.16rem!important;
  border: 0;
  letter-spacing: 0.02rem;

}
.btn1 button {
  background-color: #da645d;
  outline: none;
  color: #fff;
}

/* 登录 */

.btn2 button {
  margin-top: 0.2rem;
  border: 1px solid red;
  color: red;
}
.btn2 a {
  margin: 0 auto;
  line-height: 0.5rem;
}
/* 邀请码 */
.invitation {
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.2rem ;
  letter-spacing: 0.02rem;
}

.invitation span{
  color: #8f8f94;
  
}
.invitation span:hover{
  color: #da645d;
}
</style>