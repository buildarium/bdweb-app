import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';
import { firebaseConfig } from './config/firebase';

Vue.config.productionTip = false;

let app = '';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Make sure Firebase has initialized before Vue starts
// This is so that proper redirection happens if user is logged in
// https://link.medium.com/plde3hYnIT
firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
