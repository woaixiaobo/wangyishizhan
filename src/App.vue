<template>
  <div id="app">
    <router-view></router-view>
    <NavBottom v-if="isPersonal"/>
  </div>
</template>

<script>
//引入底部导航
import NavBottom from "./components/navBottom/index"
export default {
  name: 'App',
  data() {
    return {
      isPersonal:true
    }
  },
  mounted(){
    if(this.$route.path.split('/')[1]==='personal'){
      this.isPersonal = false
    }
    if(this.$route.path==='responal'){
      this.isPersonal = false;
    }
    this.$bus.$on('isPersonal',(isPersonal)=>{
      this.isPersonal = isPersonal
      console.log(isPersonal);
    })
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
