<template>
  <div>
    <!-- 搜索 -->
    <div class="search" @click="toSearch">
      <div class="in">
        <i></i>
        <span>搜索商品, 共34101款好物</span>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="left" @click="changeActive">
        <ul>
          <li
          :class="{active:active===item.name}"
          v-for="(item, index) in cateGroys" 
          :data-name="item.name" 
          :key="index">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="right" v-if="cateGroy.subCateList">
        <div class="titleImage">
          <img :src="cateGroy.imgUrl">
        </div>
        <!-- <div v-if="cateGroy.subCateList"> -->
          <div class="imageItem" v-for="(item, index) in cateGroy.subCateList.slice(0,9)" :key="index">
            <img :src="item.wapBannerUrl" alt="">
            <span>{{item.frontName}}</span>
          </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active:"",
      cateGroys:[],//请求的数据
      // cateGroy:{},//每一项的数据
    }
  },
  async mounted() {
    //获取分类数据
    let result = await this.$API.getCateGroy()
    this.cateGroys = result.data
    this.active = result.data[0].name
    // this.cateGroy = result.data[0]
  },
  methods: {
    //跳转到搜索页面
    toSearch(){
      this.$router.push('/search')
    },
    //点击切换状态，利用事件委托和自定义属性data 
    changeActive(e){
      if(e.target.nodeName==="LI"){
        this.active=e.target.dataset.name
      }
    },
  },
  computed: {
    cateGroy(){
      return this.cateGroys.find(item=>item.name===this.active)||{}
    }
  },
}
</script>
<style lang="less" scoped>
  .search{
    display: flex;
    height: 88px;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: #ffffff;
    .in{
      width: 92%;
      height: 56px;
      background-color: #ededed;
      border-radius: 8px;
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
        left: 26%;
        top: 14px;
      }
    }
  }
  .content{
    background-color: #fff;
      box-sizing: border-box;
      border-top: 1px solid #f5f5f5;
      height: 1197px;
      display: flex;
      .left{
        width: 162px;
        height: 100%;
        border-right: 1px solid #f5f5f5;
        box-sizing: border-box;
        padding-top: 50px;
        ul{
          li{
            height: 50px;
            font-size: 28px;
            text-align: center;
            color: #333;
            margin-bottom: 40px;
            position: relative;
            &.active{
              color: #ab2b2b;
            }
            &.active::after{
              position: absolute;
              content: '';
              left: 0;
              top: -2px;
              background-color: #ab2b2b;
              width: 6px;
              height: 50px;
            }
          }
        }
      }
      .right{
        width: 588px;
        padding: 30px 0px 0px 30px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        height: 0px;
        .titleImage img{
          width: 528px;
          height: 192px;
          margin-bottom: 30px;
        }
        .imageItem{
          width: 144px;
          height: 216px;
          text-align: center;
          margin-right: 36px;
          img{
            width: 100%;
            height: 144px;
          }
        }
      }
    }
</style>