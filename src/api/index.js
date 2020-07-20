import axios from "./axios"

//获取导航数据
export const getCateModules = ()=>axios('/cateModule')
//获取首页数据
export const getIndex = ()=>axios('/index')