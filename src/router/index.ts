import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home/Home.vue';
// import About from '../views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { isNav: true },
      component: Home,
    },
    {
      path: '/category',
      name: 'category',
      meta: { isNav: true },
      component: () => import('../views/Category/Category.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      meta: { isNav: true },
      component: () => import('../views/Cart/Cart.vue'),
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/views/Detail/Detail.vue'),
    },
    {
      path: '/me',
      name: 'me',
      meta: { isNav: true },
      component: () => import('@/views/Me/Me.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About,
    // },
  ],
});
