import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import TodoHome from "./views/TodoHome.vue";
import Callback from "./components/Callback.vue";
import auth from "./auth/authService";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/home",
      name: "todo",
      component: TodoHome
    },
    {
      path: "/callback",
      name: "callback",
      component: Callback
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === "/" || to.path === "/callback" || auth.isAuthenticated()) {
    return next();
  }

  auth.login({ target: to.path });
});

export default router;
