import 'normalize.css';
import './style/common.scss';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import SvgIcon from '@/components/SvgIcon.vue';
import FastClick from 'fastclick';

if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      (FastClick as any).attach(document.body);
    },
    false,
  );
}

// 全局注册icon图标组件
Vue.component('icon', SvgIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
