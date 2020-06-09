<!---
 --@author  PanFu
 --@data 2019-07-13:56
 --@description MOJOWeb-left 左侧导航
 --@version 1.0
--->
<template>
  <el-container>
    <heads></heads>
    <div class="side">
      <sidebar></sidebar>
      <lefts></lefts>
    </div>
    <tags></tags>
    <div class="min">
      <router-view />
    </div>
  </el-container>
</template>

<script>
import heads from "@/components/public/head";
import sidebar from "@/components/public/sidebar";
import lefts from "@/components/public/left";
import tags from "@/components/public/tag";

export default {
  name: "Main",
  components: {
    heads,
    lefts,
    sidebar,
    tags
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.side {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  flex-direction: column;
  overflow: hidden;
  z-index: 2;
  width: 284px;
  border-right: 1px solid #eee;
}
.min {
  position: absolute;
  top: 100px;
  bottom: 0;
  left: 284px;
  width: calc(100% - 284px);
  height: calc(100%- 70px);
  min-width: 600px;
  min-height: 500px;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  flex-direction: column;
  overflow: auto;
  z-index: 2;
}
</style>
