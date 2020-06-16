<!---
 --@author  PanFu
 --@data 2020-06-15:59
 --@description 栅格布局
 --@version 1.0
--->
<template>
    <div class="layout">
    </div>
</template>

<script>
  import toast from "components/Widget/Toast/Toast";
  import IconToast from "components/Widget/IconToast/IconToast";
  import progressbar from "components/Widget/ProgressBar/ProgressBar";

  export default {
    name: "layout",
    components: {
      toast,
      IconToast,
      progressbar
    },
    mounted() {

    },
    data() {
      return {};
    },
    methods: {}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
    @import "~common/stylus/index.styl"
    .layout
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        height: 100%;
        width: 100%;
        background: #f5f5f5;
        box-sizing: border-box
        font-size: px2rem(12px);
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
</style>
