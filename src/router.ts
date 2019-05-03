import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';
import firebase from 'firebase';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/signup'
    },
    {
      path: '/',
      redirect: '/signup'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currUser = localStorage.getItem('jwt'); //firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currUser) {
    next('signup');
  } else if (!requiresAuth && currUser) {
    next('dashboard');
  } else {
    next();
  }
})

export default router;