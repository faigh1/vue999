import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import About from '../views/About.vue';
import Reference from '../views/Reference.vue';
import Script from '../views/Script.vue';
import Youtube from '../views/Youtube.vue';
import Contact from '../views/Contact.vue';
import Portfolio from '../views/Portfolio.vue';
import MovieDetail from '../views/MovieDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/Reference',
    name: 'Reference',
    component: Reference,
  },
  {
    path: '/Script',
    name: 'Script',
    component: Script,
  },
  {
    path: '/Youtube',
    name: 'Youtube',
    component: Youtube,
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/MovieDetail',
    name: 'MovieDetail',
    component: MovieDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
