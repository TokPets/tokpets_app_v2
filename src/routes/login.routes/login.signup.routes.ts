export const LOGIN_SIGNUP_ROUTES = [
  {
    path: '/view/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../../views/login/signup.view.vue')
  },
  {
    path: '/view/signup/intro/:step',
    name: 'signup/intro',
    component: () => import(/* webpackChunkName: "about" */ '../../views/login/signup.view.vue')
  },
  {
    path: '/view/signup/code/:code',
    name: 'signup/code',
    component: () => import(/* webpackChunkName: "about" */ '../../views/login/signup.view.vue')
  },
  {
    path: '/view/signup/pet',
    name: 'signup/pet',
    component: () => import(/* webpackChunkName: "about" */ '../../views/login/signup.view.vue')
  },
  {
    path: '/view/signup/user',
    name: 'signup/pet',
    component: () => import(/* webpackChunkName: "about" */ '../../views/login/signup.view.vue')
  },
  {
    path: '/view/signup/terms',
    name: 'signup/terms',
    component: () => import(/* webpackChunkName: "about" */ '../../views/views/login/signup.view.vue')
  }
];
