<template>
  <div class="buy">
    <!-- 头部 -->
    <div class="buyHeader">
      <span class="homeIcon"></span>
      <span class="text">值得买</span>
      <div class="twoIcon">
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- 卡片区域 -->
    <div class="swiperTabContainer">
      <div class="swiperTab">
        <img src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt="">
        <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
        <div class="title">
          <span>严选好物</span>
          <span>用心生活</span>
        </div>
      </div>
    <!-- 滑动区域 -->
      <div class="scroll">
        <BuySwiper/>
      </div>
    </div>
  </div>
</template>
<script>
import BuySwiper from "../../components/buySeiper/index"
// import BuySwiper from "../../components/swiper-buy/index"
export default {
  components:{
    BuySwiper,
  }
}
</script>
<style lang="less" scoped>
  .buy{
    background-color: #eee;
    height: 100vh;
    .buyHeader{
      width: 100%;
      height: 100px;
      padding: 27px 30px;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      .homeIcon{
        width: 46px;
        background:no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAhFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPF5ewFAAAAK3RSTlMAcNAP9uD9Bfrx5B8v6LSdTgr37N/Uxb14Gtm5r6aVjWhgVTkUgTYpp0pCSlNj4QAAATNJREFUSMfd0+tugyAYBmAUREXtwbNW7Vptu+29//tbsolkahSTbVn6/oM8An4fkKeLL4Kjvn5zgbTT1S8ccYTS08J2A2TUKyF8DX3cAXubkC6F+76qPRPI5XfOda0kAZg09h4wFvWBIbir4Q04L2iDI/FGNXq1J0xtfqKT7TI6q+kJaCZLtRHMYq4kCfjcjz0sWI/J7D0AO5C5FCaidjR3ZaqJ01OOV8qhTjiNXYPn30uyW7ywZ6gG0AyobbKYCth/Ea8EFwZZjgHeH6CCe8M6b1zsPhtd+4YGN/y4koNFrsSf8zZGn+CgwTNYfXiiwU3I++1av8qFBo8VZxqcDZw5m7izjXM93m3hEbwtPEEhebip7qH4ma5eIEyZ0JGvXDjmEIGL4jTFkDAfFmFQSSn5d/kA8eoi0xqdj94AAAAASUVORK5CYII=);
        background-size: 46px;
      }
      .text{
        font-size: 36px;
        line-height: 45px;
        margin-left: 60px;
      }
      .twoIcon{
        display: flex;
        span{
          width: 46px;
          &:nth-of-type(1){
            background: no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAKlBMVEUAAAA0NDQ0NDQ0NDQ0NDQ0NDQzMzMUFBQ0NDROTk4zMzMzMzMzMzM2NDTc2xHNAAAADXRSTlMAbezXT6YsFM0O+L+FggY9rwAAAP5JREFUOMtjIBOwiTat0ghMQBeeaHsXBC5Logoz6l4KTGcoE9W9JIBiSO9tBzCDZe8NZKOcLgOFIRK2KghhlrWRcPbUWw5wttcdJL1nl8BN1z2AJM5zCWYDx1UUt8U2QBmylijiky9CaE5dBxRxlksTIH66jeb3vRC/MV9BE/c1AFO5CmjiTNcg1gagibNCLI4VQBNnhLi7NwE9Km6AKd0CNHH2S2BqLUbc3cIljsscXPbicicuf+EKB1zhhiuc8cYLZjzij3fMdII9XV3Bng7vXi7Amm4Vbc2xp/NisAbMfMEO0YCZj8AaMPMdTAMmQGhAAPwabmAXZ+9mIBUAAIJuXNa9gIYoAAAAAElFTkSuQmCC);
            background-size: 46px;
          }
          &:nth-of-type(2){
            margin-left: 40px;
            background:no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAk1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM1idyXAAAAMHRSTlMAYbmIKS7ss/BPwREDeAjlt52EIc3HQTs3JRv53djTjn5XFQ2+p6JH9K+XZDJzb12hgxUyAAABlElEQVRIx82V23KCMBCGV8AYAgLlrChaz4ce/vd/utopKks10YvO9LvaMN+E7OZnoP9FCGDgPKzv63SC1KPHWWQ40hMcMXtG32JTHHtGkkbvV1EEM1mje5n8eLf1xLYANRzwSkamu3P1gdhoFyI9ly4GgUn/rNbnsi/DkUkfXk/gZchN+gt6l/pwqg2sUFzqd9gG20+R0LXXaKnXk4kYXxZ9Yeo1l9k1tkuFQq/3sAlafZvuNcbc51PVsmH7ubD0vVooWysnlNpegxROe6lQ6vRR2Jqjude8Uh5PkK0P2EtArNf92rqP6LzcCScSGuYBj5CC69xn5BNnDZeeYA7bf0J3qxXXjYHO+/dIfu+U4T5VvOgeRqC2UkCsB20UIL7HvvKYPQ4xW9Byjqnf+SzqnKioMQv4LUdNdmZsFynKn69zN2IRa8ZewmKXjdVPEeHtth5xXd3Uh82um85hhCzoxJuQCftBTXAYkxdDsMf+qfct0XYKm2dsu8NU1cAnMZYDSKUELI845R6AlVMHbygAOVzQn/MFg0s1dXIHznQAAAAASUVORK5CYII=);            background-size: 46px;
          }
        }
      }
    }
    // 卡片区域
    .swiperTabContainer{
      position: relative;
      height: 685px;
      .swiperTab{
        height: 262*2px;
        position: relative;
        img{
          height: 259*2px;
          &:nth-of-type(2){
            width: 62*2px;
            height: 34.5*2px;
            position: absolute;
            left: 10px;
            top: 60px;
          }
        }
        .title{
          position: absolute;
          left: 146px;
          top: 76px;
          color: #fff;
          font-size: 32px;
          span:nth-of-type(1){
            margin-right: 10px;
          }
        }
      }
      .scroll{
        position: absolute;
        top: 140px;
        margin-left: 20px;
        width: 355*2px;
        height: 270*2px;
        background-color: #fff;
        border-radius: 20px;
        box-sizing: border-box;
        padding: 40px 10px;
      }
    }
  }
</style>