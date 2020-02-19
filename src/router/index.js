import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // which isd. lazy-loaded when the route is visited
    component: () => import(/* webpackChunkName: "about" */ '@/components/Profile')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/authentication/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/components/authentication/Register')
  },
  {
    path: '/friends',
    name: 'Friends',
    component:() => import('@/components/Friends')
  },
  {
    path: '/gamefriend',
    name: 'GameFriend',
    component: () => import('@/components/GameFriend')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
