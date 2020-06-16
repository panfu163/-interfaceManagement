<!---
 --@author  PanFu
 --@data 2019-08-30 16:19
 --@description activity.v1.0-List
 --@version 1.0
--->
<template>
  <div class="product">
    <div
      id="container"
      style="height:300px;width:100%;box-sizing: border-box"
    ></div>
    <div>
      <h3>定位信息：</h3>
      {{ mapData }}
    </div>
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
import AMap from "../../../public/static/js/common/AMap.js";
export default {
  data() {
    return {
      mapData: ""
    };
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
    let $this = this;
    AMap().then(
      AMap => {
        console.log("地图加载成功");
        $this.map = new AMap.Map("container", {
          center: [117.000923, 36.675807],
          zoom: 11
        });

        $this.$Map.getSessionLocation(location => {
          console.log(location);
          $this.mapData = location;
        });
      },
      e => {
        console.log("地图加载失败", e);
      }
    );
  }
};
</script>
