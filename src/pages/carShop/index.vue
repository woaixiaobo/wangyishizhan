<template>
  <div class="carShop">
    <!-- 头部区域 -->
    <div class="carShopHeader">
      <p>购物车</p>
      <p>领券</p>
    </div>
    <!-- 说明三标识 -->
    <div class="servicePolicy">
      <div class="item">
        <i class=""></i>
        <span>30天无忧退货</span>
      </div>
      <div class="item ">
        <i class=""></i>
        <span>48小时快速退款</span>
      </div>
      <div class="item">
        <i></i>
        <span>满99元免邮费</span>
      </div>
    </div>
    <!-- 购物车图标 -->
    <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp" alt="">
    <!-- 登录按钮 -->
    <div class="login">登录</div>
  </div>
</template>
<script>
export default {
  mounted() {
    
  },
}
</script>
<style lang="less" scoped>
  .carShop{
    height: 667*2px;
    background-color: #f4f4f4;
    // 头部
    .carShopHeader{
      height: 88px;
      background-color: #fff;
      padding: 0px 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p{
        &:nth-of-type(1){
          font-size: 36px;
        }
        &:nth-of-type(2){
          font-size: 30px;
          color: red;
        }
      }
    }
    // 三标识
    .servicePolicy{
      height: 70px;
      background-color: #eee;
      display: flex;
      justify-content: space-around;
      align-items: center;
      i{
        display: inline-block;
        width: 10px;
        height: 10px;
        border: 1px solid #999;
        border-radius: 50%;
        margin-bottom: 1px;
        margin-right: 4px;
      }
    }
    //购物车图片
    img{
      width: 248px;
      height: 248px;
      position: absolute;
      left: 50%;
      top: 40%;
      transform: translateX(-50%);
    }
    .login{
      width: 480px;
      height: 92px;
      position: absolute;
      left: 50%;
      top: 62%;
      transform: translateX(-50%);
      line-height: 92px;
      text-align: center;
      font-size: 30px;
      color: #fff;
      background-color: #DD1A21;
    }
  }
</style>