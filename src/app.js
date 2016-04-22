require('./assets/css/reset.css');
// require('./assets/scss/weui.scss');

import Vue from 'vue'; //vue
import VueRouter from 'vue-router'; //vue-router路由
import RouterMap from './routers'; //路由配置文件
import filters from './filters'
import AppVue from './app.vue';
import lazyload from 'vue-lazyload'

Vue.use(lazyload, {
  error: 'assets/images/lazy.png',
  loading: 'http://img.zcool.cn/community/01443f564897a432f87512f6eed753.gif',
  try: 3 // default 1
})


let App = Vue.extend(AppVue);

Vue.use(VueRouter);

//实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))


function preventDefault(e) { e.preventDefault(); }; 
const banTouchmove = function(){
  document.addEventListener('touchmove', preventDefault, false); 
}
const restoreTouchmove = function(){
  document.removeEventListener('touchmove', preventDefault, false);
} 

//过渡代码放到最下面的时候，有时候并不会执行钩子函数的方法，放到这里就可以了。
Vue.transition('next', {
  beforeEnter: function (el) {
    router.app.changePage = true;
    router.app.loadshow = true;
    banTouchmove();
  },
  enter:function(){
  },
  afterEnter: function (el) {
    router.app.changePage = false;
    router.app.loadshow = false;
    restoreTouchmove();
  }
});
Vue.transition('prev', {
  beforeEnter: function (el) {
    router.app.changePage = true;
    router.app.loadshow = true;
    banTouchmove();
  },
  enter:function(){
  },
  afterEnter: function (el) {
    router.app.changePage = false;
    router.app.loadshow = false;
    restoreTouchmove();
  }
});



let router = new VueRouter({
    hashbang: true, 
    history: false,
    // saveScrollPosition: true,
    // transitionOnLoad: true,
    linkActiveClass: 'custom-active',
});


RouterMap(router);

router.start(App, '#app');
