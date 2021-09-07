import NProgress from 'nprogress'
import router from './index'

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
  
  document.title = to.meta.title ? (to.meta.title+ '-模板') : '模板'
})