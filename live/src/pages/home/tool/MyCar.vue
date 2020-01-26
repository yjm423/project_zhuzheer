<template>
  <div id="car">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="goback"></i>
    </header>
    <h3>我的车</h3>

    <div>
      <img src="../../../assets/img/car-logo.png" alt />
      <p>添加车牌和车位可以在线缴费哦</p>
    </div>

    
    <div class="add" @click="action">添加</div>
    <van-action-sheet v-model="show" :round='false' :actions="actions"  cancel-text="取消" @cancel="onCancel" />
  </div>
</template>

<script>
import Vue from "vue";
import { ActionSheet } from "vant";
import { Toast } from 'vant';
Vue.use(ActionSheet);
export default {
  data() {
    return {
      show: false,
      round:false,
      actions: [
        { name: "添加车辆" },
        { name: "添加车位" },
      ]
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    onCancel() {
      this.show = false;
      Toast("cancel");
    },
    action(){
        this.show=true
    },
    onSelect(item){
        this.show=false
        Toast(item.name)
    }
  }
};
</script>

<style lang="stylus" scoped>
#car {
  height: 100%;
  background-color: #fff;
  padding: 0.2rem;
}

header {
  width: 100%;
  height: 0.4rem;
  text-align: left;
}

.fa-chevron-left {
  font-size: 0.2rem;
}

h3 {
  text-align: left;
}

#car img {
  height: 1.4rem;
  width: 1.8rem;
  margin: 0.5rem auto;
  display: block;
}

p {
  letter-spacing: 0.02rem;
}

.add {
  display: inline-block;
  margin-top: 0.2rem;
  color: #eb5b58;
  width: 1.2rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border: 1px solid #eb5b58;
  border-radius: 0.2rem;
}
.van-action-sheet__item{
    text-align left
    margin-left 0.2rem
}

.van-action-sheet__cancel{
    text-align left 
    margin-left 0.2rem
}
</style>