import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import ModalTest from '../views/ModalTest.vue';
import CarouselTest from '../views/CarouselTest.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/modal',
    name: 'Modal',
    component: ModalTest
  },
  {
    path: '/carousel',
    name: 'Carousel',
    component: CarouselTest
  }
];

const router = new VueRouter({
  routes,
});

export default router;
