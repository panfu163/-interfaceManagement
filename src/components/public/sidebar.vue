<!---
 --@author  PanFu
 --@data 2019-07-13:56
 --@description MOJOWeb-left 左侧导航
 --@version 1.0
--->
<template>
  <div class="sidebar">
    <div class="title">
      <img src="@/assets/logo.png" />
    </div>
    <ul class="miansub">
      <li
        v-for="(item, index) in navigations"
        :key="index"
        :class="{ active: isIndex == index }"
        @click="getNavigation(index, item.url)"
      >
        <i :class="item.icon"></i>{{ item.title }}
      </li>
    </ul>
    <div class="help"><i class="el-icon-warning-outline"></i>{{ $t("sidebar.help") }}</div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width:117px;
  background-color:#273543;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  flex-direction: column;
  overflow: hidden;
  z-index: 2;
  .title {
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
    font-size: 18px;
    width: 100%;
    overflow: hidden;
    img {
      width: 30px;
      height: auto;
      border-radius: 50%;
      background: #fff;
      margin: 10px auto;
      display: block;
    }
  }
  .miansub {
    width: 100%;
    text-align: center;
    li {
      display:flex;
      width: 100%;
      color: #c8c9cc;
      text-align: left;
      cursor: pointer;
      font-size: 14px;
      overflow:hidden;
      line-height: 1;
      padding:10px 10px;
      &.active {
        @include background("background");
        color:$white;
      }
      i {
        padding-right: 5px;
      }
    }
  }
  .help {
    position: absolute;
    left: 0;
    bottom: 0;
    text-align: center;
    padding: 10px;
    font-size: 12px;
    color: #fff;
    cursor: pointer;
    i {
      padding-right: 3px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      isIndex: localStorage.getItem("isIndex")
        ? localStorage.getItem("isIndex")
        : 1,
    };
  },
  computed:{
    navigations() {
      return  [
        {
          title: this.$t('sidebar.authority'), //权限
          url: "",
          icon: "el-icon-s-tools"
        },
        {
          title:this.$t('sidebar.warehouse'),//仓库
          url: "/#/warehouse",
          icon: "el-icon-s-platform"
        },
        {
          title:this.$t('sidebar.product') ,//"产品",
          url: "/#/product",
          icon: "el-icon-s-management"
        },
        {
          title:this.$t('sidebar.purchase'), //"采购",
          url: "",
          icon: "el-icon-s-marketing"
        },
        {
          title:this.$t('sidebar.order'), //"订单",
          url: "",
          icon: "el-icon-goods"
        },
        {
          title:this.$t('sidebar.user'),//"会员",
          url: "",
          icon: "el-icon-user-solid"
        },
        {
          title:this.$t('sidebar.supplier'),//"供应商",
          url: "",
          icon: "el-icon-s-check"
        },
        {
          title: this.$t('sidebar.shop'),//"店铺",
          url: "",
          icon: "el-icon-s-shop"
        },
        {
          title: this.$t('sidebar.finance'),//"财务",
          url: "",
          icon: "el-icon-s-shop"
        },
        {
          title: this.$t('sidebar.shortLetter'),//"短信",
          url: "",
          icon: "el-icon-chat-line-round"
        },
        {
          title: this.$t('sidebar.customerService'),//"客服",
          url: "",
          icon: "el-icon-phone"
        },
        {
          title: this.$t('sidebar.gallery'),//"图库",
          url: "",
          icon: "el-icon-picture"
        },
        {
          title: this.$t('sidebar.marketing'),// "营销",
          url: "",
          icon: "el-icon-s-flag"
        },
        {
          title: this.$t('sidebar.data'),//"数据",
          url: "",
          icon: "el-icon-coin"
        },
        {
          title: this.$t('sidebar.information'),//"信息",
          url: "",
          icon: "el-icon-view"
        },
        {
          title: this.$t('sidebar.community'),//"社区",
          url: "",
          icon: "el-icon-coffee-cup"
        },
        {
          title: this.$t('sidebar.personnelMatters'),//"OA",
          url: "",
          icon: "el-icon-s-opportunity"
        }];
    }
  },
  methods: {
    getNavigation(index, url) {
      this.isIndex = index;
      localStorage.setItem("isIndex", index); //选中
      //this.$router.push({ path: url }); //跳转地址
      window.location.href = url;
    }
  }
};
</script>
