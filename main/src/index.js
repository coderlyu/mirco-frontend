import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import axios from '@/plugins/axios.js'
import singleSpaVue from 'single-spa-vue'
// style
import '@/assets/app.css'
import '@/assets/main.scss'
// plugins
import '@/router/permision.js'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el:'#app',
    router,
    store,
    render: h => h(App)
  },
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount