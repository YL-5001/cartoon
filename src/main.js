import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import '@/assets/iconfont/iconfont.css'
//关闭Vue的生产提醒
Vue.config.productionTip = false
//使用插件
Vue.prototype.$axios = axios
Vue.prototype.$video = Video
Vue.use(ElementUI)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
