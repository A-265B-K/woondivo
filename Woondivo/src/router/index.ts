import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/views/HomePage.vue";
import Events from "@/views/Events.vue"
import MeetTheUnits from '@/views/MeetTheUnits.vue';
import Articles from '@/views/Articles.vue';
import Newsletter from '@/views/Newsletter.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/events',
    name: 'Events',
    component: Events,
  },
  {
    path: '/meetTheUnits',
    name: 'Meet The Units',
    component: MeetTheUnits
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles
  },
  {
    path: '/newsletter',
    name: 'Newsletter',
    component: Newsletter
  }
  // Add more routes here later
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
