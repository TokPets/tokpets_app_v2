
import Vue from 'vue';
import App from './App.vue';
import router from './routes/router';
import store from './store/store';

import './config/sw/registerServiceWorker';

import './config/vndrs/_index';
import './config/firebase/_index';
import './config/srvcs/_index';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
