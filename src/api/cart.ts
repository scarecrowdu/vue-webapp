import $axios from '@/utils/axios';

/**
 * 查询购物车数据
 */
export function queryCartList() {
  return $axios.get('/cart/info');
}
