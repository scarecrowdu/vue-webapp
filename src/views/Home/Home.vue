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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { Banners, Goods, QuickNav, Customs } from '@/store/state';

import GoodList from '@/components/GoodList.vue';
import BannerSwiper from './components/BannerSwiper.vue';
import QuickLinkNav from './components/QuickLinkNav.vue';
import CustomColumn from './components/CustomColumn.vue';

// const namespace: string = 'shop';

@Component({
  components: {
    GoodList,
    BannerSwiper,
    QuickLinkNav,
    CustomColumn,
  },
})
export default class Home extends Vue {
  @State(state => state.shop.banners)
  banners!: Banners[];

  @State(state => state.shop.quicknavlist)
  quicknavlist!: QuickNav[];

  @State(state => state.shop.customs)
  customs!: Customs[];

  @State(state => state.shop.goodslist)
  goodslist!: Goods[];

  @Action('shop/initAjaxShop') initAjaxShop: any;
  // @Action('initAjaxShop', { namespace })
  // initAjaxShop: any;

  created() {
    this.initAjaxShop();
  }
  mounted() {
    // console.log(this.goodslist);
  }
}
</script>


<style lang="scss" scoped>
.column-title {
  text-align: left;
  font-size: 30px;
  padding: 30px 30px;
}

.guess-like-wrap {
  overflow: hidden;
  background: #f5f5f5;

  .guess-title {
    position: relative;
    display: -webkit-box;
    margin: 28px 10px;
    color: #848689;
    font-size: 28px;
    -webkit-box-pack: center;

    &:after {
      content: '';
      height: 1px;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 0;
      background-color: #cbcbcb;
      -webkit-transform: scaleY(0.5);
    }
  }

  .guess-layout {
    padding: 0 20px;
    background-color: #f0f2f5;
    z-index: 10;
    position: relative;
    display: block;
  }
}
</style>
