<template>
  <div class="fair">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) of images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="tab">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/market/fair/drinking">
            <img src="../../../assets/img/-1.jpg" alt />

            <div class="mui-media-body">喝水</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/market/fair/fresh">
            <img src="../../../assets/img/未标题2.jpg" alt />
            <div class="mui-media-body">粮油生鲜</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/market/fair/houseking">
            <img src="../../../assets/img/3.jpg" alt />
            <div class="mui-media-body">家政</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/market/fair/travel">
            <img src="../../../assets/img/4.jpg" alt />
            <div class="mui-media-body">旅游</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/market/fair/educative">
            <img src="../../../assets/img/5.jpg" alt />
            <div class="mui-media-body">教育</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/market/fair/pet">
            <img src="../../../assets/img/6.jpg" alt />
            <div class="mui-media-body">宠物生活</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/market/fair/house">
            <img src="../../../assets/img/7.jpg" alt />
            <div class="mui-media-body">新家居</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/market/fair/mom">
            <img src="../../../assets/img/8.jpg" alt />
            <div class="mui-media-body">母婴管</div>
          </router-link>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/market/fair/all">
            <img src="../../../assets/img/9.jpg" alt />
            <div class="mui-media-body">全部</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"></li>
      </ul>
    </div>
    <div class="titl">
      <h2>推荐商品</h2>
    </div>
    <div class="shopping">
      <div v-for="item of Img" :key="item.id" class="shopping_1">
        <img :src="item.imgs" alt />
        <span>{{item.h}}</span>
      </div>
    </div>
    <div class="titl-1">
      <h2>社区拼团</h2>
    </div>
    <div class="shopping_2">
      <div v-for="item2 of Img2" :key="item2.id" class="shopping_3">
        <img :src="item2.imgs" alt />
        <div class="kong"></div>
        <div class="time">
          <ul>
            <li>
              剩余<br>
              时间
            </li>
            <li>
              <van-count-down :time="time" format="DD" />天
            </li>
            <li>
              <van-count-down :time="time" format="HH" />时
            </li>
            <li>
              <van-count-down :time="time">
                <template v-slot="timeData">
                  <span class="item">
                    {{ timeData.minutes }}
                    <br /><span class="fen">分</span>
                  </span>
                </template>
              </van-count-down>
            </li>
          </ul>
        </div>
        <div class="money"><span>￥39</span></div>
        <p>{{item2.h}}</p>
        <div class="group">2份成团.已参团{{item2.num}}份</div>
        <van-button type="default">参团</van-button>
      </div>
    </div>
    <div class="titl-1 titl-1-1">
      <h2>母婴精选</h2>
       <span>&nbsp;.&nbsp;给宝宝暖心好物</span>
       <p class="titl-11">看更多 <van-icon name="arrow" /></p>
    </div>

    <div class="shopping">
      <div v-for="item of Img" :key="item.id" class="shopping_1">
        <img :src="item.imgs" alt />
        <span>{{item.h}}</span>
      </div>
    </div>
    <div class="titl-1 titl-1-1">
      <h2>健康服务</h2>
       <span>&nbsp;.&nbsp;呵护全家安康</span>
       <p class="titl-11">看更多 <van-icon name="arrow" /></p>
    </div>

    <div class="shopping">
      <div v-for="item of Img" :key="item.id" class="shopping_1">
        <img :src="item.imgs" alt />
        <span>{{item.h}}</span>
      </div>
    </div>
    <div class="titl-1 titl-1-1">
      <h2>宠物生活</h2>
       <span>&nbsp;.&nbsp;健康养宠生活</span>
       <p class="titl-11">看更多 <van-icon name="arrow" /></p>
    </div>

    <div class="shopping">
      <div v-for="item of Img" :key="item.id" class="shopping_1">
        <img :src="item.imgs" alt />
        <span>{{item.h}}</span>
      </div>
    </div>
    <div class="titl-1 titl-1-1">
      <h2>旅游教育</h2>
       <span>.在旅行中探索美好</span>
       <p class="titl-11">看更多 <van-icon name="arrow" /></p>
    </div>

    <div class="shopping">
      <div v-for="item of Img" :key="item.id" class="shopping_1">
        <img :src="item.imgs" alt />
        <span>{{item.h}}</span>
      </div>
    </div>
    <div class="titl-1 titl-1-1">
      <h2>智能家居</h2>
       <span>&nbsp;.&nbsp;轻松享受新生活</span>
       <p class="titl-11">看更多 <van-icon name="arrow" /></p>
    </div>

    <div class="shopping">
      <div v-for="item of Img" :key="item.id" class="shopping_1">
        <img :src="item.imgs" alt />
        <span>{{item.h}}</span>
      </div>
    </div>
    <div class="titl-1 titl-1-1">
      <h2>食品</h2>
       <span>&nbsp;.&nbsp;米面粮油休闲零食</span>
       <p class="titl-11">看更多 <van-icon name="arrow" /></p>
    </div>

    <div class="shopping">
      <div v-for="item of Img" :key="item.id" class="shopping_1">
        <img :src="item.imgs" alt />
        <span>{{item.h}}</span>
      </div>
    </div>
    <div class="images">
      <img src="../../../assets/img/101.jpg" alt="">
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      Img: [
        {
          id: 1,
          imgs: "https://img.yzcdn.cn/vant/apple-1.jpg",
          h: "松花江全索长花飘"
        },
        {
          id: 2,
          imgs: "https://img.yzcdn.cn/vant/apple-2.jpg",
          h: "王红内以杀菌器"
        },
        {
          id: 3,
          imgs: "https://img.yzcdn.cn/vant/apple-1.jpg",
          h: "松花江全索长花飘"
        },
        {
          id: 4,
          imgs: "https://img.yzcdn.cn/vant/apple-2.jpg",
          h: "王红内以杀菌器"
        },
        {
          id: 5,
          imgs: "https://img.yzcdn.cn/vant/apple-1.jpg",
          h: "松花江全索长花飘"
        }
      ],
      Img2: [
        {
          id: 1,
          imgs: "https://img.yzcdn.cn/vant/apple-1.jpg",
          h: "可可爱爱猫条5折团",
          num: 2
        },
        {
          id: 2,
          imgs: "https://img.yzcdn.cn/vant/apple-2.jpg",
          h: "王红内以杀菌器",
          num: 2
        },
        {
          id: 3,
          imgs: "https://img.yzcdn.cn/vant/apple-1.jpg",
          h: "松花江全索长花飘",
          num: 2
        }
      ],
      time: 30 * 60 * 60 * 1000
    };
  }
};
</script>
<style scoped>
.fair .van-swipe {
  height: 1.79rem;
  width: 100%;
  margin-bottom: 0.2rem;
}
.van-swipe-item img {
  height: 100%;
}
.iconfont {
  position: absolute;
  top: 0.05rem;
  left: 0.42rem;
  font-size: 0.2rem;
}
.van-grid-item__text {
  font-size: 0.14rem;
}
.mui-col-xs-4 {
  width: 19%;
}
.mui-table-view.mui-grid-view .mui-table-view-cell {
  font-size: 0.12rem;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-size: 0.07rem;
}
.mui-grid-view.mui-grid-9 {
  background: transparent;
  border: 0;
  margin-top: 0.1rem;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  /* font-size: .15rem; */

  display: block;
  width: 100%;

  margin-top: 0.08rem;
  text-overflow: ellipsis;
  color: #333;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell img {
  width: 0.45rem;
  height: 0.45rem;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  padding: 0;
}
.fair {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #fff;
}

