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
  innovation: "/innovation",
  generate: "/generate",
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
  {
    name: "innovation",
    path: routePaths.innovation,
    component: () => import("../views/InnovationView.vue"),
  },
  {
    name: "generate",
    path: routePaths.generate,
    component: () => import("../views/GenerateView.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
