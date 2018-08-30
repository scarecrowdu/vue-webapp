export interface CategoryState {
  industryList: CategoryMenu[];
  moduleList: CategoryList[];
}

// 分类菜单
export interface CategoryMenu {
  id: number;
  name: string;
}

// 分类列表
export interface CategoryList {
  desc?: string;
  items: CategoryInfo;
  title: string;
  type: string;
}

// 分类信息
export interface CategoryInfo {
  id: number;
  name: string;
  pic: string;
}
