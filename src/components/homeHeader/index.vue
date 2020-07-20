<template>
  <div class="header">
    <!-- 搜索 -->
    <div class="search" @click="toSearch">
      <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt="">
      <div class="in">
        <i></i>
        <span>搜索商品, 共34101款好物</span>
      </div>
      <div class="btn">登录</div>
    </div>
    <!-- 导航 -->
    <div class="horizontal-container">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content" >
        <div class="scroll-item" 
        @click="changeActive('tuijian')"
        :class="{active:active==='tuijian'}" >推荐</div>
        <div  
          class="scroll-item"
          :class="{active:active===item.name}" 
          @click="changeActive(item.name)"
          v-for="(item) in cateModules" :key="item.id"
        >{{item.name}}</div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import {mapState,mapActions} from "vuex"
export default {
  data() {
    return {
      active:'tuijian'
    }
  },
  async mounted() {
    //获取请求
    await this.CateModules()
    this.$nextTick(()=>{
      //导航滑动
      this.init()
    })
    /*window.onresize=()=>{
        this.bs&&this.bs.refresh()
        if (this._isMobile()) {
        console.log("手机端")
        location.reload()
        this.bs&&this.bs.refresh()
      } else {
        console.log("pc端")
        // this.bs&&this.bs.refresh()
        location.reload()
        this.bs&&this.bs.refresh()
      }
    }*/
  },
  beforeDestroy() {
    this.bs.destroy()
  },
  methods:{
    //跳转到搜索页面
    toSearch(){
      this.$router.push('/search')
    },
    //判断是移动端还是pc端
    _isMobile() {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        return flag;
    },
    ...mapActions({
      CateModules:'CateModules'
    }),
    
    //切换选中状态
    changeActive(type){
      this.active=type
    },
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
    
  },
  computed: {
    ...mapState({
      cateModules:state=>state.home.cateModules
    }),
  },
}
</script>
<style lang="less">
// 搜索区域
  .search{
    display: flex;
    height: 88px;
    align-items: center;
  }
  .search img{
    width: 138px;
    height: 40px;
    margin-left: 30px;
    margin-right: 20px;
  }
  .search .in{
    width: 442px;
    height: 56px;
    background-color: #ededed;
    border-radius: 8px;
    margin-right: 20px;
    position: relative;
    font-size: 28px;
    color: #666;
    line-height: 56px;
  }
  .search .in i{
    width: 28px;
    height: 28px;
    background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp');
    background-size: 28px;
    position: absolute;
    left: 40px;
    top: 14px;
  }
  .search .in span{
    margin-left: 80px;
  }
  .search .btn{
    width: 74px;
    height: 38px;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    color: #DD1A21;
    border: 1px solid #DD1A21;
    border-radius: 10px;
  }
  // 导航
  .horizontal-container
  {
    .scroll-wrapper{
      width :100%;
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