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

if (window.__INJECTED_PUBLIC_PATH_BY_AU__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_AU__
}

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