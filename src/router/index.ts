import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TodoList from "@/views/TodoList.vue";
import Users from "@/views/Users.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Users,
  },
  {
    path: "/todo/:id",
    component: TodoList,
  },
  {
    path: "/todo",
    component: TodoList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
