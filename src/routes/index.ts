import {
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";

/**
 * ルートのパス定数
 */
export const routePaths = {
  home: "/",
};

const routes: RouteRecordRaw[] = [
  {
    name: "home",
    path: routePaths.home,
    component: () => import("../views/HomeView.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
