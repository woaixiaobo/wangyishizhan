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
          @click="changeActive('tuijian',0)"
          :class="{active:active==='tuijian'}" >推荐</div>
          <div  
            class="scroll-item"
            :class="{active:active===item.name}" 
            @click="changeActive(item.name,index)"
            v-for="(item,index) in cateModules" :key="item.id"
          >{{item.name}}</div>
        </div>
      </div> 
    </div>
    <!-- 右部三角遮罩 -->
    <div class="toggleWrap" @click="toggleWrap">
      <div class="linear"></div>
      <div class="toggle" @click="show = true">
        <i ref="toggle" :class="{statle:flag}"></i>
      </div>
    </div>
    <!-- 遮罩层 -->
    <van-overlay :show="show" @click="showBlock">
      <div class="block" @click.stop>
        <p>全部频道</p>
        <div class="navItem2" >
          <span :class="{active:active==='tuijian'}" @click="changeActive('tuijian')">推荐</span>
          <span :class="{active:active===item.name}" @click="changeActive(item.name)" v-for="(item) in cateModules" :key="item.id">{{item.name}}</span>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import {mapState,mapActions} from "vuex"
import PubSub from "pubsub-js"
export default {
  data() {
    return {
      active:'tuijian',
      flag:false,
      show:false,
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
    //点击遮罩层回调
    showBlock(){
      this.show = false
      if(!this.show){
        this.flag = false
      }
    },
    //点击三角回调
    toggleWrap(){
      this.flag = !this.flag
      if(!this.flag){
        this.show = false
      }
    },
    //跳转到搜索页面
    toSearch(){
      let nowCompontent = this.$route.path.split('/')[1]
      this.$router.push(`/search?perRoute=${nowCompontent}`)
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
    changeActive(type,index){
      this.active=type
      if(type!=='tuijian'){
        //触发全局事件总线，跟新数据，将搜索框的搜索词重置
        this.$bus.$emit('isShow',false);
        //发布消息传递当前项数据
        console.log('发布',this.cateModules[index]);
        PubSub.publish('cateGroy', this.cateModules[index]);
      }else{
        this.$bus.$emit('isShow',true);
      }
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
  .header{
    position: fixed;
    top: 0;
    background-color: #fff;
    height: 148px;
    z-index: 2;
    // 搜索区域
    .search{
      display: flex;
      height: 88px;
      align-items: center;
      img{
        width: 138px;
        height: 40px;
        margin-left: 30px;
        margin-right: 20px;
      }
      .in{
        width: 442px;
        height: 56px;
        background-color: #ededed;
        border-radius: 8px;
        margin-right: 20px;
        position: relative;
        font-size: 28px;
        color: #666;
        line-height: 56px;
        span{
          margin-left: 80px;
        }
        i{
          width: 28px;
          height: 28px;
          background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp');
          background-size: 28px;
          position: absolute;
          left: 40px;
          top: 14px;
        }
      }
      .btn{
        width: 74px;
        height: 38px;
        font-size: 24px;
        line-height: 40px;
        text-align: center;
        color: #DD1A21;
        border: 1px solid #DD1A21;
        border-radius: 10px;
      }
    }
      // 导航
    .horizontal-container
    {
      .scroll-wrapper{
        position: relative;
        width :750px;
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
    // 三角 遮罩层
    .toggleWrap{
      position: fixed;
      top: 80px;
      right: 0;
      width: 160px;
      height: 60px;
      display: flex;
      z-index: 2;
      // background-color: #fff;
      .linear{
        width: 60px;
        height: 60px;
        background-image: linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%);
      }
      .toggle {
        width: 100px;
        height: 51px;
        text-align: center;
        background: #fff;
        i{
          display: inline-block;
          width: 26px;
          height: 26px;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-9b31adfa37.png?imageView&type=webp);
          background-size: 100% 100%;
          margin-top: 20px;
          transition: transform 1s ;
          &.statle{
            transform: rotate(180deg);
            transition: transform 1s ;
          }
        }
      }
    }
    // 遮罩层
    .van-overlay{
      top: 88px;
      .block {
        width: 750px;
        height: 372px;
        background-color: #fff;
        padding: 0px 30px;
        p{
          height: 60px;
          line-height: 60px;
          font-size: 30px;
        }
        .navItem2{
          margin-top: 20px;
          display: flex;
          white-space: nowrap;
          flex-wrap: wrap;
          span{
            width: 150px;
            height: 56px;
            line-height: 50px;
            box-sizing: border-box;
            margin-left: 20px;
            margin-bottom: 40px;
            border: 1px solid #ccc;
            border-radius: 6px;
            text-align: center;
            background: #FAFAFA;
            &.active{
              border: 1px solid #DD1A21;
              color: #DD1A21;
            }
          }
        }
      }
    }
    }

</style>