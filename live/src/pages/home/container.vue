<template>
  <div class="containWrap">
    
    <div class="topWrap">
      <!-- 顶部轮播 -->
      <div class="top">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img
              src="https://z1.muscache.cn/pictures/hongbao/marquee/original/aca01536-8332-4b18-93ff-24ba1c8bede7.jpg"
              alt
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="https://z1.muscache.cn/pictures/hongbao/marquee/original/00c8f282-2798-445e-aa19-fe7a0fea09e3.jpg"
              alt
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              src="https://z1.muscache.cn/pictures/hongbao/marquee/original/cc0e1701-91e9-4c86-a114-a619ba9d69f3.jpg"
              alt
            />
          </van-swipe-item>
        </van-swipe>
        <Slide></Slide>
        <div class="notice">
          <p class="notice-title">物业公告</p>
          <div class="info">
            <p>查看往期公告 ~</p>
            <i class="fa fa-chevron-right"></i>
          </div>
        </div>
      </div>
      <!-- 社区活动 -->
      <div class="activity wrap">
        <div class="title">
          <h3>社区活动</h3>
          <span>好吃好玩的都在这</span>
        </div>
        <div class="active-list">
          <van-swipe indicator-color="white">
            <van-swipe-item>
              <div class="item">
                <img src="../../assets/img/activity-1.png" alt="">
                <div class="activity-info">
                  <div class="time">
                    <i>21</i>
                    <span>十二月</span>
                  </div>
                  <div class="activity-addr">
                    <span class="activity-title">这个冬天去哪儿？来业主滑雪大赛赏美景，拿大奖！</span>
                    <p>地址：万科松花湖度假区</p>
                    <p class="deadline">报名截止：2019年12月19日</p>
                  </div>
                </div>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="item"></div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="item"></div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="item"></div>
            </van-swipe-item>
          </van-swipe>
        </div>
        <p class="seemore">查看更多活动 ></p>
      </div>

      <!-- 明星员工 -->
      <div class="star wrap">
        <div class="title">
          <h3>明星员工</h3>
          <span>请给出你的“表扬”或“批评“</span>
        </div>
        <div class="staff">
          <li>
            <img src="../../assets/img/No.1.png" alt />
            <h5>名字</h5>
            <p>职位</p>
          </li>
          <li>
            <img src="../../assets/img/No.2.png" alt />
            <h5>名字</h5>
            <p>职位</p>
          </li>
          <li>
            <img src="../../assets/img/No.3.png" alt />
            <h5>名字</h5>
            <p>职位</p>
          </li>
        </div>
        <p class="seemore">查看服务团队</p>
      </div>
      <div class="garbage">
        <img src="../../assets/img/garbage.png" alt />
      </div>
      <!-- 阳光物业 -->
      <div class="management wrap">
        <div class="title">
          <h3>阳光物业</h3>
          <span>每周物业服务一目了然</span>
        </div>
        <div class="manage">
          <van-swipe indicator-color="white">
            <van-swipe-item class="plan">
              <div class="manage-list">
                <h4>友邻计划</h4>
                <p>筹集金额/元</p>
                <span>3,512.83</span>
                <div class="detail">查看详情</div>
              </div>
            </van-swipe-item>

            <van-swipe-item class="quality">
              <div class="manage-list">
                <h4>品质服务</h4>
                <p>服务满意度/分</p>
                <span>4.9</span>
                <div class="detail">查看详情</div>
              </div>
            </van-swipe-item>
            <van-swipe-item class="repair">
              <div class="manage-list">
                <h4>设备维保</h4>
                <p>完成维保/台</p>
                <span>2843</span>
                <div class="detail">查看详情</div>
              </div>
            </van-swipe-item>
            <van-swipe-item class="ad">
              <div class="manage-list">
                <h4>广告收入</h4>
                <p>月度收入/元</p>
                <span>-</span>
                <div class="noOpen">未开通</div>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <!-- 资产服务计划 -->
      <div class="assets-plan wrap">
        <div class="title">
          <h3>业主资产管理服务计划</h3>
          <span>优质、便捷、安全、放心的一站式服务体验</span>
        </div>
        <div class="assets">
          <img src="../../assets/img/assets.png" alt />
        </div>
      </div>
      <div class="logo">
        <img src="../../assets/img/logo.png" alt="">
        <p>为社区公益而生</p>
      </div>
    </div>
  </div>
</template>

<script>
import Slide from "./Slide";
export default {
  components: {
    Slide
  }
};
</script>

