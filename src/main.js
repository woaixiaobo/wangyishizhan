import Vue from 'vue'
import App from './App.vue'
//下载并引入设置页面根字体的库，根字体大小=视口/10
import 'lib-flexible/flexible'
//引入路由
import router from "./router"
//引入vuex
import store from "./store/index"
//引入api用作全局
import * as API from "./api" 
Vue.prototype.$API = API
//引入swiper轮播库
// If you use Swiper 6.0.0 or higher
import 'swiper/css/swiper.css'
//引入瀑布流
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)

//引入ui库
import { Search ,Swipe, SwipeItem,Lazyload,Overlay,Button,CountDown,Form,Field ,Checkbox, CheckboxGroup} from 'vant';
import {Dialog,Toast } from "vant"
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Overlay);
Vue.use(Button);
Vue.use(CountDown);
Vue.use(Form);
Vue.use(Field);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Dialog,Toast );

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {//给当前vue原型对象指定全局事件总线对象
    Vue.prototype.$bus=this;
  },
}).$mount('#app')
