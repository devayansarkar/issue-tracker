import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/board',
    name: 'Board',
    component: () => import('../views/IssuesBoard.vue'),
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/Signup.vue'),
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
