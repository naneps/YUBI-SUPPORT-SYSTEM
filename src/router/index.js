import { createRouter, createWebHistory } from "vue-router";
import masterDataRoutes from "./master-data";
import { issueRoutes } from "./modules/issue-route";
const routes = [
  ...masterDataRoutes,
  ...issueRoutes,
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../views/dashboard/Dashboard.vue"),
    meta: {
      requiresAuth: true,
      title: "Dashboard",
    },
  },
  {
    path: "/auth/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
    meta: {
      requiresAuth: false,
      title: "Login",
      layout: "DefaultLayout",
  },
  },
  // NotFound route should be at the end
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    return {top: 0, behavior: "smooth"};
  },
});

// Navigation guard for authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("token");
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  // handle middleware
  if (requiresAuth && !isAuthenticated) {
    // Redirect to login if requires authentication and not logged in
    next({name: "Login"});
  } else if (!requiresAuth && isAuthenticated) {
    // Redirect to dashboard if not requiring auth and already logged in
    // check middleware
    if (to.meta.middlewares) {
      console.log(to.meta.middlewares);
      to.meta.middlewares.forEach((middleware) => {
        const [name, param] = middleware.split(":");
        if (name === "role") {
          if (param !== "admin") {
            next({name: "Dashboard"});
          }
        }
      });
    }
    next({name: "Dashboard"});
  } else {
    //  next from
    next(

    );
  }
  document.title = "YSS | " + to.meta.title;
  // document.icon = to.meta.icon;
  // if not found
  if (to.name === "NotFound") {
    document.title = "YSS | Not Found";
  }
});

export default router;
