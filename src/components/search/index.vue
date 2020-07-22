<template>
  <div class="searchContainer">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        :placeholder="placeholder"
        @search="onSearch"
        @cancel="onCancel"
        @clear="onClear"
      />
  </form>
  <!-- 初始显示区域 -->
  <div v-if="isShow" class="searchContent">
    <div class="title">热门搜索</div>
    <ul class="content" v-if="searchList">
      <li v-for="(item, index) in searchList.hotKeywordVOList" :key="index">
        {{item.keyword}}
      </li>
    </ul>
    
  </div>
  <ul v-else class="inSearchContent">
    <li v-for="(item, index) in inSearchList" :key="index">
      <span>{{item}}</span>
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-right-f33ab6b984.png?imageView&type=webp" alt="">
    </li>
  </ul>
  </div>
</template>
<script>
import { Toast } from 'vant';
//引入全部的lodash
import _ from 'lodash'
export default {
  data() {
    return {
      value:'',//输入的内容
      isShow:true,//初始显示区域是否显示
      placeholder:'请输入搜索关键词',
      searchList:[],//首次搜索数据的热门搜索
      inSearchList:[],//搜索时的数据
      debounced:null,
    }
  },
  async mounted(){
    //获取首次搜索数据
    let result = await this.$API.getSearchFirst()
    // console.log(result.data.data);
    this.placeholder = result.data.data.defaultKeyword.keyword
    this.searchList = result.data.data;
    
  },
  watch: {
    value(v){
      if(v){
        this.isShow = false
        //发送请求搜索
        // this.inSearch(v)
        //防抖
        _.debounce(async(v)=>{
          let result = await this.$API.getSearch(v)
          this.inSearchList = result.data.data
          console.log(v);
        },500,{
          'leading': true,
          'trailing': false
        })(v)
      }else{
        this.isShow = true
      }
    }
  },
  methods: {
    //搜素时触发的回调
    async inSearch(keywordPrefix){
      let result = await this.$API.getSearch(keywordPrefix)
      this.inSearchList = result.data.data
    },
    onSearch(val) {
      Toast(val);
    },
    //点击清除X号时触发
    onClear(){
      
    },
    //点击取消时触发
    onCancel() {
      // Toast('取消');
      if(this.$route.query.perRoute==='personal'){
        this.$bus.$emit('isPersonal',false)
      }else{
        this.$bus.$emit('isPersonal',true)
      }
      
      //回到首页
      // console.log(this.$route.query.perRoute);
      this.$router.push(this.$route.query.perRoute)
    },
  },
}
</script>
<style lang="less" >
body{
  background-color: #eee;
  .van-search--show-action{
    height: 88px;
    padding-top: 20px;
    .van-search__content{
      height: 56px;
      line-height: 56px;
      align-items: center;
      background-color: #f4f4f4;
      .van-icon-search::before{
        font-size: 40px;
        color: #666;
      }
    }
  }
  .searchContent{
    width: 100%;
    height: 360px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 30px;
    .title{
      height: 90px;
      color: #999;
      font-size: 28px;
      line-height: 90px;
    }
    .content{
      display: flex;
      flex-wrap: wrap;
      white-space: nowrap;
      li{
        box-sizing: border-box;
        padding: 0px 14px;
        height: 48px;
        line-height: 46px;
        border: 1px solid #999;
        border-radius: 6px;
        margin-right: 28px;
        margin-bottom: 40px;
        &:nth-of-type(odd){
          border: 1px solid #DD1A21;
          color: #DD1A21;
        }
      }
    }
  }
  // 搜索时显示的内容
  .inSearchContent{
    padding: 25px;
    padding-left: 30px;
    padding-bottom: 0px;
    background-color: #ffffff;
    font-size: 28px;
    li{
      height: 90px;
      line-height: 90px;
      border-bottom: 1px solid #f4f4f4;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:nth-last-of-type(1){
        border: none;
      }
      img{
        margin-top: 5px;
        width: 50px;
        height: 50px;
      }
    }
  }
}

</style>