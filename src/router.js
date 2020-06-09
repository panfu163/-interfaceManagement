import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/public/Main";

Vue.use(Router);
export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      redirect: "/warehouse" //重定向url地址
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "产品中心"
      },
      component: () =>
          import(/*webpackChunkName:"login"*/ "@/views/management/login.vue")
    },
    {
      path: "/warehouse",
      component: Main,
      children: [
        {
          path: "/",
          name: "warehouse",
          meta: {
            title: "库存查询"
          },
          component: () =>
            import(/*webpackChunkName:"search"*/ "@/views/warehouse/list.vue")
        },
        {
          path: "/inventory/management",
          name: "Home",
          meta: {
            title: "库存管理"
          },
          component: () =>
            import(
              /*webpackChunkName:"management"*/ "@/views/management/index.vue"
            )
        },
        {
          path: "/inventory/warehouse",
          name: "shop",
          meta: {
            title: "供应商管理"
          },
          component: () =>
            import(
              /*webpackChunkName:"warehouse"*/ "@/views/warehouse/index.vue"
            )
        },
        {
          path: "/InventoryFlow",
          name: "InventoryFlow",
          meta: {
            title: "库存流水"
          },
          component: () =>
            import(
              /*InventoryFlow:"product"*/ "@/views/warehouse/InventoryFlow.vue"
            )
        },
        {
          path: "/uniqueCode",
          name: "uniqueCode",
          meta: {
            title: "唯一码管理"
          },
          component: () =>
            import(/*uniqueCode:"product"*/ "@/views/warehouse/uniqueCode.vue")
        },
        {
          path: "/product",
          name: "product",
          meta: {
            title: "产品中心"
          },
          component: () =>
            import(/*webpackChunkName:"product"*/ "@/views/product/index.vue")
        }
      ]
    }
  ]
});
