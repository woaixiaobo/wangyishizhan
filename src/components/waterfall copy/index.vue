<template>
  <div class="container-water-fall water-content" >
    <waterfall :col='col' :gutterWidth="gutterWidth"  :data="WaterFish"  @loadmore="loadmore"  @scroll="scroll"  >
      <template >
        <div class="cell-item" v-for="(item,index) in WaterFish" :key='index'>
          <img v-if="item" :src="item.picUrl" alt="加载错误"  /> 
          <div class="item-body">
              <div class="item-desc">{{item.title}}</div>
              <div class="item-footer">
                  <div class="left">
                    <div class="avatar" :style="{backgroundImage : `url(${item.avatar})` }"></div>
                    <div class="name">{{item.nickname}}</div>
                  </div>
                  <div class="like" v-if="item.buyNow" :class="item.liked?'active':''" >
                      <span>{{item.buyNow.itemName}}</span>
                      <span>去购买
                        <img src="data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF
                          FmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0w
                          TXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRh
                          LyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2
                          LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3Jn
                          LzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0i
                          IiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRw
                          Oi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMu
                          YWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNv
                          bS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9z
                          VHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0Mg
                          KE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTAzLTA2VDE2OjA0OjM2KzA4OjAwIiB4
                          bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNC0yM1QxMDo1MDoyOSswODowMCIgeG1wOk1ldGFkYXRhRGF0
                          ZT0iMjAxOS0wNC0yM1QxMDo1MDoyOSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rv
                          c2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIu
                          MSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMGQ3ZWRiMS0xMmUzLTRkOWEtYWI3Zi1hYTE1
                          ODE0MTcwMjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTBkN2VkYjEtMTJlMy00ZDlhLWFi
                          N2YtYWExNTgxNDE3MDIxIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MTBkN2Vk
                          YjEtMTJlMy00ZDlhLWFiN2YtYWExNTgxNDE3MDIxIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2Vx
                          PiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlp
                          ZDoxMGQ3ZWRiMS0xMmUzLTRkOWEtYWI3Zi1hYTE1ODE0MTcwMjEiIHN0RXZ0OndoZW49IjIwMTkt
                          MDMtMDZUMTY6MDQ6MzYrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hv
                          cCBDQyAoTWFjaW50b3NoKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVz
                          Y3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5r+vIf
                          AAAAq0lEQVQokY3QsWoCQRAG4O+2TSFod4LgFmnFRxCSB0iXdxTfQPEBLNKK4HYXUqUNSXMW5kTw
                          3HWqKb75Z5jqWE+XGOA9NunbnQqY4BXrNI7DHHzDAfMcDrFJn1iUcIBHcOiaEg7XUzlctW17c3ga
                          xxpbPOMDL72wB29DrzrXL37++6d7q0fYYIY9FjeJfSg26Ss8grh6Tw5dYAlBdaynRdQlrkqog3/Y
                          5RCcAMqEXmta9JloAAAAAElFTkSuQmCC" alt="">
                        </span> 
                  </div>
                  <!-- <div class="like" :class="item.liked?'active':''" >
                      <i ></i>
                      <div class="like-total">{{item.liked}}</div>  
                  </div> -->
              </div>
          </div>
        </div>
      </template>
    </waterfall>
  </div>
</template>

