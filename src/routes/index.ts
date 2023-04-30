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
  operation: "/operation",
};

const routes: RouteRecordRaw[] = [
  {
    name: "home",
    path: routePaths.home,
    component: () => import("../views/HomeView.vue"),
  },
  {
    name: "operation",
    path: routePaths.operation,
    component: () => import("../views/OperationView.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
