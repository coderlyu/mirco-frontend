import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import axios from '@/plugins/axios.js'
import { registerApplication, start } from 'single-spa'
// style
import '@/assets/app.css'
import '@/assets/main.scss'
// plugins
import '@/router/permision.js'

new Vue({
  router,
  store,
  mounted() {
    start()
  },
  render: h => h(App)
})
.$mount('#app')

const apps = [
  {
    name: 'home',
    app: () => import(),
    activeWhen: (location) => location.pathname.startsWith('/home'),
    customProps: {}
  }
]

apps.forEach(p => registerApplication(p))
