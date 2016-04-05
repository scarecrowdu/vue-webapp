require('./assets/scss/common.scss');

import Vue from 'vue'; //vue
import VueRouter from 'vue-router'; //vue-router路由
import RouterMap from './routers'; //路由配置文件
import AppVue from './app.vue';


let App = Vue.extend(AppVue);

Vue.use(VueRouter);


let router = new VueRouter({
    hashbang: true, //为true的时候 example.com/#!/foo/bar ， false的时候 example.com/#/foo/bar
    //abstract:true,  //地址栏不会有变化
    //以下设置需要服务端设置
    //history: false,   //当使用 HTML5 history 模式时，服务器需要被正确配置 以防用户在直接访问链接时会遇到404页面。
    //saveScrollPosition: false
    linkActiveClass: 'custom-active-class' //全局设置连接匹配时的类名 参考http://vuejs.github.io/vue-router/en/link.html
});

RouterMap(router);

router.start(App, '#app');
