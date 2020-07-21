import axios from "./axios"

//获取导航数据
export const getCateModules = ()=>axios('/api/cateModule')
//获取首页数据
export const getIndex = ()=>axios('/api/index')
//获取分类数据
export const getCateGroy = ()=>axios('/api/cateList')
//获取网易值得买轮播数据
export const getWangyi = ()=>axios('/wangyi')
//首次瀑布
export const getWaterFirst = ()=>axios('/waterFirst')
//触底瀑布
export const getWaterArgin = ({page,size})=>axios(`/waterAragin?page=${page}&size=${size}`)