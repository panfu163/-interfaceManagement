<template>
  <div class="login">
    <div class="box">
      <div class="left">
        <img src="@/assets/img/management/login.png" height="659" width="737" />
      </div>
      <div class="right">
        <div class="login-box">
          <h3>用户名</h3>
          <input class="input" placeholder="请输入您的用户名" type="text" />
          <input class="input" placeholder="请输入您的密码" type="text" />
          <button class="btn" @click="Login()">登 录</button>
          <div class="forget">忘记密码?</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>版权所有 贵州钱多多科技有限公司</p>
      <p>@2019 diandi 京公网安备11000002000001号</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.login {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #24282c;
  padding: 10px;
  box-sizing: border-box;
  min-width: 1200px;
  margin: 0 auto;
  .box {
    padding: 0 20px;
    display: flex;
    position: relative;
    overflow: hidden;
    .left {
      flex: 1;
      img {
        display: block;
        width: 60%;
        height: auto;
        margin: 18% auto 0;
      }
    }
    .right {
      padding: 10px;
      flex: 1;
      .login-box {
        background: #fff;
        padding: 20px;
        border-radius: 10px;
        width: 50%;
        box-sizing: border-box;
        margin: 20% auto 0;
        h3 {
          margin: 20px 0;
        }
        .input {
          width: 100%;
          margin-bottom: 20px;
          box-sizing: border-box;
          padding: 0 20px;
          height: 50px;
          border: 1px solid #999;
          border-radius: 10px;
          outline: none;
          -webkit-appearance: none;
          color: #24282c;
        }
        .btn {
          width: 100%;
          margin: 50px auto 10px;
          box-sizing: border-box;
          padding: 0 20px;
          height: 50px;
          border: 1px solid #00c1de;
          border-radius: 10px;
          outline: none;
          -webkit-appearance: none;
          background: #00c1de;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
        }
        .forget {
          text-align: right;
          cursor: pointer;
          color: #999;
          font-size: 12px;
        }
      }
    }
  }
  .footer {
    text-align: center;
    color: #fff;
    line-height: 30px;
    margin: 10% auto 10px;
    font-size:12px;
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    getLogin(){
      this.$ajax("/Request2/GetShopListForVIP",{
                page: 1,
                pageSize: 10,
                cityCode: "310100",
                Longitude: 106.70833,
                Latitude: 26.558015
              },
              data => {
              console.log("返回的数据信息===================");
                console.log(data);
              },
              error => {
                console.log(error);
              });
    },
    Login(){
      localStorage.setItem("userInfo","panfu");
      this.$router.push({ path: '/interfaceManagement' });
    }
  },
  mounted() {
  },
  computed: {},
  components: {

  }
};
</script>
