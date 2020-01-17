<template>
<div>
  <div class="memder">
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
      <router-link to="/login"> <button>登录</button></router-link>
       
    </div>
    <!-- 注册 -->
    <div class="btn2">
        <router-link to="/register"> <button>注册</button></router-link>
    </div>
    <!--邀请码 -->
    <div class="invitation">
        <p>扫描邀请码注册</p>
        <router-link to="/home">  <span>去逛逛</span></router-link>
    </div>
  </div>
  </div>
</template>



 <script>
export default {};
</script>


 <style soped> 
 .memder{
     width: 100%;
     height: 100%;
     box-sizing: border-box;
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
.logo img{
    width: 3.7rem;
    height: 2.73rem;
}
/* 登录 */
.btn1 {
      display: flex;
     margin-top: -0.9rem;
}
.btn1 button{
    width: 3rem;
    height: 0.5rem;
    background-color: brown;
    border-radius: .2rem;
    outline: none;
    border: 0;
    color:#fff;
}
.btn1  a{
  margin: 0 auto;
}
/* 注册 */
.btn2{
   display: flex;
}
.btn2 button{
    width: 3rem;
    height: 0.5rem;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 0.1rem;
    border-radius: .2rem;
    border: 1px solid red;   
    outline: none;  
    color: red;
    line-height: 0.5rem;
}
.btn2  a{
  margin: 0 auto;
  line-height: 0.5rem;
}
/* 邀请码 */
.invitation{
    display: flex;
    justify-content:space-between;
    padding: 0 0.42rem;
}
.invitation p{
    font-size: 0.24rem;  
}
.invitation span{
    font-size: 0.24rem;
    padding-top: 0.25rem;
}
</style>