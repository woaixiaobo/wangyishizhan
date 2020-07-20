<template>
  <div class="homeContent">
    <!-- swiper -->
    <van-swipe  ref="vanSwiper" @change="onChange" class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swiperImages" :key="index">
        <!-- 懒加载图片 -->
        <!-- <img  v-lazy="item" > -->
        <img  :src="item" >
      </van-swipe-item>
      <template #indicator>
        <div class="container" >
          <div @click="changeSwiperItem(index)" v-for="(item, index) in swiperImages" 
              :key="index" class="custom-indicator"
              :class="{active:index===current}"
              >
          </div>
        </div>
      </template>
    </van-swipe>
    <!-- 三个横向标题 -->
    <ul class="grow">
      <li>
        <i>
          <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt="">
        </i>
        <span>网易自营品牌</span>
      </li>
      <li>
        <i>
          <img src="https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png" alt="">
        </i>
        <span>30天无忧退货</span>
      </li>
      <li>
        <i>
          <img src="https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png" alt="">
        </i>
        <span>48小时快速退款</span>
      </li>
    </ul>
    <!-- kingkongMouddle 图片部分 -->
    <ul class="kingKongModule" v-if="indexData.kingKongModule">
      <li v-for="(item, index) in indexData.kingKongModule.kingKongList" :key="index">
        <img :src="item.picUrl">
        <span>{{item.text}}</span>
      </li>
    </ul>
    <!-- 新人区 -->
    <div class="newPerson">
      <div class="top">
        <!-- <img src="https://yanxuan.nosdn.127.net/d9b021de430394e9b274bf0455b53120.gif?imageView&quality=75" alt=""> -->
      </div>
      <div class="bottom">
        <img src="https://yanxuan.nosdn.127.net/8b5c103801f035cc7369afc1a46e0bc5.png?quality=75&type=webp&imageView&thumbnail=375x0" alt="">
        <img src="https://yanxuan.nosdn.127.net/01fae6d1209f9904af34095feb394325.png?quality=75&type=webp&imageView&thumbnail=375x0">
      </div>
    </div>
    <!-- 新人专享礼 -->
    <div class="newGift">
      <div class="title">新人专享礼</div>
      <div class="cotent">
        <div class="left">
          <p>新人专享礼包</p>
          <img src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
        </div>
        <div class="right">
          <div class="fuli">
            <div class="text">
              <p class="fulishe">福利社</p>
              <p class="dayPrice">今日特价</p>
            </div>
            <img src="https://yanxuan-item.nosdn.127.net/22cfd602403ca6a026a439e08e3e3127.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            <div class="discount">
              <div class="line1">￥82.8</div>
              <div class="line2">￥88</div>
            </div>
          </div>
          <div class="xinren">
            <div class="text">
              <p class="fulishe">新人拼团</p>
              <p class="baoyou">1元起包邮</p>
            </div>
            <img src="https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            <div class="discount">
              <div class="line1">￥1</div>
              <div class="line2">￥13.0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部临时 -->
    <div class="text1"></div>
  </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
  data() {
    return {
      current:0,//轮播的下标
      //swiper图片
      swiperImages:[
        'https://yanxuan.nosdn.127.net/e1d32c538a9fcf420411592746098ad2.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/e4b5ab7f6bb4b286b9fe18e42bb1f731.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/8104acf1cc1514a88ea0b7d030e9a55e.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/99873ee03dbfa1fec94f273025baaf20.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/7e01b30c2c440e118cf09e14c7a69266.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/d842ce2015b95a2eeee319b438b14dbd.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/e14d684c9dc43de2af5215c3d49b6870.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/50bc9d8901b05f7917156584812a853f.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
      ]
    }
  },
  mounted() {
    //获取首页信息
    this.indexe()
  },
  methods: {
    ...mapActions({
      indexe:'indexe',
    }),
    //轮播图发生变化的回调
    onChange(index) {
      // console.log(index);
      this.current = index;
    },
    //点击指示器的回调
    changeSwiperItem(index){
      this.$refs.vanSwiper.swipeTo(index);
    }
  },
  computed: {
    ...mapState({
      indexData:state=>state.home.indexData,
    })
  },
}
</script>
<style lang="less" scoped>
  .homeContent 
    {
      background-color: #eee;
      .my-swipe {
        .container{
          width: 100%;
          position: absolute;
          left: 0;
          bottom: 30px;
          display: flex;
          justify-content: center;
        }
        .custom-indicator {
          font-size: 12px;
          background-color: #fff;
          width: 40px;
          border-radius: 10px;
          height: 4px;
          margin-right: 8px;
          opacity: .4;
          &.active{
            opacity: 1;
          }
        }
        .van-swipe-item{
          height:296px;
          bottom: 40px;
          img{
          // width: 100%;
          height: 370px;
        }
        }
      }
      // 三个横向标题
      .grow{
        display: flex;
        justify-content: space-around;
        height: 72px;
        align-items: center;
        color: #333;
        padding-bottom: 8px;
        background-color: #fff;
        i {
          vertical-align: middle;
          img{
          width: 32px;
          height: 32px;
          margin-right: 8px;
        }
        }
      }
      // kingkong图片
      .kingKongModule{
        display: flex;
        flex-wrap: wrap;
        // height: 372px;
        background-color: #fff;
        li{
          display: flex;
          flex-direction: column;
          color: rgb(51, 51, 51);
          width: 110px;
          height: 156px;
          padding: 0 20px;
          text-align: center;
          margin-bottom: 25px;
          img{
            width: 110px;
            height: 110px;
            margin-bottom: 10px;
          }
        }
      }
      // 新人
      .newPerson{
        // margin-top: 30px;
        height: 548px;
        .top{
          width: 100%;
          height: 321px;
          background: url("https://yanxuan.nosdn.127.net/d9b021de430394e9b274bf0455b53120.gif?imageView&quality=75");
          background-size: 100%;
        }
        .bottom{
          height: 225px;
          background-color:rgb(230, 73, 4);
          text-align: center;
          img{
            width: 351px;
            height: 186px;
            margin-top: 20px;
            &:nth-of-type(1){
              margin-right: 10px;
            }
          }
        }
      }
      .newGift{
        height: 558px;
        background-color: #fff;
        margin-top: 20px;
        .title{
          height: 90px;
          font-size: 34px;
          color: #333;
          text-align: center;
          line-height: 90px;
          position: relative;
          &::before{
            content: '';
            position: absolute;
            left: 240px;
            top:45px;
            width: 28px;
            height: 3px;
            background-color: #333;
          }
          &::after{
            content: '';
            position: absolute;
            right: 240px;
            top:45px;
            width: 28px;
            height: 3px;
            background-color: #333;
          }
        }
        .cotent{
          display: flex;
          padding: 0px 30px;
          .left{
              width: 343px;
              height: 434px;
              background-color: #F9E9CF;
              margin-right: 4px;
              p{
                margin: 40px 0px 30px 30px;
                font-size: 32px;
              }
              img{
                width: 258px;
                height: 257px;
                margin-left: 50px;
              }
            }
          .right{
            width: 344px;
            height: 434px;
            .discount{
              position: absolute;
              top: 20px;
              right: 30px;
              width: 80px;
              height: 80px;
              opacity: .8;
              background: #F59524;
              border-radius: 50%;
              padding-top: 10px;
              color: #fff;
              text-align: center;
              box-sizing: border-box;
              // letter-spacing:-1px;
              -webkit-transform-origin-x: 0;
              
              .line1{
                font-size: 24px;
                // -webkit-transform: scale(0.90);
              }
              .line2{
                text-decoration: line-through;
                font-size: 0.2rem;
                transform: scale(0.80);
              }
            }
            img{
                width: 200px;
                height: 200px;
                position: absolute;
                right: 0;
                top: 20px;
              }
            .text{
                .fulishe{
                  font-size: 32px;
                  margin-bottom: 6px;
                }
                .dayPrice{
                  color: #666;
                }
              }
            .fuli{
              height: 215px;
              background-color: #FBE2D3;
              border-radius: 4px;
              margin-bottom: 4px;
              padding: 30px 0px 0px 30px;
              position: relative;
              box-sizing: border-box;
            }
            .xinren{
              height: 215px;
              background-color: #FFECC2;
              padding: 30px 0px 0px 30px;
              position: relative;
              box-sizing: border-box;
            }
          }
          }
      }
      // 临时
      .text1{
        height: 500px;
      }
    }
</style>