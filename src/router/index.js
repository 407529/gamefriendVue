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
    component: () => import('@/components/profile/Profile')
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
    component:() => import('@/components/friend_list/Friends')
  },
  {
    path: '/game-friend',
    name: 'GameFriend',
    component: () => import('@/components/suggested_friends/SuggestedFriends')
  },
  {
    path: '/games',
    name: 'Games',
    component: () => import('@/game/Games')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
