import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //存储数据  
  state: {
    n:1,
    car:[
    {
      name:'lambergini',
      cost:'200w'
    },
    {
      name:'BMW',
      cost:'30w'
    }
    ]
  },
  getters: {
  },
  //操作数据
  mutations: {
    JIA(state,value){
      // console.log('mutation中jia调用了',state,value)
      state.sum += value
    }
  },
  //响应组件中的动作
  actions: {
    jia:function(context,value){
      // console.log('jia被调用了',context,value)
      context.commit('JIA',value)
    }
  },
  modules: {
  }
})
