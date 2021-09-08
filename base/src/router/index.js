import VueRouter from "vue-router"
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'Main'
  },
  {
    path: '/custom',
    name: 'Custom'
  },
  {
    path: '/',
    redirect: '/main'
  }
]

export default new VueRouter({
  routes
})