<template>
  <div class="personal">
    <ThreeIcon title="小博专属" color="#fafafa"/>
    <div v-if="!isLogin" class="logoWarp">
      <img src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
      <div class="login">
        <div class="phone comon">
          <i></i>
          <span @click="toLogin">手机号快捷登录</span>
        </div>
        <div class="email comon">
          <i></i>
          <span>邮箱账号登录</span>
        </div>
      </div>
    </div>
    <div v-if="!isLogin" class="bottom">
      <div class="container">
        <div class="wexin">
          <i class="iconfont icon-gongzhonghao"></i>
          <span >微信</span>
        </div>
        <div class="qq">
          <i class="iconfont icon-qq"></i>
          <span >QQ</span>
        </div>
        <div class="weibo">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
    <!-- 注册组件 -->
    <register v-if="isLogin"/>
  </div>
</template>
<script>
import ThreeIcon from "../../components/threeIcon/index"
import Register from "../../components/register/index"
export default {
  data() {
    return {
      isLogin:false,//是否是注册页面
    }
  },
  methods:{
    toLogin(){
      this.isLogin = true
    },
  },
  components:{
    ThreeIcon,
    Register,
  }
}
</script>
<style lang="less" scoped>
  .personal{
    background-color: #F2F5F4;
    height: 667*2px;
    
    .logoWarp{
      height: 351*2px;
      background-color: #F2F5F4;
      position: relative;
      img{
        width: 134*2px;
        height: 45*2px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 150px;
        margin: auto;
      }
      .login{
        position: absolute;
        bottom: 10px;
        left: 0;
        width: 100%;
        .comon{
          width: 335*2px;
          height: 47*2px;
          border: 1px solid #DD1A21;
          margin: auto;
          color: #fff;
          border-radius: 6px;
          font-size: 28px;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          i{
            width: 40px;
            height: 40px;
            background: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png?imageView&type=webp');
            background-size: 100%;
            background-position-y: -50px;
          }
          span{
            margin-left: 10px;
          }
        }
        .phone{
          display: flex;
          margin-bottom: 30px;
          line-height: -28px;
          background-color: #DD1A21;
          
        }
        .email{
          color: #DD1A21;
          i{
            background-position-y: 0;
          }
        }
      }
    }
    .bottom{
      // height:456px;
      background-color: #F2F5F4;
      position: relative;
      bottom: -50px;
      .container{
        display: flex;
        justify-content: center;
        margin-top: 350px;
        div{
          border-right: 1px solid #979797;
          padding: 0px 45px;
          font-size: 28px;
          color: #666;
          display: flex;
          &:last-of-type{
            border: 0px;
          }
          &:nth-of-type(2){
            i{
              font-size: 30px;
            }
          }
          i{
            font-size: 36px;
            color: #666;
            margin-right: 10px;
            line-height: 40px;
          }
        }
      }
    }
  }
</style>