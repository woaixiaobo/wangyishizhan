<template>
  <div class="searchContainer">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        :placeholder="placeholder"
        @search="onSearch"
        @cancel="onCancel"
      />
  </form>
  <div class="searchContent">
    <div class="title">热门搜索</div>
    <ul class="content" v-if="searchList">
      <li v-for="(item, index) in searchList.hotKeywordVOList" :key="index">
        {{item.keyword}}
      </li>
    </ul>
    
  </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      value:'',
      placeholder:'请输入搜索关键词',
      searchList:[],//首次搜索数据的热门搜索
    }
  },
  async mounted(){
    //获取首次搜索数据
    let result = await this.$API.getSearchFirst()
    // console.log(result.data.data);
    this.placeholder = result.data.data.defaultKeyword.keyword
    this.searchList = result.data.data;
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      // Toast('取消');
      //回到首页
      this.$router.push('/home')
      this.$bus.$emit('isPersonal',true)
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
}

</style>