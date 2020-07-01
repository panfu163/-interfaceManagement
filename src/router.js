import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/public/Main";

//导入
// import NProgress from 'nprogress';
// import '@@/nprogress/nprogress.css';

Vue.use(Router);
const router = new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      redirect: "/interfaceManagement" //重定向url地址
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "登录页"
      },
      component: () =>
          import(/*webpackChunkName:"login"*/ "@/views/management/login.vue")
    },
    {
      path: "/interfaceManagement", //页面管理
      component: Main,
      children: [
        {
          path: "/",
          name: "interfaceManagement",
          meta: {
            title: "库存查询"
          },
          component: () =>
              import(/*webpackChunkName:"search"*/ "@/views/interfaceManagement/index.vue")
        },
      ]
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

//处理登录信息
router.beforeEach(function(to, from, next) {
  NProgress.start() // 设置加载进度条(开始..)
  if (!localStorage.getItem("userInfo")) { //查看用户信息是否存在
    if (to.path !== '/login') {
      return next('/login');
    }
  }
  next();
});
router.afterEach(() => {
  NProgress.done() // 设置加载进度条(结束..)
});
export default router;