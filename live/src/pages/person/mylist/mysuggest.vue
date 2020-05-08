<template>
  <!-- 我的帖子 -->
  <div id="suggest">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="goback"></i>
      <h4>功能异常与产品建议</h4>
      <h4>提交</h4>
    </header>
    <textarea placeholder="如果对“住这儿”有什么意见或建议，请告诉我们" cols="30" rows="6"></textarea>
    <p class="postImg">上传图片</p>
    <div class="img-upload">
      <van-uploader v-model="fileList" multiple />
    </div>
    <h5>常见问题解答》</h5>
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
#suggest {
  height: 100%;
  background-color: #fff;
}

header {
  width: 100%;
  height: 0.8rem;
  padding: 0.2rem;
  display: flex;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
}

.fa-chevron-left {
  font-size: 0.2rem;
}

.fa-question-circle-o {
  font-size: 0.24rem;
}

h3 {
  font-size: 0.22rem;
  text-align: left;
}

textarea {
  border: 0;
}

.postImg {
  text-align: left;
  padding-left: 0.2rem;
  height: 0.4rem;
  line-height: 0.5rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.img-upload {
  text-align: left;
  padding: 0.2rem;
  border-bottom 1px solid #ccc
}
h5{
  text-align left 
  padding 0.1rem
}
</style>