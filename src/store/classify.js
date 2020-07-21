import {getCateGroy} from "../api/index"
const state = {
  cateGroys:[],//分类数据
}
const mutations = {
  //获取分类
  CateGroys(state,cateGroys){
    state.cateGroys = cateGroys
  },
}
const actions = {
  //获取分类
  async CateGroys({commit}){
    let result = await getCateGroy();
    console.log(result.data);
    commit('CateGroys',result.data)
  },
}

const getters={
  // initCateGroy(state){
  //   return state.cateGroys
  // }
}
export default{
  state,
  mutations,
  actions,
  getters,
}