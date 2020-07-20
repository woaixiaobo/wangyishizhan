import {getCateModules,getIndex} from "../api/index"
const state = {
  cateModules:[],//导航数据
  indexData:{},//首页数据
  text:'wp'
}
const mutations = {
  //处理导航数据
  CateModules(state,cateModules){
    state.cateModules = cateModules
  },
  //处理首页数据
  indexe(state,indexDate){
    state.indexData = indexDate
  }
}
const actions = {
  //获取导航数据
  async CateModules({commit}){
    let result = await getCateModules();
    console.log(result.data);
    commit('CateModules',result.data)
  },
  //获取首页数据
  async indexe({commit}){
    let result = await getIndex();
    commit('indexe',result.data)
  }
}

export default{
  state,
  mutations,
  actions,
}