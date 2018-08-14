import Vue from 'vue';
import Vuex from 'vuex';
import state from "./state";
import actions from './actions';
import shop from './modules/shop';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations: {},
  actions,
  modules: {
    shop,
  },
});
