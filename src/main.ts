import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import './assets/style.css';

Vue.config.productionTip = false;

const EventBus = new Vue();

Object.defineProperties(Vue.prototype, {
  $bus: {
    get: () => EventBus
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
