import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MyModel from '../views/MyModel.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path:'/MyModel',
    name:'MyModel',
    component:MyModel
  }
]

const router = new VueRouter({
  routes
})

export default router
