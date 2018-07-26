import 'normalize.css';
import './style/common.scss';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import FastClick from 'fastclick';

Vue.config.productionTip = false;

if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      (FastClick as any).attach(document.body);
    },
    false,
  );
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
