declare namespace StoreState {
  // 菜单导航
  export interface Navs {
    id: number;
    icon: string;
    name: string;
    path: string;
  }

  // 广告轮播
  export interface Banners {
    id: string | undefined;
    activityId: string | undefined;
    src: string;
    desc: string;
    isActivity: boolean;
  }

  // 自定义模块
  export interface Customs {
    type: string;
    title: string;
    imglist: any;
  }

  // 商品类型
  export interface Goods {
    id: string;
    title: string;
    desc: string;
    src: string;
    price: number;
  }

  // 快链导航
  export interface QuickNav {
    id: string;
    title: string;
    icon: string;
  }

  export interface GoodsInfo {}
}
