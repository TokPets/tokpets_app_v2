import Vue from 'vue';
import Router from 'vue-router';
import Home from './../views/index.view/index.view.vue';

Vue.use(Router);

const loginModule = 'login.view';
const loginSignin = 'login.signin.view';
const loginSignup = 'login.signup.view';

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
      component: () =>
        import(/* webpackChunkName: "login.signin" */`../views/${loginModule}/${loginSignin}/${loginSignin}.vue`),
    },
  ],
});
