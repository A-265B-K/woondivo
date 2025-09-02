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

export default createRouter({
  history: createWebHistory(),
  routes,
})
