import $axios from '@/utils/axios';

export function queryCategoryRecommend() {
  return $axios.get('/category/recommend');
}
export function queryCategoryList(id: number) {
  return $axios.get(`/category/list?categoryId=${id}`);
}
