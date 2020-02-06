<template>
  <div id="person">
    <header>
      <router-link to="/person/mydata">
        <img src="../../assets/img/user-avatar.png" alt class="avatar" />
        <span>杭州魅力之城</span>
      </router-link>
      <router-link to="/person/crown" tag="span">
        <img src="../../assets/img/crown.png" alt class="crown" />
      </router-link>
    </header>
    <div class="money">
      <span>
        <h3>0.00</h3>
        <p>账户余额</p>
      </span>
      <button>进入账户</button>
    </div>
    <nav>
      <ul>
        <li class="house">
            <h4>我的房屋</h4>
            <p>服务中心</p>
            <span>></span>
        </li>
        <router-link to='/housebill' tag='li' class="bill">
             <h4>房屋账单</h4>
            <p>暂无待缴</p>
            <span>></span>
        </router-link>
        <li class="coupon">
             <h4>优惠券</h4>
            <p>暂无优惠券</p>
            <span>></span>
        </li>
        <router-link to="/mycar" tag="li" class="mycar">
             <h4>我的车</h4>
            <p>未添加</p>
            <span>></span>
        </router-link>
      </ul>
    </nav>
    <div class="my">
        <ul>
            <li>
                <span>预缴物业费赢大奖</span>
                <i class="fa fa-angle-right"></i>
            </li>
            <li>
                <span>我的订单</span>
                <i class="fa fa-angle-right"></i>
            </li>
            <li>
                <router-link to="/person/mycart" tag="span">我的一卡通</router-link>
                <i class="fa fa-angle-right"></i>
            </li>
            <li>
                <router-link to="/person/mygoods" tag="span">我的友两手</router-link>
                <i class="fa fa-angle-right"></i>
            </li>
            <li>
                <router-link to="person/mymsg" tag="span">我的帖子</router-link>
                <i class="fa fa-angle-right"></i>
            </li>
            <li>
                <router-link to="/person/myactive" tag="span">我的活动</router-link>
                <i class="fa fa-angle-right"></i>
            </li>
            <li>
                <router-link to="/person/mysuggest" tag="span">功能异常与产品建议</router-link>
                <i class="fa fa-angle-right"></i>
            </li>
            <li>
                <router-link to="/person/settings" tag="span">通知设置</router-link>
                <i class="fa fa-angle-right"></i>
            </li>
            <li>
                <router-link to="/person/aboutUs" tag="span">关于我们</router-link>
                <i class="fa fa-angle-right"></i>
            </li>

        </ul>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
#person {
  background-color: #fff;
  height: 100%;
  overflow auto
  padding-bottom 0.4rem
}
::-webkit-scrollbar {
  width: 0px;
}
header {
  padding: 0.3rem 0.2rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.18rem;
}
header span{
  color #333
}
header .crown {
  width: 0.8rem;
  height: 0.5rem;
  margin-top: 0.2rem;
}

header .avatar {
  margin-right: 0.2rem;
}

.money {
  display: flex;
  justify-content: space-between;
  padding: 0.1rem 0.2rem;
}

.money button {
  width: 1rem;
  height: 0.4rem;
  margin-top: 0.1rem;
}

.money h3 {
  font-size: 0.3rem;
}

nav {
  margin-left: 0.2rem;
  width 100%
  overflow-x: auto;
}
nav ul{
  width: 4.2rem;
}
nav li {
  padding 0.1rem
  float: left;
  color #fff
  margin-right: 0.1rem;
  height: 1.2rem;
  width: 0.9rem;
  background-color: #ccc;
  border-radius: 0.1rem;
  text-align left

}
nav li h4{
    font-size 0.14rem
    font-weight 400
    letter-spacing 0.01rem
}
nav li p{
    color #fff
    font-size 0.12rem
    letter-spacing 0.01rem
}
.house{
    background-color #f09ea0
}
.bill{
    background-color #f3b39a
}
.coupon{
    background-color #f8cf8d
}
.mycar{
    background-color #a1aed8
}
nav li span{
    display block
    height 0.2rem
    width 0.2rem
    border-radius 50%
    background-color #fff
    color #f09ea0
    text-align center
    margin-top 0.3rem
}
.my{
    padding 0.2rem
}
.my li{
    display flex
    justify-content space-between
    border-bottom 0
    padding 0.1rem 0
}
.fa-angle-right{
    font-size 0.25rem
}
</style>