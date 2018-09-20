import 'normalize.css';
import './style/common.scss';
import 'mint-ui/lib/toast/style.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import SvgIcon from '@/components/SvgIcon.vue';
import FastClick from 'fastclick';
import VueLazyload from 'vue-lazyload';

if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      (FastClick as any).attach(document.body);
    },
    false,
  );
}

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/images/load_default.png'),
  loading: require('./assets/images/load_default.png'),
  attempt: 1,
});

// 全局注册icon图标组件
Vue.component('icon', SvgIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
