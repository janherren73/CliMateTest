import Vue from 'vue';
import VueRouter from 'vue-router';
import Details from '../components/Details/Details.vue';
import Home from '../components/Home/Home.vue';
import NewBook from '../components/New Book/NewBoook';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },

  {
    path: '/newbook',
    name: 'Newbook',
    component: NewBook,
  },

  {
    path: '/bookDetails/:id',
    name: 'Details',
    component: Details,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
