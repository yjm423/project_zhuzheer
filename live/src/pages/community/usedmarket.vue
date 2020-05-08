<template>
  <div class="usedmarket">
    <header>
      <span @click="goback">取消</span>
      <h4>二手物品</h4>
      <span class="send">发布</span>
    </header>
    <div class="desription">
      <input type="text" placeholder="标题（30字以内）" />
      <textarea placeholder="物品描述（为免打扰，请勿透露个人电话、微信等信息）" cols="30" rows="5"></textarea>
      <van-uploader v-model="fileList" multiple />
    </div>
    <div>
      <div class="price">
        <h4>卖价</h4>
        <span>已免去5%的手续费</span>
      </div>
      <span>
        <input type="text" />元
      </span>
    </div>
    <div>
      <h4>全新</h4>
    </div>
    <div>
      <h4>全新</h4>
    </div>
  </div>
</template>

<script>
export default {
   data() {
    return {
      fileList: []
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.usedmarket {
  height: 100%;
  background-color: #fff;
  padding: 0.15rem;
}

header {
  height: 0.5rem;
  line-height: 0.5rem;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  font-size: 0.2rem;
}

header h4 {
  line-height: 0.4rem;
  font-size: 0.22rem;
}

.send {
  color: red;
}

.desription {
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.desription input {
  border: 0;
}

.desription textarea {
  border: 0;
  letter-spacing: 0.01rem;
}
.price{
    display flex
}
.desription .price input[type=text]{
    width 0.5rem!important
}
</style>