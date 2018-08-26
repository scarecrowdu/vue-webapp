<template>
  <div class="home">
    <BannerSwiper :data="banners" />
    <QuickLinkNav :data="quicknavlist" />
    <CustomColumn :data="customs" />

    <div class="guess-like-wrap">
      <p class="guess-title">
        <span class="guess-layout">猜你喜欢</span>
      </p>
      <GoodList :data="goodslist" />
    </div>

    <!-- <Footer :data="navs" /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

import Footer from '@/components/Footer.vue';
import GoodList from '@/components/GoodList.vue';
import BannerSwiper from './components/BannerSwiper.vue';
import QuickLinkNav from './components/QuickLinkNav.vue';
import CustomColumn from './components/CustomColumn.vue';
import state from '@/store/state';

// const namespace: string = 'shop';

@Component({
  components: {
    Footer,
    GoodList,
    BannerSwiper,
    QuickLinkNav,
    CustomColumn,
  },
})
export default class Home extends Vue {
  @State
  navs!: StoreState.Navs[];

  @State(state => state.shop.banners)
  banners!: StoreState.Banners[];

  @State(state => state.shop.quicknavlist)
  quicknavlist!: StoreState.QuickNav[];

  @State(state => state.shop.customs)
  customs!: StoreState.Customs[];

  @State(state => state.shop.goodslist)
  goodslist!: StoreState.Goods[];

  @Action('shop/initAjaxShop')
  initAjaxShop: any;
  // @Action('initAjaxShop', { namespace })
  // initAjaxShop: any;

  created() {
    this.initAjaxShop();
  }
  mounted() {}
}
</script>


<style lang="scss" scoped>
.column-title {
  text-align: left;
  font-size: 30px;
  padding: 30px 30px;
}
</style>
