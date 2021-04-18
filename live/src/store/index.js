import Vue from 'vue'
import Vuex from 'vuex'
import * as type from './type'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  actions: {
    add({commit},payload){
      var  actionType={
        type:type.INCREMENT,
        number:payload  //组件传过来的值
      }
      commit(actionType)  //将actions传给mutations
    }
  },

  //接收传过来的actions 对状态进行更改 
  mutations: {
   [type.INCREMENT](state,action){
      state.count++

      //如果前面是dispatch非标志 那么action就是传过来的参数
      console.log(action)
   }
  },
 
  
  getters:{
    newState(state){
      return state.count
    }
  }
})
