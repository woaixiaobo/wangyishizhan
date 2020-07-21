<template>
  <div>
    <!-- 搜索 -->
    <div class="search"></div>
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
        <div class="imageItem" v-for="(item, index) in cateGroy.subCateList.slice(0,9)" :key="index">
          <img :src="item.wapBannerUrl" alt="">
          <span>{{item.frontName}}</span>
        </div>
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
    //点击切换状态，利用事件委托和自定义属性data 
    changeActive(e){
      if(e.target.nodeName==="LI"){
        this.active=e.target.dataset.name
      }
    },
  },
  computed: {
    cateGroy(){
      return this.cateGroys.find(item=>item.name===this.active)
    }
  },
}
</script>
<style lang="less" scoped>
  .search{
    height: 88px;
  }
  .content{
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