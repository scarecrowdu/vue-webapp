import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import shop from './modules/shop';
import category from './modules/category';
import cart from './modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {
    shop,
    category,
    cart,
  },
});
