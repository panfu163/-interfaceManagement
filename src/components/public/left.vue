<!---
 --@author  PanFu
 --@data 2019-07-13:56
 --@description MOJOWeb-left 左侧导航
 --@version 1.0
--->
<template>
  <div class="min-sidebar">
    <div class="title">{{$t('stock.management.title')}}</div>
    <el-menu
      class="el-menu-vertical-demo"
      :default-openeds="openeds"
      :default-active="defaultActive"
    >
      <el-submenu
        :index="(indexs + 1).toString()"
        v-for="(item, indexs) in stock"
        :key="indexs"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :index="(indexs + 1).toString() + '-' + (index + 1).toString()"
            v-for="(items, index) in item.data"
            :key="index"
            @click="
              goto(
                items,
                (indexs + 1).toString() + '-' + (index + 1).toString()
              )
            "
            >{{ items.title }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style lang="scss">
.min-sidebar {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 121px;
  height: 100%;
  box-sizing: border-box;
  width: 162px;
  background: #eee;
  overflow-y: auto;
  color: #323233;
  background: #fff;
  .title {
    background: #fff;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
  }
  .el-menu-vertical-demo {
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    .el-submenu__title {
      height: 40px;
      line-height: 40px;
    }
    .el-menu-item-group {
      width: 100%;
      box-sizing: border-box;
      .el-menu-item-group__title {
        display: none;
      }
      .el-menu-item {
        width: 100%;
        box-sizing: border-box;
        min-width: 100px;
        height: 40px;
        line-height: 40px;
      }
    }
    .el-menu-item {
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      openeds: ["1", "2", "3"], //设置菜单栏展开3个需要展开的菜单导航
      defaultActive: localStorage.getItem("Active")
        ? localStorage.getItem("Active")
        : "1-1", //当前选中
      tagData: this.$store.state.tag
    };
  },
  methods: {
    goto(item, index) {
      let val = {
        title: item.title,
        url: item.url
      };
      this.tagData.push(val);
      this.tagData = this.distinct(this.tagData);
      localStorage.setItem("tagTitle", JSON.stringify(this.tagData)); //设置头部信息
      localStorage.setItem("Active", index);
      this.$store.dispatch("actionsAddTag", this.tagData); //获取小页签
      this.$router.push({ path: item.url }); //跳转地址
    },
    distinct(arr) {
      //去重
      let result = [];
      let objs = {};
      for (let i = 0; i < arr.length; i++) {
        if (!objs[arr[i].title]) {
          result.push(arr[i]);
          objs[arr[i].title] = true;
        }
      }
      return result;
    },
    openMenu(index) {
      console.log(index);
    }
  },
  mounted() {
    console.log(this.$route);
    if (!JSON.parse(localStorage.getItem("tagTitle"))) {
      //处理第一次无数据
      let val = [
        {
          title: this.$route.meta.title,
          url: this.$route.path
        }
      ];
      localStorage.setItem("tagTitle", JSON.stringify(val)); //设置头部信息
    }
  },
  computed: {
    stock(){
      return[
        {
          title:this.$t('stock.search.title'),
          icon: "el-icon-search",
          id: "1",
          data: [
            {
              title:this.$t('stock.search.list.check'),
              url: "/interfaceManagement"
            },
            {
              title:this.$t('stock.search.list.notes'),
              url: "/InventoryFlow"
            },
            {
              title:this.$t('stock.search.list.code'),
              url: "/uniqueCode"
            }
          ]
        },
        {
          title: this.$t('stock.management.title'),
          icon: "el-icon-monitor",
          id: "2",
          data: [
            {
              title:this.$t('stock.management.list.returnGoods'),
              url: "/web"
            },
            {
              title:this.$t('stock.management.list.sale'),
              url: ""
            },
            {
              title:this.$t('stock.management.list.allot'),
              url: ""
            },
            {
              title:this.$t('stock.management.list.ware'),
              url: ""
            },
            {
              title:this.$t('stock.management.list.goods'),
              url: ""
            },
            {
              title:this.$t('stock.management.list.check'),
              url: ""
            }
          ]
        },
        {
          title:this.$t('stock.BaseInformation.title'),
          icon: "el-icon-setting",
          id: "2",
          data: [
            {
              title:this.$t('stock.BaseInformation.list.settings'),
              url: ""
            },
            {
              title:this.$t('stock.BaseInformation.list.info'),
              url: ""
            },
            {
              title:this.$t('stock.BaseInformation.list.import'),
              url: ""
            },
            {
              title: this.$t('stock.BaseInformation.list.backups'),
              url: ""
            },
            {
              title:this.$t('stock.BaseInformation.list.restore'),
              url: ""
            }
          ]
        }
      ];
    }
  }
};
</script>
