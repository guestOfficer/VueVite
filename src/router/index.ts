// router/index

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import pages from "./page";
const routes: Array<RouteRecordRaw> = [
  { path: "/login", name: "login", component: () => import("../login.vue") },
  { path: "/add", name: "add", component: () => import("../add.vue") },
  {
    path: "/",
    name: "home",
    component: () => import("../home.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
