<template>
  <div class="wrap">
    <header>
      <span @click="goback">取消</span>
      <span class="send">发送</span>
    </header>
    <h3>维修</h3>
    <textarea placeholder="请输入问题详情，以便我们更好地处理。" cols="30" rows="8"></textarea>
    <div class="addpic">
      <p>添加图片</p>
      <van-uploader v-model="fileList" multiple />
    </div>
    <div>
      <!-- <span>希望上门时间段</span> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: [
        
      ]
    }
  },
  methods:{
      goback(){
          this.$router.go(-1);
      }
  }

};
</script>
<style lang="stylus" scoped>
.wrap {
  background-color: #fff;
  padding: 0.2rem;
  height: 100%;
}

header {
  display: flex;
  justify-content: space-between;
}

.send {
  color: #f99bb3;
}

h3 {
  text-align: left;
  margin: 0.3rem 0;
}

textarea {
  border: 0;
  padding: 0;
}

.addpic {
  text-align: left;
}

</style>