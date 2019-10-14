export const LOGIN_SIGNUP_ROUTES = [
  {
    path: '/login/signup',
    name: 'signup',
    component: () =>
      import(
        /* webpackChunkName: "about" */ './../../views/login.view/login.signup.view/login.signup.view.vue'
      )
  },
  {
    path: '/login/signup/intro/:step',
    name: 'signup/intro',
    component: () =>
      import(
        /* webpackChunkName: "signup.tutorial" */
        './../../views/login.view/login.signup.view/login.signup.tutorial.view.vue'),
  },
  {
    path: '/login/signup/code/:code',
    name: 'signup/code',
    component: () =>
      import(
        /* webpackChunkName: "signup.code" */ './../../views/login.view/login.signup.view/login.signup.code.view.vue'
      )
  },
  {
    path: '/login/signup/pet/code/:code/type/:type/name/:name/gender/:gender/birthday/:brithday/breed/:breed/country/:country/city/:city/',
    name: 'signup/pet',
    component: () =>
      import(
        /* webpackChunkName: "about" */ './../../views/login.view/login.signup.view/login.signup.pet.view.vue'
      )
  },
  {
    path: '/login/signup/user',
    name: 'signup/user',
    component: () =>
      import(
        /* webpackChunkName: "about" */ './../../views/login.view/login.signup.view/login.signup.view.vue'
      )
  },
  {
    path: '/login/signup/terms',
    name: 'signup/terms',
    component: () =>
      import(
        /* webpackChunkName: "about" */ './../../views/login.view/login.signup.view/login.signup.view.vue'
      )
  }
];
