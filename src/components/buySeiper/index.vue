<template>
  <div class="swiper-container">
    <div class="swiper-wrapper" >
      <div class="swiper-slide" v-for="(item, index) in swiperDate.navList" :key="index">
        <div class="slideItem">
          <img :src="item.picUrl" alt="">
          <div class="texcontent">
            <p>{{item.mainTitle}}</p>
            <p>{{item.viceTitle}}</p>
          </div>
        </div> 
      </div>
      <!-- <div class="swiper-slide">
        <div class="slideItem">
          <img src="https://yanxuan.nosdn.127.net/e21381b7e1e7caebbe72488db9542163.gif" alt="">
          <div class="texcontent">
            <p>9.9超值</p>
            <p>爆品定价直降</p>
          </div>
        </div> 
      </div> -->
    </div>
    <!-- Add Pagination -->
    <!-- <div class="swiper-pagination"></div> -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  data() {
    return {
      swiperDate:{},//轮播数据
      }
  },
  async mounted() {
      // 请求数据
      await this.getNavWap();
      //初始化轮播
      this.$nextTick(()=>{
        this.initSwiper();
      })
  },
  methods: {
    initSwiper(){
      let mySwiper = new Swiper('.swiper-container', {
        slidesPerView :4,
        // slidesPerGroup : 1,
        slidesPerColumn: 2,
        // spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          dragSize:20
        },
      });
      //拖动条的颜色
      mySwiper.scrollbar.dragEl.style.background='red';
      // console.log(mySwiper.scrollbar.dragEl.style.background);
    },
    //请求
    async getNavWap(){
      let result = await this.$API.getWangyi();
      this.swiperDate = result.data.data
    }
  },
}
</script>

<style lang="less" scoped>
  .swiper-container {
      width: 100%;
      height: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      // ---swiper-theme-color: #ff6600;
      // --swiper-pagination-color: #00ff33;/* 两种都可以 */
      text-align: center;
      font-size: 18px;
      background: #fff;
      height: calc((100% - 30px) / 2);
      width: 90*2px;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      .slideItem{
        width: 100%;
        height: 100.5*2px;
        text-align: center;
        margin-right: 20px;
        img{
          width: 60*2px;
          height: 60*2px;
        }
        .texcontent{
          width: 90*2px;
          p{
            text-align: center;
            &:nth-of-type(1){
              font-weight: 700;
              font-size: 28px;
            }
            &:nth-of-type(2){
              color: #999;
              font-size: 14px;
            }
          }
        }
      }

    }
    .swiper-container-horizontal > .swiper-scrollbar{
      height: 5px;
      width: 200px;
      left: 50%;
      transform: translateX(-50%);
    }
</style>