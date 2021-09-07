import VueRouter from "vue-router"
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('views/About.vue')
  },
]

export default new VueRouter({
  routes
})