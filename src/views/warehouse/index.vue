<!---
 --@author  PanFu
 --@data 2019-08-30 16:19
 --@description activity.v1.0-List
 --@version 1.0
--->
<template>
  <div class="product">
    <div>产品</div>
  </div>
</template>
<style lang="scss" scoped>
.product {
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    shopList() {
      this.$http.ajax(
        "/Request2/GetShopListForVIP",
        {
          page: 1,
          pageSize: 10,
          cityCode: "310100",
          Longitude: 106.70833,
          Latitude: 26.558015
        },
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    },
    Jsonp() {
      this.$http.jsonp(
        "https://ztxc.cyzl.com/home/GetData",
        {},
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
    }
  },
  mounted() {
    this.shopList(); //测试数据
    //this.Jsonp(); //测试跨域
  }
};
</script>
