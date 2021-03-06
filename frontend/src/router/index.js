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
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
  },
  {
    path: '/add-issue',
    name: 'AddIssue',
    component: () => import('../views/Issue.vue'),
  },
  {
    path: '/view-issue/:issue_id',
    name: 'ViewIssue',
    component: () => import('../views/Issue.vue'),
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
