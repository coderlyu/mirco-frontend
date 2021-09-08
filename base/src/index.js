import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import axios from '@/plugins/axios.js'
import { registerApplication, start } from 'single-spa'
import { loadApp } from '@/utils/index.js'
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
    name: 'main',
    app: loadApp(`//${window.location.host}/`, 'main'),
    activeWhen: (location) => location.pathname.startsWith('/main'),
    customProps: {}
  },
  {
    name: 'custom',
    app: loadApp(`//${window.location.host}/`, 'custom'),
    activeWhen: (location) => location.pathname.startsWith('/custom'),
    customProps: {}
  }
]

apps.forEach(p => registerApplication(p))
