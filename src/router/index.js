import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/facaltative",
      name: "facaltative",
      meta: {
        title: "facaltative",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/facaltative.vue"),
    },
    {
      path: "/NewRisk",
      name: "NewRisk",
      meta: {
        title: "New Risk",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/NewRisk.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      meta: {
        title: "settings",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/settings.vue"),
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "login",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/login.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/dashboard.vue"),
      meta: {
        title: "dashboard",
      },
    },
    {
      path: "/PreviewPrint",
      name: "PreviewPrint",
      meta: {
        title: "Preview Print",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PreviewPrint.vue"),
    },
  ],
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

export default router;
