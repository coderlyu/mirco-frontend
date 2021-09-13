import VueRouter from "vue-router"
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Main',
    component: () => import('../views/Home.vue')
  }
]

export default new VueRouter({
  routes
})