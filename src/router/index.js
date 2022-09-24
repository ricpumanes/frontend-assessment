import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SinglePostView from "../views/SinglePostView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:id",
      name: "post",
      component: SinglePostView,
    },
  ],
});

export default router;
