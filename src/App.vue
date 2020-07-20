<template>
  <div id="app">
    <router-view></router-view>
    <NavBottom/>
  </div>
</template>

<script>
//引入底部导航
import NavBottom from "./components/navBottom/index"
export default {
  name: 'App',
  mounted(){
  
  },
  methods:{
    
  },
  components: {
    NavBottom,
  }
}
</script>

<style>
/* *{
  padding: 0;
  margin: 0;
} */
  @import url('./assets/css/reset.css');
  /* swiper样式 */
  .van-swipe__indicator{
    width: 42px;
    border-radius: 10px;
    height: 4px;
  }
</style>
