<template>
  <div class="register">
    <!-- logo -->
    <img src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">

    <!-- 表单 -->
    <div class="from">
      <van-form @submit="onSubmit">
        <van-field 
          v-model="phone2" 
          name="phone"
          :rules="[{ pattern, message: '手机号格式错误' }]"
          placeholder="请输入手机号"
          />
        <van-field
          v-model="password"
          type="password"
          name="code"
          placeholder="请输入短信验证码"
          :rules="[{ validator , message: '请输入6位短信验证码' }]"
          />
        <!-- 遇到问题 使用验证码登录区域 -->
        <div class="problems">
          <span>遇到问题 ?</span>
          <span>使用密码验证登录</span>
        </div>
        <div style="margin: 16px;">
          <button type="submit">
            提交
          </button>
        </div>
        <div class="bottom">
          <input type="checkbox" name="check" v-model="checked" value="1">
          <i @click="checked=false" v-if="checked" class="iconfont icon-xuanzhong"></i>
          <div class="serve">
            <span>我同意</span>
            <a href="##">《服务条款》</a>
            <span>和</span>
            <a href="##">《网易隐私政策》</a>
          </div>
        </div>
      </van-form>
      <div class="loginMethod">
        <span>其他登录方式</span>
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-6264a71cf0.png?imageView&type=webp" alt="">
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      phone2: null,
      password: null,
      pattern: /^1[3456789]\d{9}$/,//手机号校验规则
      code: /\d{6}/,//验证码校验规则 六位数字
    }
  },
  mounted() {
    // this.$toast('提示文案');
  },
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /\d{6}/.test(val);
    },
    //点击提交
    async onSubmit(values) {
      console.log('submit', values);
      let result = await this.$API.register({
        user:this.phone2,
        code:this.password
      })
      if(result.data.code===200){
        if(!localStorage.getItem("user")){
          localStorage.setItem("user",JSON.stringify(result.data.name))
        }
        this.$bus.$emit('isPersonal',true)
        this.$toast('登录成功');
        //跳转到首页
        this.$router.push('/responal')
      }else{
        this.$toast('密码错误');
      }
    },
  },
}
</script>
<style lang="less" scoped>

.register{
  height: 667*2-100px;
  background-color: #fff;
  position: relative;
  img{
    width: 134*2px;
    height: 90px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 5%;
  }
  .from{
    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      color: #999;
      // font-size: 20px;
      // font-weight: bolder;
      }
    height: auto;
    position: absolute;
    top: 16%;
    padding: 0px 20px;
    form{
      width: 355*2px;
      .van-cell{
        background-color: #ffffff;
        width: 100%;
        margin-bottom: 40px;
      }
      .problems{
        display: flex;
        justify-content: space-between;
        padding: 10px 30px;
        font-size: 26px;
        span:nth-of-type(1){
          color: #999;
        }
      }
      button{
        background-color: #DD1A21;
        border: none;
        width: 100%;
        height: 90px;
        border-radius: 6px;
        color: #fff;
        font-size: 28px;
      }
      input[type='checkbox']{
        margin-left: 30px;
        width: 34px;
        height: 34px;
        // background-color: pink;
        -webkit-appearance:none;
        border: 1px solid #999;
        border-radius: 2px;
        outline: none;
      }
      i{
        position: absolute;
        left: 55px;
        bottom: 1px;
      }
      .bottom{
        display: flex;
        .serve{
          margin-left: 20px;
          color: #666;
          a{
            color: #007AFF;
          }
        }
      }
    }
  }
  .loginMethod{
    position: absolute;
    bottom: -15%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 28px;
    img{
      width: 28px;
      height: 28px;
      margin-left: 111px;
      margin-top: 3px;
    }
  }

}
</style>