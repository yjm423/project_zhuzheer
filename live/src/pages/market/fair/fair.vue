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
          <router-link to="/drinking">
            <img src="../../../assets/img/-1.jpg" alt />

            <div class="mui-media-body">喝水</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/fresh">
            <img src="../../../assets/img/未标题2.jpg" alt />
            <div class="mui-media-body">粮油生鲜</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/houseking">
            <img src="../../../assets/img/3.jpg" alt />
            <div class="mui-media-body">家政</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/travel">
            <img src="../../../assets/img/4.jpg" alt />
            <div class="mui-media-body">旅游</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/educative">
            <img src="../../../assets/img/5.jpg" alt />
            <div class="mui-media-body">教育</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/pet">
            <img src="../../../assets/img/6.jpg" alt />
            <div class="mui-media-body">宠物生活</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/house">
            <img src="../../../assets/img/7.jpg" alt />
            <div class="mui-media-body">新家居</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/mom">
            <img src="../../../assets/img/8.jpg" alt />
            <div class="mui-media-body">母婴管</div>
          </router-link>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/all">
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
      ]
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
  background:#fff
}

.shopping {
  width: 100;
  overflow: scroll;
  white-space: nowrap;
      margin-left: .15rem;
      background:#fff
}

.shopping .shopping_1 {
  width: 1.12rem;
  /* overflow: scroll;
    white-space: nowrap;  */
  display: inline-block;
  margin-right:.12rem;
  height:1.08rem
}
.shopping .shopping_1 span {
  display: block;
  width: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top:.03rem;
  color:rgb(158, 157, 157);
  font-size:.13rem
}
.shopping .shopping_1 img {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 0.1rem;
}
.titl h2{
  text-align: left;margin-left: .15rem;
  font-size:.2rem;
}.titl{
  margin:.4rem 0 .15rem 0

}
::-webkit-scrollbar {
            width: 0px;
        }
/* .van-grid-item:last-child{
  margin-bottom:50px
} */
/* overflow: scroll;
    white-space: nowrap; */
        /* margin-bottom: 129px; */
</style>