
<template>
    <div>
         <div class="btn" @click="inc">+1</div>
         <!-- <div class="btn" @click="add">+1</div> -->
         <!-- <div class="btn" @click="INCREMENT">+1</div> -->
         
         <!-- 后非标准 直接从state里面取值 -->
         <!-- 后标志 从getters里面的newState取值 -->
         {{this.$store.state.count}}
         {{this.$store.getters.newState}}
         <p>{{n}}</p>
    </div>
</template>
<script>
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex'
export default {
    data(){
        return{
            count:1
        }
    },
    methods:{
       inc(){
           this.$store.dispatch('add',5)

        /**
         * 前非标准
         */
    //        this.$store.commit('INCREMENT',5)
    //        console.log(this.$store)
       }

    /**
     * vuex辅助工具  方法统一获取到 但是是以数组的形式
     */
    // ...mapActions(['add']),
    // ...mapMutations(['INCREMENT'])

    },

    computed:{
        ...mapState({
            n:state=>state.count
        })
    }

    
}
</script>
<style lang="stylus" scoped>
    .btn{
        height 0.3rem
        width 0.6rem
        border 1px solid #ccc
        background-color #ccc
        margin 0.2rem auto
    }
</style>