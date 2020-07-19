<template>
  <div class="navBottom" >
      <div @click="changeActive('home')">
        <router-link to="/home"  class="navItem" data-name="home">
          <i :class="{active:activeFlag==='home'}"></i>
          <span :class="{active:activeFlag==='home'}">首页</span>
        </router-link>
      </div>
      <div @click="changeActive('classify')">
        <router-link to="/classify" class="navItem">
        <i :class="{active:activeFlag==='classify'}"></i>
        <span :class="{active:activeFlag==='classify'}">分类</span>
      </router-link>
      </div>
      <div @click="changeActive('DeserveBuy')" >
        <router-link to="/DeserveBuy" class="navItem">
          <i :class="{active:activeFlag==='DeserveBuy'}"></i>
          <span :class="{active:activeFlag==='DeserveBuy'}">值得买</span>
        </router-link>
      </div>
      <div @click="changeActive('carShop')" >
        <router-link to="/carShop" class="navItem">
          <i :class="{active:activeFlag==='carShop'}"></i>
          <span :class="{active:activeFlag==='carShop'}">购物车</span>
        </router-link>
      </div>
      <div @click="changeActive('personal')" >
        <router-link to="/personal" class="navItem">
          <i :class="{active:activeFlag==='personal'}"></i>
          <span :class="{active:activeFlag==='personal'}">个人</span>
        </router-link>
      </div>
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
  data() {
    return {
      activeFlag:'home',//选中的标识
    }
  },
  methods:{
    changeActive(type){
      this.activeFlag = type
    }
  },
  computed:{
    ...mapState({
      data:state=>state.data
    })
  }
}
</script>
<style >
  .navBottom{
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 98px;
    justify-content: space-around;
    align-items: center;
  }
  .navBottom .navItem{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  .navBottom .navItem i{
    width: 40px;
    height: 40px;
    background-size: 40px;
    margin-bottom: 2px;
  }
  /* 颜色的选中状态 */
  .navBottom .navItem .active{
    color: #DD1A21;
  }
  /* 背景图是设置 */
  .navBottom div:nth-of-type(1) i{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: -250px;
  }
  .navBottom div:nth-of-type(1) i.active{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: -200px;
  }
  
  .navBottom div:nth-of-type(2) i{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: -150px;
  }
  .navBottom div:nth-of-type(2) i.active{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: -100px;
  }

  .navBottom div:nth-of-type(3) i{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: -350px;
  }
  .navBottom div:nth-of-type(3) i.active{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: -300px;
  }

  .navBottom div:nth-of-type(4) i{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: -50px;
  }
  .navBottom div:nth-of-type(4) i.active{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: 0px;
  }

  .navBottom div:nth-of-type(5) i{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: -450px;
  }
  .navBottom div:nth-of-type(5) i.active{
    background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp');
    background-position-y: -400px;
  }
</style>