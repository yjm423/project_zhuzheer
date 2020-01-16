<template>
  <div id="app">
      <div >
    <van-search placeholder="请输入搜索关键词" />
    <div class="ico">
    <van-icon name="close" />
    </div>
    </div>
  </div>
</template>

<style scoped>
 .ico {
  position: relative;
  top: .2rem;
 right: .2rem;
 display:inline-block;
  cursor: pointer; 
}
.van-icon-close{
    width:.16rem;
    height:.24rem
} 
 
</style>