.shopping,
.shopping_2 {
  width: 100%;
  overflow: scroll;
  white-space: nowrap;
  margin-left: 0.15rem;
  background: #fff;
  margin-bottom: 0.15rem;
}

.shopping .shopping_1 {
  width: 1.12rem;
  /* overflow: scroll;
    white-space: nowrap;  */
  display: inline-block;
  margin-right: 0.12rem;
  height: 1.08rem;
}
.shopping .shopping_1 span {
  display: block;
  width: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0.03rem;
  color: rgb(158, 157, 157);
  font-size: 0.13rem;
}
.shopping .shopping_1 img {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 0.1rem;
}
.titl h2 {
  text-align: left;
  margin-left: 0.15rem;
  font-size: 0.2rem;
}
.titl {
  margin: 0.4rem 0 0.15rem 0;
}
::-webkit-scrollbar {
  width: 0px;
}
.titl-1 {
  margin: 0 0 0.15rem 0;
}
.titl-1 h2 {
  text-align: left;
  margin-left: 0.15rem;
  font-size: 0.2rem;
  
}
.shopping_2 .shopping_3 {
  /* width: 1.12rem; */
  display: inline-block;
  position: relative;
   height: 1.37rem; 
   /* border: 1px solid #ccc;
  border-radius: 0.1rem; */
  margin-right: .1rem;
}.shopping_2 .shopping_3 p{
  text-align: left;
  padding-left:.1rem;
  margin-top:.05rem;
  color:black;
  font-size: .14rem;
}
.shopping_2 .shopping_3 .group{
  text-align: left;
  padding-left:.1rem;
  font-size:.12rem;
  color:rgb(167, 164, 164)
}
.shopping_2 .time {
  width: 1.5rem;
  /* height: .4rem */
  position: absolute;
  left: 0;
  bottom: 0.05rem;
}.shopping_2 .money span{
  position: absolute;
  right:.1rem;
  bottom:0;
  margin-bottom:.1rem;
  font-size:.2rem;
  color:rgb(226, 73, 35)
}
.shopping_2 .time ul li {
  display: inline-block;
  background: rgb(58, 57, 57);
  margin-right: 0.05rem;
  width: 0.4rem;
  border-radius: 0.05rem;
  color: #fff;
  font-size:.13rem;
  
}
 .shopping_2 .time ul li .van-count-down{
    color: #fff;
 }
