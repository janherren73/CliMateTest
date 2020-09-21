import Vue from 'vue';
import VueRouter from 'vue-router';
import Card from '../components/Card/Card.vue';
import Home from '../views/Home/Home.vue';
import NewBook from '../components/New Book/NewBoook';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Card',
    name: 'Card',
    component: Card,
  },

  {
    path: '/',
    name: 'Newbook',
    component: NewBook,
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
