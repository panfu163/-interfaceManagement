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
      redirect: "/interfaceManagement" //重定向url地址
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
    {path: "/interfaceManagement",
      component: Main,
      children: [{
        path: "/",
        name: "interfaceManagement",
        meta: {
          title: "小程序管理"
        },
        component: () =>
          import(/*webpackChunkName:"search"*/ "@/views/weChatApplet/index.vue")
      },
      ]},
    {
      path: "/web",
      component: Main,
      children: [
        {
          path: "/",
          name: "web",
          meta: {
            title: "小程序管理"
          },
          component: () =>
            import(/*webpackChunkName:"search"*/ "@/views/web/list.vue")
        },
        {
          path: "/web/index",
          name: "Home",
          meta: {
            title: "库存管理"
          },
          component: () =>
            import(
              /*webpackChunkName:"management"*/ "@/views/web/index.vue"
            )
        }
      ]
    }

  ]
});
