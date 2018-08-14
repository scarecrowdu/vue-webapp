import $axios from '@/utils/axios';

export function queryBannerList() {
  return $axios.get('/shop/banner');
}

export function queryCustomsList() {
  return $axios.get('/shop/customs');
}

export function queryGoodsList() {
  return $axios.get('/shop/goodslist');
}

export function queryQuickNavList() {
  return $axios.get('/shop/quicknav');
}

export function queryGoodsInfo(id: string) {
  return $axios.post(`/shop/goods/${id}`);
}
