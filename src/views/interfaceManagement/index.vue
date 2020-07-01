<!---
 --@author  PanFu
 --@data 2019-08-30 16:19
 --@description activity.v1.0-List
 --@version 1.0
--->
<template>
  <div class="weChatApplet">
    <el-row>
      <el-col :span="24">
        <pageMaking></pageMaking>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
  .weChatApplet {
    padding: 10px;
    background: #fff;
    box-sizing: border-box;
  }
</style>
<script>
  import pageMaking from "@/components/pageMaking/pageMaking.vue";
  export default {
    data() {
      return {};
    },
    methods: {
    },
    mounted() {
    },
    components:{
      pageMaking
    }
  };
</script>
