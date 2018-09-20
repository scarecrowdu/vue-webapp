import { MutationTree, ActionTree } from 'vuex';
import * as TYPES from '../../mutation-types';
import { CategoryState } from './types';
import { queryCategoryRecommend, queryCategoryList } from '@/api/category';

const namespaced: boolean = true;

const state: CategoryState = {
  industryList: [],
  moduleList: [],
};

const mutations: MutationTree<any> = {
  [TYPES.SET_MENULIST](state, menus): void {
    state.industryList = menus;
  },
  [TYPES.SET_CATEGORYLIST](state, categorys): void {
    state.moduleList = categorys;
  },
};

const actions: ActionTree<any, any> = {
  // 获取分类菜单列表和默认推荐列表
  async getCategoryRecommend({ commit }) {
    const res: Ajax.AjaxResponse = await queryCategoryRecommend();
    if (res && res.code === 200) {
      commit(TYPES.SET_MENULIST, res.data.result.industryList);
      commit(TYPES.SET_CATEGORYLIST, res.data.result.moduleList);
    }
  },

  // 根据菜单id获取分类列表
  async getCategoryList({ commit }, id) {
    const res: Ajax.AjaxResponse = await queryCategoryList(id);
    if (res && res.code === 200)
      commit(TYPES.SET_CATEGORYLIST, res.data.result.moduleList);
  },
};

export default {
  namespaced,
  state,
  mutations,
  actions,
};
