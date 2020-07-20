<template>
  <div class="searchContainer">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
  </form>
  <div class="searchContent">
    <div class="title">热门搜索</div>
    <ul class="content">
      <li>三伏天</li>
      <li>拖鞋</li>
      <li>三伏天</li>
      <li>拖鞋</li>
      <li>三伏天</li>
      <li>拖鞋</li>
      <li>三伏天</li>
      <li>拖鞋</li>
    </ul>
    
  </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      value:''
    }
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      // Toast('取消');
      //回到首页
      this.$router.push('/home')
    },
  },
}
</script>
<style lang="less" >
body{
  background-color: rgb(236, 233, 233);
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
      // justify-content: space-around;
      white-space: nowrap;
      li{
        box-sizing: border-box;
        padding: 0px 14px;
        height: 48px;
        line-height: 46px;
        border: 1px solid #DD1A21;
        border-radius: 4px;
        margin-right: 40px;
        margin-bottom: 40px;
      }
    }
  }
}

</style>