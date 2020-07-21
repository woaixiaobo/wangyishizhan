<template>
<!-- 滑动区域 -->
<div class="horizontal-container">
  <div class="scroll-wrapper" ref="scroll">
    <div class="scroll-content" >
      <div class="scroll-item">推荐</div>
      <div class="scroll-item">推荐</div>
      <div class="scroll-item">推荐</div>
      <div class="scroll-item">推荐</div><div class="scroll-item">推荐</div>
      <div class="scroll-item">推荐</div><div class="scroll-item">推荐</div>
      <div class="scroll-item">推荐</div><div class="scroll-item">推荐</div>
      <div class="scroll-item">推荐</div><div class="scroll-item">推荐</div>
      <div class="scroll-item">推荐</div><div class="scroll-item">推荐</div>
      <div class="scroll-item">推荐</div><div class="scroll-item">推荐</div>
      <div class="scroll-item">推荐</div><div class="scroll-item">推荐</div>
      <div class="scroll-item">推荐</div>
    </div>
  </div> 
</div>
</template>
<script>
import BScroll from '@better-scroll/core'
export default {
  mounted() {
    this.$nextTick(()=>{
      //导航滑动
      this.init()
    })
  },
  beforeDestroy() {
    this.bs.destroy()
  },
  methods:{
     //导航滑动
    init() {
        this.bs = new BScroll(this.$refs.scroll, {
          mouseWheel:true,
          disableTouch:false,
          disableMouse:false,
          resizePolling:0,
          click:true,//开启点击事件
          scrollX: true,
          probeType: 3 // listening scroll hook
        })
        this._registerHooks(['scroll', 'scrollEnd'], () => {
          // console.log('done')
        })
      },
    _registerHooks(hookNames, handler) {
      hookNames.forEach((name) => {
        this.bs.on(name, handler)
      })
    },
    
  }
}
</script>
<style lang="less" scoped>
  .horizontal-container
    {
      .scroll-wrapper{
        position: relative;
        width :355*2px;
        margin :0 auto;
        white-space: nowrap;
        overflow :hidden;
        .scroll-content
          {
            display :inline-block;
            height: 60px;
          }
        .scroll-item:nth-of-type(1){
          margin-left: 30px;
        }
        .scroll-item
          {
            height: 50px;
            line-height :50px;
            font-size :28px;
            display :inline-block;
            text-align :center;
            padding :0 25px;
            position: relative;
            &.active{
              color: #DD1A21;
            }
            &.active::after{
              content: '';
              position: absolute;
              left: 0;
              bottom: -6px;
              width: 100%;
              height: 4px;
              background-color: #DD1A21;
            }
          }
      }

    }
</style>