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
    </div>
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
        li{
          display: flex;
          flex-direction: column;
          color: rgb(51, 51, 51);
          width: 110px;
          height: 156px;
          padding: 0 20px;
          text-align: center;
          img{
            width: 110px;
            height: 110px;
            margin-bottom: 10px;
          }
        }
      }
      // 新人
      .newPerson{
        height: 548px;
        .top{
          width: 100%;
          height: 321px;
          background: url("https://yanxuan.nosdn.127.net/d9b021de430394e9b274bf0455b53120.gif?imageView&quality=75");
          background-size: 100%;
        }
      }
    }
</style>