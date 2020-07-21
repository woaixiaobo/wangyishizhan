<template>
  <div>
    <van-swipe  ref="vanSwiper" @change="onChange" class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swipeData" :key="index">
        <!-- 懒加载图片 -->
        <!-- <img  v-lazy="item" > -->
        <img  :src="item" >
      </van-swipe-item>
      <template #indicator>
        <div class="container" >
          <div @click="changeSwiperItem(index)" v-for="(item, index) in swipeData" 
              :key="index" class="custom-indicator"
              :class="{active:index===current}"
              >
          </div>
        </div>
      </template>
    </van-swipe>
  </div>
</template>
<script>
export default {
  props:{
    swipeData:Array,
  },
  data() {
    return {
      current:0,//轮播的下标
    }
  },
  methods: {
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
}
</script>
<style lang="less" scoped>
  .my-swipe {
        height: 320px;
        width: 750px;
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
</style>