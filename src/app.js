require('./assets/scss/weui.scss');
require('./assets/scss/common.scss');
require('./assets/scss/base.scss');

import Vue from 'vue'; //vue
import VueRouter from 'vue-router'; //vue-router路由
import RouterMap from './routers'; //路由配置文件
import AppVue from './app.vue';


let App = Vue.extend(AppVue);

Vue.use(VueRouter);

Vue.transition('next', {
  beforeEnter: function (el) {
    //设置body样式overflow-y:hidden;
    console.log(1111)
    document.body.style.overflowY = "hidden";
  },
  afterEnter: function (el) {
    //再清除上面的样式;
    console.log(2222)
    document.body.style.overflowY = "auto";
  }
});


let router = new VueRouter({
    hashbang: true, 
    linkActiveClass: 'custom-active' 
});


RouterMap(router);

router.start(App, '#app');
