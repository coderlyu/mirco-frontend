import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message:　'this is about page'
  },
  mutations: { },
  actions: { },
  getters: {
    message:　(state) => state.message
  }
})