import Vue from 'vue';
import Router from 'vue-router';
import Home from './../views/index.view/index.view.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login/signin',
      name: 'login.signin',
      component: () => import(/* webpackChunkName: "login.signin" */ '../views/login.signin.view/login.signin.view.vue'),
    },
  ],
});
