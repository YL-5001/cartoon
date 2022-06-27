import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //存储数据  
  state: {
    n:1,
    xFormData:[],
    xLabel:' ',
    videoTime:0,
    refreshSwitch:0,
    car:[
    {
      region:'qiche',
      name:'lambergini',
      cost:'500w',
      src:require('../assets/VCG42N1336438262.mp4')
    },
    {
      region:'qiche',
      name:'BMW',
      cost:'30w',
      src:require('../assets/VCG42N1330709780.mp4')
    }
    ],
    ship:[
      {
        region:'zhanchuan',
        name:'waterFly',
        cost:'60w'
      },
      {
        region:'zhanchuan',
        name:'walkOnWater',
        cost:'30w'
      }
    ]
  },
  //类似计算属性（加工state里的数据），可以跨组件使用，需要return返回值
  getters: {
    getRefreshSwitch(state){
			return state.refreshSwitch
		}
  },
  //操作数据
  mutations: {
    getN(state,nId){
      state.n = nId
    },
    getSrc(state) {
      state.videoUrl = state.car[state.n - 2].videoSrc
      return require(state.videoUrl)
    },
    setFormData(state,formData){
      state.xFormData = formData
    },
    //设置开关
    setRefreshSwitch(state){
			if(state.refreshSwitch === 0){
				state.refreshSwitch = 1
			} else {
				state.refreshSwitch = 0
			}
		}
  },
  //响应组件中的动作
  actions: { 
  },
  modules: {
  }
})
