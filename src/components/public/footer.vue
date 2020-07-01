<!---
 --@author  PanFu
 --@data 2019-07-13:56
 --@description MOJOWeb-index
 --@version 1.0
--->
<template>
  <div class="footer">
    <div class="footer-copyright">
      <a
        rel="nofollow"
        href="//www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010602001819"
        target="_blank"
      >
        <img
          src="//i18n.vipstatic.com/fendi/web/static/images/icon-emblem.png"
          alt="沪公网安备"
        />贵公网安备31010602001819号</a
      >
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <a
        rel="nofollow"
        href="//www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&amp;entyId=2018102313030017"
        target="_blank"
      >
        <img
          src="//i18n.vipstatic.com/fendi/web/static/images/icon-emblem-shanghai.png"
          alt="贵州工商"
        />贵州工商</a
      >
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <a rel="nofollow" href="//www.miibeian.gov.cn/" target="_blank"
        ><span>贵ICP备13018241号-1</span></a
      ><span
        >ALL RIGHTS RESERVED. COPYRIGHT © 2018 FENDI LVMH - P.IVA
        03897971002</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "footers",
  components: {},
  mounted() {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  max-width: 1560px;
  margin: 10px auto;
  border-top: 1px solid #eeedeb;
  .footer-copyright {
    font-size: 12px;
    color: #212121;
    img {
      width: 16px;
      height: 16px;
      vertical-align: middle;
      padding-right: 10px;
    }
  }
  .footer-list {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    font-size: 12px;
    padding: 10px 20px;
    color: #212121;
    justify-content: space-between;
    dl {
      dt {
        font-weight: 700;
        padding-bottom: 20px;
      }
      dd {
        padding: 10px 0;
        margin: 0;
      }
    }
  }
}
</style>
