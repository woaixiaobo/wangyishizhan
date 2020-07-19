import {getCateModules} from "../api/index"
const state = {
  cateModules:[],//导航数据
  text:'wp'
}
const mutations = {
  CateModules(state,cateModules){
    state.cateModules = cateModules
  }
}
const actions = {
  //获取导航数据
  async CateModules({commit}){
    let result = await getCateModules();
    console.log(result.data);
    commit('CateModules',result.data)
  }
}

export default{
  state,
  mutations,
  actions,
}