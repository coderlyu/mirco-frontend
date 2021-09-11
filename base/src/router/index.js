import VueRouter from "vue-router"
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Main'
  },
  {
    path: '/custom',
    name: 'Custom'
  }
]

export default new VueRouter({
  routes
})