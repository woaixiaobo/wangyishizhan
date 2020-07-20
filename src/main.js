import Vue from 'vue'
import App from './App.vue'
//下载并引入设置页面根字体的库，根字体大小=视口/10
import 'lib-flexible/flexible'
//引入路由
import router from "./router"
//引入vuex
import store from "./store/index"
//引入ui库
import { Search ,Swipe, SwipeItem,Lazyload} from 'vant';
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
