import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Chat from '../views/Chat.vue';
import Test from '../views/Test.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Test',
    component: Test,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
