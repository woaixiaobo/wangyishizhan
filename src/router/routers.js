//引入组件
import Home from "../pages/home/index.vue"
import Classify from "../pages/classify/index.vue"
import DeserveBuy from "../pages/deserveBuy"
import CarShop from "../pages/carShop"
import Personal from "../pages/personal"
import Search from "../components/search/index.vue"
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  { path: '/home', component: Home },
  { path: '/classify', component: Classify },
  { path: '/deserveBuy', component: DeserveBuy },
  { path: '/carShop', component: CarShop },
  { path: '/personal', component: Personal },
  { path: '/search', component: Search },
  { path: '/', redirect: '/home'}
]

export default routes