import Vue from "vue"
//下载并引入路由
import VueRouter from "vue-router"
//引入路由规则
import routes from "./routers"
//使用路由插件
Vue.use(VueRouter);


//修正Vue原型上边的push

//首先要保存原型上边的方法
const originPush = VueRouter.prototype.push;
//重写原型上的方法
VueRouter.prototype.push=function(location, onComplete, onAbort){
    // console.log('push()',location, onComplete, onAbort);
    if(onComplete||onAbort){
        //如果传递了回调函数,则让原来的push方法进行处理, 
        //用call方法改变this的指向,让router可以调用原来的方法
        //this就是路由器对象 $router
        originPush.call(this,location, onComplete, onAbort);
    }else{
        //如果第二次传递了相同的参数,那么会抛出失败的promise,所以要用catch处理错误
        return originPush.call(this,location).catch(()=>{
            //这样后边的链式就会中断
            return new Promise(()=>{})
            // console.log('catch error');
        })
    }
}


// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
  scrollBehavior () {
    return { x: 0, y: 0 }  // 在跳转路由时, 滚动条自动滚动到x轴和y轴的起始位置
  }
})
router.beforeEach((to, from, next) => {
  console.log(to.fullPath=="/responal",from);
  if(to.fullPath=="/responal"){
    let user = JSON.parse(localStorage.getItem('user'))
    if(!user){
      next('/personal')
    }
  }else{
    next()
  }
  next()
})

export default router