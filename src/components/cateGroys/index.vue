<template>
  <div class="cateGroys">
    <!-- 轮播图 -->
    <Swiper :swipeData="swiperImages"/>
    <!-- 内容区 -->
    <div class="catecontent">
      <div class="cateheader">
        <p>口碑好物</p>
        <p>口碑好物</p>
      </div>
      <div class="cateList">
        <div class="cateItem">
          <div class="cateItemHeader">
            <img src="https://yanxuan-item.nosdn.127.net/b43c746a6349d5ec44d81c043d780676.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <div class="dsc">玩味元素设计，多尺寸大满足</div>
          </div>
          <div class="name">不如睡觉·全棉印花四件套</div>
          <div class="price">
            <span>￥199</span>
            <span>￥100</span>
          </div>
        </div>
        <div class="cateItem">
          <div class="cateItemHeader">
            <img src="https://yanxuan-item.nosdn.127.net/b43c746a6349d5ec44d81c043d780676.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <div class="dsc">玩味元素设计，多尺寸大满足</div>
          </div>
          <div class="name">不如睡觉·全棉印花四件套</div>
          <div class="price">
            <span>￥199</span>
            <span>￥100</span>
          </div>
        </div>
        <div class="cateItem">
          <div class="cateItemHeader">
            <img src="https://yanxuan-item.nosdn.127.net/b43c746a6349d5ec44d81c043d780676.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <div class="dsc">玩味元素设计，多尺寸大满足</div>
          </div>
          <div class="name">不如睡觉·全棉印花四件套</div>
          <div class="price">
            <span>￥199</span>
            <span>￥100</span>
          </div>
        </div>
        <div class="cateItem">
          <div class="cateItemHeader">
            <img src="https://yanxuan-item.nosdn.127.net/b43c746a6349d5ec44d81c043d780676.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <div class="dsc">玩味元素设计，多尺寸大满足</div>
          </div>
          <div class="name">不如睡觉·全棉印花四件套</div>
          <div class="price">
            <span>￥199</span>
            <span>￥100</span>
          </div>
        </div>
        <div class="cateItem">
          <div class="cateItemHeader">
            <img src="https://yanxuan-item.nosdn.127.net/b43c746a6349d5ec44d81c043d780676.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <div class="dsc">玩味元素设计，多尺寸大满足</div>
          </div>
          <div class="name">不如睡觉·全棉印花四件套</div>
          <div class="price">
            <span>￥199</span>
            <span>￥100</span>
          </div>
        </div>
        <div class="cateItem">
          <div class="cateItemHeader">
            <img src="https://yanxuan-item.nosdn.127.net/b43c746a6349d5ec44d81c043d780676.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <div class="dsc">玩味元素设计，多尺寸大满足</div>
          </div>
          <div class="name">不如睡觉·全棉印花四件套</div>
          <div class="price">
            <span>￥199</span>
            <span>￥100</span>
          </div>
        </div>
        <div class="cateItem">
          <div class="cateItemHeader">
            <img src="https://yanxuan-item.nosdn.127.net/b43c746a6349d5ec44d81c043d780676.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <div class="dsc">玩味元素设计，多尺寸大满足</div>
          </div>
          <div class="name">不如睡觉·全棉印花四件套</div>
          <div class="price">
            <span>￥199</span>
            <span>￥100</span>
          </div>
        </div>
        <div class="cateItem">
          <div class="cateItemHeader">
            <img src="https://yanxuan-item.nosdn.127.net/b43c746a6349d5ec44d81c043d780676.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <div class="dsc">玩味元素设计，多尺寸大满足</div>
          </div>
          <div class="name">不如睡觉·全棉印花四件套</div>
          <div class="price">
            <span>￥199</span>
            <span>￥100</span>
          </div>
        </div>
        <div class="cateItem">
          <div class="cateItemHeader">
            <img src="https://yanxuan-item.nosdn.127.net/b43c746a6349d5ec44d81c043d780676.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <div class="dsc">玩味元素设计，多尺寸大满足</div>
          </div>
          <div class="name">不如睡觉·全棉印花四件套</div>
          <div class="price">
            <span>￥199</span>
            <span>￥100</span>
          </div>
        </div>
        <div class="cateItem">
          <div class="cateItemHeader">
            <img src="https://yanxuan-item.nosdn.127.net/b43c746a6349d5ec44d81c043d780676.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <div class="dsc">玩味元素设计，多尺寸大满足</div>
          </div>
          <div class="name">不如睡觉·全棉印花四件套</div>
          <div class="price">
            <span>￥199</span>
            <span>￥100</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "../swiper/index"
import PubSub from "pubsub-js"
export default {
  data() {
    return {
      swiperImages:[
        'https://yanxuan.nosdn.127.net/728554287f5fa5a529f027e2c18fc5fa.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/cef74fd25a012e636df2eb6f1b5c8eb8.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/3a61e8782c76ee48de7a48578ea6c430.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/2895a663aa000e3b00602bd34a9be106.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/79b2dbf762217e6e532f335bda4c85b3.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
      ],
      cateGroy:{},//点击每一项的数据
    }
  },
  beforeMount() {
    PubSub.subscribe('cateGroy', (msg,data)=>{
      console.log('订阅',msg);
      this.cateGroy = data
    })
  },
  beforeDestroy() {
    PubSub.unsubscribe('cateGroy');
  },
  components:{
    Swiper,
  }
}
</script>
<style lang="less" scoped>
  .cateGroys{
    margin-top: 148px;
    background-color: #eee;
    .catecontent{
      margin-top: 20px;
      height: 500px;
      background-color: #fff;
      //头部
      .cateheader{
        height: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
          &:nth-of-type(1){
            font-size: 32px;
            color: #333;
            margin-bottom: 6px;
            margin-top: 20px;
          }
          &:nth-of-type(2){
            color: #999;
          }
        }
      }
      // 内容
      .cateList{
        padding-left: 20px;
        display: flex;
        flex-wrap: wrap;
        .cateItem{
          height: 590px;
          width: 345px;
          margin-right: 20px;
          .cateItemHeader{
            img{
              width: 345px;
              height: 345px;
              display: block;
            }
            .dsc{
              height: 48px;
              background: #f1ece2;
              font-size: 18px;
              color: #9f8a60;
              letter-spacing: 0;
              white-space: nowrap;
              text-overflow: ellipsis;
              text-align: center;
              line-height: 48px;
            }
          }
          .name{
            width: 345px;
            height: 39px;
            color: #333;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            word-break: initial;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 28px;
            margin-top: 20px;
          }
          .price{
            height: 48px;
            color: #dd1a21;
            font-size: 32px;
            margin-left: -5px;
            display: flex;
            align-items: center;
            letter-spacing: -1px;
            span{
              &:nth-of-type(2){
                font-size: 26px;
                color: #999;
                text-decoration: line-through;
                margin-left: 10px;
              }
            }
          }
        }
      }
    }
  }
</style>