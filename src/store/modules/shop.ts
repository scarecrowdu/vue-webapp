import { MutationTree, ActionTree } from 'vuex';
import * as TYPES from '../mutation-types';
import {
  queryBannerList,
  queryCustomsList,
  queryGoodsList,
  queryQuickNavList,
  queryGoodsInfo,
} from '@/api/shop';

interface ShopState {
  banners: StoreState.Banners[];
  customs: StoreState.Customs[];
  goodslist: StoreState.Goods[];
  quicknavlist: StoreState.QuickNav[];
  goodsinfo: any[];
}

export const state: ShopState = {
  banners: [],
  customs: [],
  goodslist: [],
  quicknavlist: [],
  goodsinfo: [],
};

const mutations: MutationTree<any> = {
  [TYPES.SET_BANNERS](state, banners) {
    state.banners = banners;
  },

  [TYPES.SET_QUICKNAV](state, list) {
    state.quicknavlist = list;
  },

  [TYPES.SET_CUSTOMS](state, customs) {
    state.customs = customs;
  },

  [TYPES.SET_GOODSLIST](state, goodslist) {
    state.goodslist = goodslist;
  },

  [TYPES.SET_GOODSINFO](state, data) {
    state.goodsinfo = data;
  },
};

const actions: ActionTree<any, any> = {
  // 初始化首页数据
  async initAjaxShop({ dispatch }) {
    dispatch('getBanners');
    dispatch('getQuickNavList');
    dispatch('getCustoms');
    dispatch('getGoodsList');
  },

  // 获取轮播
  async getBanners({ commit }) {
    const res: Ajax.AjaxResponse = await queryBannerList();
    if (res && res.code === 200) commit(TYPES.SET_BANNERS, res.data.list || []);
  },

  // 获取自定义
  async getCustoms({ commit }) {
    const res: Ajax.AjaxResponse = await queryCustomsList();
    if (res && res.code === 200) commit(TYPES.SET_CUSTOMS, res.data.list || []);
  },

  // 获取猜你喜欢商品列表
  async getGoodsList({ commit }) {
    const res: Ajax.AjaxResponse = await queryGoodsList();
    if (res && res.code === 200)
      commit(TYPES.SET_GOODSLIST, res.data.list || []);
  },

  // 获取快链导航
  async getQuickNavList({ commit }) {
    const res: Ajax.AjaxResponse = await queryQuickNavList();
    if (res && res.code === 200)
      commit(TYPES.SET_QUICKNAV, res.data.list || []);
  },

  async getGoodsInfo({ commit }, id) {
    const res: Ajax.AjaxResponse = await queryGoodsInfo(id);
    if (res && res.code === 200) commit(TYPES.SET_GOODSINFO, res.data || {});
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
