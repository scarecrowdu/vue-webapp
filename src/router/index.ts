import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home/Home.vue';

Vue.use(Router);

const routes = [
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
];

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.addRoutes([
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/User/Login.vue'),
  },
]);

export default router;
