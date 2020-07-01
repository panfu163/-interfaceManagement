import Vue from "vue";
import Router from "vue-router";

const index = () => import("./views/index.vue");
const personal = () => import("./views/personal.vue");

Vue.use(Router);
export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: "/personal",
      name: "personal",
      component: personal
    }
  ]
});
