require('./assets/css/reset.css');
require('./assets/css/swiper.min.css');

import Vue from 'vue'; //vue
import VueRouter from 'vue-router'; //vue-router路由
import VueResource from 'vue-resource'; //vue-router路由
// import Lazyload from 'vue-lazyload'; //vue图片懒加载
import RouterMap from './routers'; //路由配置文件
import AppVue from './app.vue';
import filters from './filters';


const App = Vue.extend(AppVue);
Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.use(Lazyload, {
//     error: "http://cn.vuejs.org/images/logo.png",
//     loading: 'http://img.zcool.cn/community/01443f564897a432f87512f6eed753.gif',
// })

// 在加载 Vue 之后立即同步的设置
Vue.config.devtools = true

//实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))


function preventDefault(e) { e.preventDefault(); };
const banTouchmove = function() {
    document.addEventListener('touchmove', preventDefault, false);
}
const restoreTouchmove = function() {
    document.removeEventListener('touchmove', preventDefault, false);
}

//过渡代码放到最下面的时候，有时候并不会执行钩子函数的方法，放到这里就可以了。
Vue.transition('next', {
    beforeEnter: function(el) {
        router.app.changePage = true;
        router.app.loadshow = true;
        banTouchmove();
    },
    enter: function() {},
    afterEnter: function(el) {
        router.app.changePage = false;
        router.app.loadshow = false;
        restoreTouchmove();
    }
});
Vue.transition('prev', {
    beforeEnter: function(el) {
        router.app.changePage = true;
        router.app.loadshow = true;
        banTouchmove();
    },
    enter: function() {},
    afterEnter: function(el) {
        router.app.changePage = false;
        router.app.loadshow = false;
        restoreTouchmove();
    }
});



let router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true,
    linkActiveClass: 'custom-active',
});


RouterMap(router);

router.start(App, '#app');