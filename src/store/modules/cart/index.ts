import { MutationTree, ActionTree, GetterTree } from 'vuex';
import * as TYPES from '../../mutation-types';
import { queryCartList } from '@/api/cart';
import { Toast } from 'mint-ui';

const namespaced: boolean = true;
import Vue from 'vue';

const isEveryRight = (arr: any, fn: any) =>
  arr.map(fn).every((val: boolean) => val);

const state = {
  cartInfo: {},
};

const mutations: MutationTree<any> = {
  [TYPES.SET_CARTLIST](state, data): void {
    state.cartInfo = data;
  },

  [TYPES.SET_SELECT_GOOD](state, { id, sellerId }): void {
    const { goods, shops, gorups, footer } = state.cartInfo;
    const curGoodChecked = goods[`good_${id}`].fields.checked;

    // 设置当前商品是否选中
    goods[`good_${id}`].fields.checked = !curGoodChecked;
    // 检查当前店铺是否选中
    shops[`shop_${sellerId}`].fields.checked = gorups[`shop_${sellerId}`]
      .map((id: number) => goods[id].fields.checked)
      .every((val: boolean) => val);
    // 检查是否全选
    footer.fields.checkAll.checked = isEveryRight(
      Object.keys(shops),
      (id: number) => (id = shops[id].fields.checked),
    );
  },

  [TYPES.SET_SELECT_SHOP](state, { id }): void {
    const { goods, shops, gorups, footer } = state.cartInfo;
    const curShopChecked = shops[`shop_${id}`].fields.checked;

    // 检查当前店铺是否选中
    shops[`shop_${id}`].fields.checked = !curShopChecked;
    // 设置商品是否选中
    gorups[`shop_${id}`].map((id: number) => goods[id]).forEach((item: any) => {
      item.fields.checked = !curShopChecked;
    });
    // 检查是否全选
    footer.fields.checkAll.checked = isEveryRight(
      Object.keys(shops),
      (id: number) => (id = shops[id].fields.checked),
    );
  },

  [TYPES.SET_SELECT_CART_ALL](state): void {
    const { goods, shops, footer } = state.cartInfo;
    const curAllChecked = footer.fields.checkAll.checked;
    footer.fields.checkAll.checked = !curAllChecked;
    Object.keys(shops).forEach(
      key => (shops[key].fields.checked = !curAllChecked),
    );
    Object.keys(goods).forEach(
      key => (goods[key].fields.checked = !curAllChecked),
    );
  },

  [TYPES.SET_BUY_QUANTITY](state, { item, type }) {
    const { goods } = state.cartInfo;
    const { id, fields } = item;
    const fetchQuantity = (values: any, type: string) => {
      const { max, min, quantity } = values;
      let num = quantity;
      if (type === 'minus') {
        min === quantity ? Toast('宝贝不能减了哦') : (num -= 1);
      } else if (type === 'plus') {
        max === quantity ? Toast('该宝贝不能购买更多了') : (num += 1);
      } else if (type === 'input') {
        if (quantity >= max) {
          Toast('超出数量范围了');
          return max;
        }
        if (quantity === 0) {
          return min;
        }
      }
      return num;
    };
    goods[`good_${id}`].fields.quantity.quantity = fetchQuantity(
      fields.quantity,
      type,
    );
  },

  [TYPES.SET_BUY_EDIT_STATUS](state, { id }) {
    const { shops } = state.cartInfo;
    const is11 = shops[id].fields.is11;

    shops[id].fields.is11 = !is11;
  },

  [TYPES.DEL_CART_GOOD](state, item) {
    const { goods, gorups } = state.cartInfo;
    const {
      id,
      fields: { sellerId },
    } = item;
    const goodkey = `good_${id}`;
    const shopkey = `shop_${sellerId}`;

    gorups[shopkey] = gorups[shopkey].filter((val: string) => val != goodkey);

    // delete goods[goodkey];
    Vue.delete(goods, goodkey);
  },
};

const actions: ActionTree<any, any> = {
  // 获取购物车列表
  async getCartList({ commit }) {
    const res: Ajax.AjaxResponse = await queryCartList();
    if (res && res.code === 200) {
      commit(TYPES.SET_CARTLIST, res.data);
    }
  },

  // 选中购买商品
  selectGood({ commit }, item) {
    const {
      id,
      fields: { sellerId },
    } = item;
    commit(TYPES.SET_SELECT_GOOD, { id, sellerId });
  },

  // 选中该店铺所有购买的商品
  selectShop({ commit }, item) {
    const { id } = item;
    commit(TYPES.SET_SELECT_SHOP, { id });
  },

  // 选中所有购买的商品
  selectAll({ commit }) {
    commit(TYPES.SET_SELECT_CART_ALL);
  },

  // 商品数量加减和输入的操作
  editBuyQuantity({ commit }, { item, type }) {
    commit(TYPES.SET_BUY_QUANTITY, { item, type });
  },

  // 显示是否删除商品的操作
  editBuyEditStatus({ commit }, id) {
    commit(TYPES.SET_BUY_EDIT_STATUS, { id });
  },

  delCartGood({ commit }, item) {
    commit(TYPES.DEL_CART_GOOD, item);
  },
};

const getters: GetterTree<any, any> = {
  cartInfo: state => state.cartInfo,

  payInfo(state) {
    const { goods } = state.cartInfo;
    let totalprice = 0;
    let quantity = 0;
    if (goods) {
      Object.keys(goods).forEach(id => {
        const { fields } = goods[id];
        const isChecked = fields.checked;
        if (isChecked) {
          quantity += 1;
          totalprice += (fields.pay.now / 100) * fields.quantity.quantity;
        }
      });
    }

    return {
      quantity,
      totalprice,
    };
  },
};

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters,
};
