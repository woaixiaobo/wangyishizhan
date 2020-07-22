<template>
  <div class="buy">
    <!-- 头部 -->
    <ThreeIcon title="值得买"/>
    <!-- 卡片区域 -->
    <div class="swiperTabContainer">
      <div class="swiperTab">
        <img src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt="">
        <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
        <div class="title">
          <span>严选好物</span>
          <span>用心生活</span>
        </div>
      </div>
    <!-- 滑动区域 -->
      <div class="scroll">
        <!-- 引入轮播图组件 -->
        <BuySwiper/>
      </div>
    </div>
    <!-- 瀑布流 -->
    <Waterfall/>
  </div>
</template>
<script>
import BuySwiper from "../../components/buySeiper/index"
import Waterfall from "../../components/waterfall copy/index"
import ThreeIcon from "../../components/threeIcon/index"
export default {
  data() {
    return {
    }
  },
  methods:{
  },
  components:{
    BuySwiper,
    Waterfall,
    ThreeIcon,
  }
}
</script>
<style lang="less" scoped>
  .buy{
    background-color: #eee;
    // 卡片区域
    .swiperTabContainer{
      position: relative;
      height: 685px;
      .swiperTab{
        height: 262*2px;
        position: relative;
        img{
          height: 259*2px;
          &:nth-of-type(2){
            width: 62*2px;
            height: 34.5*2px;
            position: absolute;
            left: 10px;
            top: 60px;
          }
        }
        .title{
          position: absolute;
          left: 146px;
          top: 76px;
          color: #fff;
          font-size: 32px;
          span:nth-of-type(1){
            margin-right: 10px;
          }
        }
      }
      .scroll{
        position: absolute;
        top: 140px;
        margin-left: 20px;
        width: 355*2px;
        height: 270*2px;
        background-color: #fff;
        border-radius: 20px;
        box-sizing: border-box;
        padding: 40px 10px;
      }
    }
  }
</style>