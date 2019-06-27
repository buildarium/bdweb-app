import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';
import Axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faBoxOpen, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUser, faBoxOpen, faUnlock)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

let app: any = '';

if (!app) {
  app = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
}
// });