.shopping_2 .time ul li .item {
  color: #fff;
}.shopping_2 .time ul li .fen{
  font-size:.13rem;
}
.shopping_2 .time ul li:nth-child(1) {
  margin-left: 0.1rem;
}
.shopping_2 .shopping_3 .kong {
  background: rgb(58, 57, 57);
  width: 100%;
  height: 0.3rem;
  opacity: 0.5;
  position: absolute;
  left: 0;
  bottom: 0;
}

.shopping_2 .shopping_3 img {
  width: 100%;
  height: 100%;
  /* border: 1px solid #ccc;
  border-radius: 0.1rem;  */
}
.shopping_2 {
  /* border: 1px solid #ccc;
  border-radius: 0.1rem; */
  /* margin-right: 0.12rem; */
  /* margin-bottom: 159px; */
  position: relative;
  /* overflow: scroll;
    white-space: nowrap; */
}
.van-button{
position: absolute;
right:.15rem;
bottom:-.58rem;
border-radius: .2rem;
    padding: 0 .27rem;
    background:rgb(226, 73, 35);
    color:#fff
}
.titl-1-1 h2{
 text-align: left;
  margin-left: -1.58rem;
  font-size: 0.2rem;
  display: inline-block
}
.titl-1-1 span{
  font-size:.14rem;
  color:#ccc;
  /* width:1.05rem; */
  white-space:nowrap;
   overflow:hidden;
   text-overflow:ellipsis;
   /* line-height:.11rem;
   display: inline-block */
}
.titl-11{
  position: absolute;
 right:0;
 text-align: center;
  display: inline-block;
 font-size:.19rem;
 color:rgb(255, 72, 0)
}
.images{
  margin-bottom:1.4rem
}
.images img{
  width:100%;
  height:100%;
 
}
/* .van-grid-item:last-child{
  margin-bottom:50px
} */
/* overflow: scroll;
    white-space: nowrap; */
/* margin-bottom: 129px; */
</style>