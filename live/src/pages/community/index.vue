<template>
  <div id="community">
    <header>
      <div class="news">
        <img src="../../assets/img/community-news.png" alt />
        <span>社区消息</span>
      </div>
      <div class="neighbor">
        <img src="../../assets/img/neighbor.png" alt />
        <div>
          <h5>认识邻居</h5>
          <p>去跟左右邻居打个招呼吧</p>
        </div>
      </div>
    </header>

    <div class="container">
      <nav>
        <ul class="all">
          <li>全部</li>
          <li>帖子</li>
          <li>友两手</li>
          <li>活动</li>
          <li>帮忙</li>
        </ul>
        <ul>
          <li>本小区</li>
          <li>附近</li>
        </ul>
      </nav>
      <!-- 参与主题 -->
      <div class="active">
        <div class="title">
          <h3>#艺术大赛</h3>
          <span>参与主题</span>
        </div>
        <ul>
          <li>求你们做个人吧，看看现在几点了，还在浪~</li>
          <li>新的一年想旅游</li>
          <li>女儿的第一幅贴画</li>
        </ul>
        <p>主题详情 ></p>
      </div>

      <!-- 社区言论 -->
      <div class="comment">
        <div class="comment-list">
          <div class="avatar">
            <!-- 头像 -->
            <img src="../../assets/img/user-avatar.png" alt class="avatarPic"/>
            <div>
              <!-- 用户名 -->
              <h5>yjm</h5>
              <!-- 居住小区 -->
              <p>杭州魅力之城</p>
            </div>
          </div>
          <h4>6幢单元门门禁坏了</h4>
          <ul class="pic">
            <li>
              <img src="../../assets/img/pic.jpg" alt />
            </li>
            <li>
              <img src="../../assets/img/pic.jpg" alt />
            </li>
            <li>
              <img src="../../assets/img/pic.jpg" alt />
            </li>
            <li>
              <img src="../../assets/img/pic.jpg" alt />
            </li>
          </ul>
          <div class="time">
            <div>
              <span>01月07日</span>
              <span>01:08</span>
            </div>
            <div class="like">
              <span>
                <i class="fa fa-heart-o"></i>点赞
              </span>
              <span>
                <i class="fa fa-comment-o" aria-hidden="true"></i>1
              </span>
            </div>
          </div>
          <!-- 评论区 -->
          <div class="comment-area">
              <div class="display-info">
                  <span>评论人：</span>
                  <p>好的业主，安排维修</p>
              </div>
              <div class="info-input">
                   <img src="../../assets/img/user-avatar.png" alt class="avatarPic" />
                    <input type="text" placeholder="评论">
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
#community {
  height: 100%;
  overflow: auto;
  padding-bottom 0.6rem
}

header {
  padding: 0.2rem;
  background-color: #fff;
  height: 1.3rem;
  width: 100%;
  display: flex;
}

header .news {
  width: 0.65rem;
  height: 100%;
  font-size: 0.14rem;
}

.news img {
  width: 0.65rem;
  height: 0.65rem;
  margin-top: 0.1rem;
}

.neighbor {
  width: 2.2rem;
  height: 100%;
  border: 1px solid #cccccc;
  margin-left: 0.2rem;
  padding: 0.1rem 0.2rem;
  display: flex;
  justify-items: center;
}

.neighbor img {
  height: 0.65rem;
  width: 1rem;
}

.neighbor h5 {
  color: #000;
  font-weight: 700;
}

.neighbor p {
  font-size: 0.12rem;
  margin: 0;
}

.container {
  margin: 0 0.1rem;
}

nav {
  padding: 0.15rem;
  background-color: #fff;
  margin-top: 0.15rem;
  border-radius: 0.05rem;
}

nav ul {
  display: flex;
  height: 0.4rem;
}

nav ul li {
  margin-right: 0.15rem;
  line-height: 0.3rem;
  border: 0;
}

nav ul li:first-child {
  background-color: #ccc;
  border-radius: 0.1rem;
  padding: 0 0.1rem;
}

.active {
  margin-top: 0.15rem;
  background-color: #fff;
  padding: 0.2rem;
  text-align: left;
   border-radius: 0.05rem;
}

.active .title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.15rem;
}

.active .title span {
  display: block;
  color: #ec7f78;
  border: 1px solid #ec7f78;
  border-radius: 0.15rem;
  line-height: 0.3rem;
  padding: 0 0.1rem;
}

.active li {
  height: 0.3rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.active p {
  margin-bottom: 0;
  color: #ec7f78;
}

.comment-list {
  padding: 0.2rem;
  background-color: #fff;
  margin-top: 0.15rem;
  text-align left 
  border-radius: 0.05rem;
}
.comment-list .avatar{
    display flex
    text-align left 
    height 0.4rem

}
.comment-list .avatar h5{
    color #000
    font-size 0.16rem
    font-weight 700
}
.comment-list .avatar img{
    margin-right 0.1rem
    width 0.4rem

}
.avatarPic{
    width 0.4rem
    height 0.4rem
}
.comment-list h4{
    margin 0.2rem 0
}
.comment-list .pic{
    display flex
    flex-direction row
    flex-wrap wrap
}
.comment-list .pic img{
    width 1rem
    height 1rem

}
.pic li{
    margin-right 0.05rem
    margin-bottom 0.05rem
    border-bottom 0
}
.comment-list .time{
    display flex
    justify-content space-between
    color #b9b9b9
    margin 0.1rem 0
}
.comment-list .like span{
    margin-left 0.2rem
}
.comment-list .like span i{
    margin 0 0.1rem
}
.comment-area .display-info{
    display flex
    font-size 0.16rem
}
.comment-area .display-info p{
    font-size 0.16rem
}
.comment-area .info-input{
    display flex

}
.comment-area .info-input input{
    margin-left 0.2rem
    border-radius 0.2rem
}
</style>