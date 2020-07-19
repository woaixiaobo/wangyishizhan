import axios from "./axios"

//获取导航数据
export const getCateModules = ()=>axios('/cateModule')