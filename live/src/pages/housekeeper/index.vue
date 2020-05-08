<template>
  <div class="housekeeper">
    <div class="header">
      <h2>你好:)</h2>
      <p>暂无专属管家</p>
    </div>

    <img src="../../assets/img/housekeeper.png" alt />
    <div class="description">
      <p>管家一键呼叫是睿服务提供的贴心功能，你可以通过住这儿快速找到你的管家，提供一对一的服务，此功能需要确认门牌号才能使用，现在确认吗？</p>
    </div>

    <div class="housenumber">
        <button>确认门牌号</button>
    </div>
  </div>
</template>
<style lang="stylus"  scoped >
.housekeeper {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.header {
  text-align: left;
  padding: 0 0.2rem;
}

.header h2 {
  padding-bottom: 0;
  margin-top 0
}

.header p {
  margin-top: 0.1rem;
}

img {
  height: 1.3rem;
  width: 2rem;
  margin-top: 0.8rem;
}

.housenumber button {
  color: #da645d;
  width 1.5rem
  height 0.4rem
  font-size: 0.12rem;
  border-color #da645d
}

.description p {
  padding: 0.3rem 0.5rem;
  letter-spacing: 0.01rem;
}
</style>