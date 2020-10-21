import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';
import Newbook from '../components/NewBook/Newbook.vue';
import Details from '../components/Details/details.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/detail',
    name: 'detail',
    component: Details,
  },

  {
    path: '/newbook',
    name: 'Newbook',
    component: Newbook,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
