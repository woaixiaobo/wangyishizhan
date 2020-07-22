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
  @import url('./assets/font/iconfont.css');
</style>
