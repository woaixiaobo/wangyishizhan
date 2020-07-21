import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import home from "./home"
import classify from "./classify"

const state = {
  data:'我是小博'
}

const actions = {
  
}

const mutations = {}

const getters = {}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules:{
    home,
    classify,
  }
})

export default store