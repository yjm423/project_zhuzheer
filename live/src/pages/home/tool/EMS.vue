<template>
  <div class="wrap">
    <header>11111111</header>
    <div class="con">
      <div class="inner"></div>
      <div class="inner2"></div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
header {
  height: 0.5rem;
  width: 100%;
  background-color: red;
  position: fixed;
  z-index: 1;
}
.wrap{
    height 100%
    display flex
    flex-direction column
}
.con {
  overflow: auto;
  flex 1
}

.inner {
  height: 10rem;
  width: 100%;
  background-color: blue;
}

.inner2 {
  height: 5rem;
  width: 100%;
  background-color: yellow;
}
</style>