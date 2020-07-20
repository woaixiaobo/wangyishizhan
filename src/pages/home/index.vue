<template>
  <div id="root">
    <div class="zhanwei"></div>
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
  .zhanwei{
    position: relative;
    width: 100%;
    height: 148px;
  }
</style>