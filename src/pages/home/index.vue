<template>
  <div id="root">
    <HomeHeader/>
    <HomeContent v-if="isShow" ></HomeContent>
    <cateGroys v-else></cateGroys>
  </div>
</template>
<script>
import HomeHeader from "../../components/homeHeader/index"
import HomeContent from "../../components/homeContent/index"
import cateGroys from "../../components/cateGroys/index"
export default {
  data() {
    return {
      isShow:true,
    }
  },
  mounted() {
    //绑定全局事件总线，接受消息，接到消息后跟新数据，此处用作判断显示那个组件
    this.$bus.$on('isShow',(v)=>{
      this.isShow = v
    })
  },
  components:{
    HomeHeader,
    HomeContent,
    cateGroys,
  }
}
</script>
<style lang="less" >
</style>