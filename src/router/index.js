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
      path: "/add-project",
      name: "addProject",
      component: () => import("../views/AddProjectView.vue"),
    },
    {
      path: "/edit-project/:id",
      name: "editProject",
      component: () => import("../views/EditProjectView.vue"),
      props: true,
    },
  ],
});

export default router;
