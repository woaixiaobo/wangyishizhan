import Vue from "vue"
//下载并引入路由
import VueRouter from "vue-router"
//引入路由规则
import routes from "./routers"
//使用路由插件
Vue.use(VueRouter);

// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router