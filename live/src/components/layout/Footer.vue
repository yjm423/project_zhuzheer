
<template>
  <nav class="bar bar-tab">
    <router-link to="/home"  active-class='redcolor' class="tab-item external">
      <span class="icon icon-home"></span>
      <span class="tab-label">主页</span>
    </router-link>
    <router-link to="/market" active-class='redcolor' class="tab-item external">
      <span class="icon icon-friends"></span>
      <span class="tab-label">友邻市集</span>
    </router-link>
    <router-link to="/person"  active-class='redcolor' class="tab-item external">
      <span class="icon"><van-icon name="chat-o" /></span>
      <span class="tab-label">管家你好</span>
    </router-link>
    <router-link to="/housekeeper"  active-class='redcolor' class="tab-item external">
      <span class="icon"><van-icon name="newspaper-o" /></span>
      <span class="tab-label">社区</span>
    </router-link>
    <router-link to="/community"  active-class='redcolor' class="tab-item external">
      <span class="icon"><van-icon name="chat-o" /></span>
      
      <span class="tab-label">我</span>
      
    </router-link>
  </nav>
</template>

<style lang="stylus" scoped>
.redcolor {
  color: #f03d37;
}
a {
    color: #f03d37;
}
</style>