<script>
export default{
  data(){
    return{
        WaterNum:1,//触底瀑布的次数
        WaterFish:[],//处理完成的数组，包含topics和look
        data:[
          {
            img:
              "https://image.watsons.com.cn//upload/8a316140.png?w=377&h=451&x-oss-process=image/resize,w_1080",
            avatar:
              "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
            title: "最近浴室新宠，日系神仙好物了解一下～",
            user: "www",
            like: "953"
          },
          {
            img:
              "https://image.watsons.com.cn//upload/083767f0.JPG?w=828&h=620&x-oss-process=image/resize,w_1080",
            avatar:
              "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
            title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
            user: "迷人的小妖精迷人的小妖精",
            like: "952"
          },
          {
            img:
              "https://image.watsons.com.cn//upload/02a4f38d.jpg?w=1067&h=1067&x-oss-process=image/resize,w_1080",
            avatar:
              "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
            title: "最近浴室新宠，日系神仙好物了解一下～",
            user: "迷人的小妖精迷人的小妖精",
            like: "953"
          },
          {
            img:
              "https://image.watsons.com.cn//upload/589585c1.jpeg?x-oss-process=image/resize,w_1080",
            avatar:
              "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
            title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
            user: "迷人的小妖精迷人的小妖精",
            like: "953"
          },
          {
            img:
              "https://image.watsons.com.cn//upload/8a316140.png?w=377&h=451&x-oss-process=image/resize,w_1080",
            avatar:
              "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
            title: "最近浴室新宠，日系神仙好物了解一下～",
            user: "www",
            like: "953"
          },
          {
            img:
              "https://image.watsons.com.cn//upload/083767f0.JPG?w=828&h=620&x-oss-process=image/resize,w_1080",
            avatar:
              "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
            title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
            user: "迷人的小妖精迷人的小妖精",
            like: "952"
          },
          {
            img:
              "https://image.watsons.com.cn//upload/02a4f38d.jpg?w=1067&h=1067&x-oss-process=image/resize,w_1080",
            avatar:
              "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
            title: "最近浴室新宠，日系神仙好物了解一下～",
            user: "迷人的小妖精迷人的小妖精",
            like: "953"
          },
          {
            img:
              "https://image.watsons.com.cn//upload/589585c1.jpeg?x-oss-process=image/resize,w_1080",
            avatar:
              "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
            title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
            user: "迷人的小妖精迷人的小妖精",
            like: "953"
          },
        ],
        col:2,
    }
  },
  mounted() {
    //请求瀑布流数据
    this.initWaterFall()
  },
  computed:{
    itemWidth(){  
      return (138*0.5*(document.documentElement.clientWidth/375))  //rem布局 计算宽度
    },
    gutterWidth(){
      return (9*0.5*(document.documentElement.clientWidth/375))	//#rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
    }
  },
  methods:{
    //初始化请求数据
    async initWaterFall(page=1,size=10){
      let result = await this.$API.getWaterArgin({page,size});
      console.log(result.data.data.result);
      this.WaterArgin = result.data.data.result
      //得到的数组
      let arr = result.data.data.result
      //定义一个数组容器
      let data = arr.map(item=>{
        let look = item.look;
        let topics = item.topics;
        let arr = []
        return arr.concat(topics,look)
      })
      // let {WaterFish} = this
      let finsh=data.flat()
      // console.log(this.WaterFish.concat(finsh,this.WaterFish));   
      // this.WaterFish = data.flat();
      this.WaterFish = this.WaterFish.concat(finsh,this.WaterFish)
    },
    scroll(){
      // console.log(scrollData)
    },
    switchCol(col){
      this.col = col
      console.log(this.col)
    },
    loadmore(){
      this.WaterNum+=1
      this.initWaterFall(this.WaterNum,5);
    }
  }
}
</script>
<style lang="less" scoped>
.water-content{
  box-sizing: border-box;
  padding: 20px 20px 0px 20px;
  background-color: #eee;
  .cell-item{
    // width: 172.5*2px;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 6px;
    margin-top: 10px;
    border-radius: 10px;
    background: #fff;
    img{
      width: 100%;
      border-radius: 10px;
      // transform: scale(1.8);
      // height: 172.5*2px;
    }
    .item-body{
      .item-desc{
        box-sizing: border-box;
        width: 171.5*2px;
        // height: 49*2px;
        font-size: 28px;
        color: #333;
        padding: 10px 10px 20px 10px;
      }
      .item-footer{
        width: 171.5*2px;
        padding: 10px 10px 0px 10px;
        // display: flex;
        .left{
          height: 44.5*2px;
          margin-bottom: -10px;
          .avatar{
            display: inline-block;
            width: 24*2px;
            height: 24*2px;
            border-radius: 50%;
            margin-bottom: -12px;
            background-size: 100%;
          }
          .name{
            display: inline-block;
            color: #999;
            margin-left: 10px;
            margin-top: 10px;
          }
          }
          .like{
            height: 40*2px;
            margin-top: -20px;
            border-top: 2px solid #eee;
            display: flex;
            span{
              &:nth-of-type(1){
                display: inline-block;
                line-height: 80px;
                width: 103.5*2px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              &:nth-of-type(2){
                line-height: 80px;
                color: #DD1A21;
                margin-left: 10px;
                img{
                  width: 10px;
                  height: 18px;
                }
              }
            }
          }
      }
    }
  }
























  // .cell-item {
  //   width: 100%;
  //   background: #ffffff;
  //   overflow: hidden;
  //   box-sizing: border-box;
  //   border-radius: 6px;
  //   margin-top: 10px;
  //   img {
  //     // border-radius: 12px 12px 0 0;
  //     width: 100%;
  //     height: auto;
  //     display: block;
  //   }
  //   .item-body {
  //     // border: 1px solid #F0F0F0;
  //     padding: 12px;
  //     .item-desc {
  //       font-size: 15px;
  //       color: #333333;
  //       line-height: 40px;
  //       font-weight: bold;
  //     }
  //     .item-footer {
  //       margin-top: 22px;
  //       position: relative;
  //       display: flex;
  //       align-items: center;
  //       .avatar {
  //         width: 44px;
  //         height: 44px;
  //         border-radius: 50%;
  //         background-repeat: no-repeat;
  //         background-size: contain;
  //       }
  //       .name {
  //         max-width: 150px;
  //         margin-left: 10px;
  //         font-size: 14px;
  //         color: #999999;
  //       }
  //       .like {
  //         position: absolute;
  //         right: 0;
  //         display: flex;
  //         align-items: center;
  //         &.active {
  //           i {
  //           }
  //           .like-total {
  //             color: #ff4479;
  //           }
  //         }
  //         i {
  //           width: 28px;
  //           display: block;
  //         }
  //         .like-total {
  //           margin-left: 10px;
  //           font-size: 12px;
  //           color: #999999;
  //         }
  //       }
  //     }
  //   }
  // }
  
}
</style>