<template>
    <div>
        <!-- 下一步 -->
        <div class="next">
            <span @click="back"> &lt; </span>
            <p>下一步</p>
        </div>
        <!-- 注册新账号 -->
        <div class="account">
            <p>注册新账号</p>
        </div>
        <!--手机号 -->
        <div>
            <select name="" id=""><option value="">+86</option></select>
            <input type="select" placeholder="手机号">
        </div>
        <!-- 多选框 -->
        <div class="multiple"> 
		    <label><input type="checkbox" name="sex" value=""></label>
            <p>同意《住着儿服务协议》和《隐私协议》</p>
        </div>
        <!-- 其他注册方式 -->
        <div class="rest">
            <p>其他注册方式</p>
            <span>
                微信
            </span>
        </div>
    </div>

</template>

<script>
export default {
    methods: {
        back(){
            this.$router.go(-1)
        }       
    },
}
</script>




<style>
    .next{
        display: flex;
        justify-content: space-between;
    }
    .next span{
        color: #cccccc;
        font-size: 0.4rem;
        margin-top: 0.18rem;
    }
    .next p{
        width: 1rem;
        height: 0.4rem;
        font-size: 0.25rem;
        border:1px solid #ffffff;
        background-color: #cccccc;
        border-radius: 0.1rem;
        text-align: center;
        line-height: 0.4rem;
    }
    /* 注册新账号 */
    .account p{
        height: 0.5rem;
        font-size: 0.27rem;
        color: #cccccc;
    }
    /* 多选框 */
    .multiple{
        display: flex;
        justify-content: space-between;
    }
    .multiple p{
        font-size: 0.15rem;
        height: 0.2rem;
        padding-top: 0.61rem;
        padding-right: 0.8rem;   
    }
    .multiple label{
        margin-top: -0.11rem;
    }
    /* 其他注册方式 */
    .rest p{
        font-size: 0.17rem;
        height: 0.23rem;
        text-align: center;
    }
</style>