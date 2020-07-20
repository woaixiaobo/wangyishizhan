<template>
  <div id="root">
    <HomeHeader/>
    <HomeContent/>
  </div>
</template>
<script>
import HomeHeader from "../../components/homeHeader/index"
import HomeContent from "../../components/homeContent/index"
export default {
  components:{
    HomeHeader,
    HomeContent,
  }
}
</script>
<style lang="less" >
</style>