<style lang="stylus" scoped>
.containWrap {
  height: 100%;
  width: 100%;
}

.topWrap {
  padding: 0.1rem 0.1rem 0.1rem;
  // display flex
  // flex-direction column
 
  height: 6rem;
  width: 100%;
  background-color: #fff;
  position: relative;
  overflow: auto;
}

.top {
  border-radius: 0.1rem;
  border: 0.01rem solid #ccc;
}

img {
  width: 100%;
}

p {
  margin: 0;
}

.notice {
  height: 0.7rem;
  width: 100%;
  margin-top: 0.1rem;
  padding: 0 0.15rem;
  display: flex;
}

.info {
  display: flex;
  flex: 1;
  height: 0.5rem;
  line-height: 0.5rem;
}

.info p {
  flex: 1;
}

.info i {
  font-size: 0.12rem;
  padding-top: 0.2rem;
}

.notice-title {
  width: 0.5rem;
  height: 0.5rem;
  font-size: 0.16rem;
  padding: 0.04rem 0.15rem 0 0;
  border-right: 1px solid #ccc;
}

.wrap {
  margin-top: 0.2rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 0.1rem;
  transform: translateZ(0);
}

.activity {
}

.activity .active-list {
  height: 3rem;
  padding: 0.1rem;
}

.title {
  height: 0.6rem;
  line-height: 0.6rem;
  display: flex;
  margin: 0 0.15rem;
}

.title h3 {
  font-size: 0.24rem;
  line-height: 0.5rem;
  margin-right: 0.2rem;
}

.seemore {
  text-align: left;
  padding: 0.1rem 0.2rem;
  color: red;
}

.van-swipe__track {
  width: 2rem;
  overflow: hidden;
  border: 1px solid #ccc;
}

.activity .van-swipe {
  width: 100%;
  height: 100%;
}
.activity .activity-info{
  display flex
}
.activity-info .time{
  width 1.5rem
}
.time i {
  display block
  font-size 0.3rem
  font-weight 700
  margin 0.1rem 0
}
.activity .activity-addr {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
}
.activity-addr p{
  margin 0.05rem 0
  text-align left 
}
.activity-addr .deadline{
  font-size 0.14rem
}
.activity-addr .activity-title{
  font-size 0.18rem
  font-weight 700
}
.activity .item {
  width: 2.5rem;
  height: 100%;
  // background-color: red;
  border: 1px solid #ccc;
  margin-right: 0.2rem;
}

.star .title {
  border-bottom: 1px solid #ccc;
}

.star .staff {
  display: flex;
  justify-content: space-around;
  padding: 0.2rem;
}

.staff img {
  height: 0.5rem;
  width: 0.5rem;
}

.star .seemore {
  margin: 0 0.15rem;
  border-top: 1px solid #ccc;
}

.garbage {
  margin-top: 0.2rem;
}

.manage {
  height: 1.6rem;
  padding: 0 0.15rem;
  margin-bottom: 0.2rem;
}

.manage .van-swipe {
  height: 100%;
}

.manage .van-swipe-item {
  width: 1.2rem !important;
  margin-right: 0.1rem;
  border: 1px solid #ccc;
  border-radius: 0.1rem;
}

.manage .van-swipe__track {
  height: 100%;
}

.manage h4 {
  margin: 0.1rem 0 0.1rem;
}

.manage-list .detail {
  font-size: 0.12rem;
  width: 0.8rem;
  height: 0.26rem;
  margin: 0 auto;
  line-height: 0.26rem;
  // padding 0.05rem 0.1rem
  background-color: #fff;
  border-radius: 0.1rem;
  color: #212121;
}

.manage-list span {
  display: block;
  margin: 0.2rem 0;
  color: #ffffff;
  font-size: 0.18rem;
  font-weight: 700;
}

.manage .plan {
  background-color: #e6a09d;
  color: #a1706e;
}

.plan p {
  color: #a1706e;
}

.quality {
  background-color: #f5d093;
}

.quality p, h4 {
  color: #a1706e;
}

.repair {
  background-color: #9faed2;
}

.repair p, h4 {
  color: #5e6980;
}

.ad {
  background-color: #b2abc9;
}

.ad p, h4 {
  color: #6b6779;
}

.assets-plan h3 {
  width: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.assets-plan span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.assets img {
  border-radius: 0.1rem;
  display: block;
}
.logo{
  margin-top 0.3rem
}
.logo img{
  width 1rem
  height 0.3rem
}
.logo p{
  margin-top 0.1rem
  letter-spacing 0.05rem
}
</style>