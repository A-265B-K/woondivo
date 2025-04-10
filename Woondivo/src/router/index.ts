import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/views/HomePage.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  // Add more routes here later
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
