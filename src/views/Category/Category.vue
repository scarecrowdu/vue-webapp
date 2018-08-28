<template>
  <div class="category category-container">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li class="menu-item" style="pointer-events: auto;"  :class="{'current':currentIndex === index}" v-for="(item, index) in 20" :key="item" @click="selectMenu(index,$event)" ref="menuList">

          <span class="text border-1px">
            <span class="icon" style="display: none;"></span>热销榜{{ item }}
          </span>
        </li>
      </ul>
    </div>

    <div class="goods-wrapper" ref="goodsWrapper">
      <ul>
        <li v-for="item in 20" :key="item" class="exli"  ref="goodList">
          <h1>content {{ item }}</h1>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BScroll from 'better-scroll';

@Component({
  components: {},
})
export default class Category extends Vue {
  private meunScroll: any;
  private goodsScroll: any;
  private currentIndex: number = 0;

  mounted() {
    this.$nextTick(() => {
      this.meunScroll = new BScroll(this.$refs.menuWrapper, {
        click: true,
      });

      this.goodsScroll = new BScroll(this.$refs.goodsWrapper, {
        probeType: 3,
        click: true,
      });
    });
  }

  private selectMenu(index: number, event: any) {
    if (!event._constructed) {
      return;
    }
    this.currentIndex = index;
    let menuList = this.$refs.menuList as any;
    let el = menuList[index];
    this.meunScroll.scrollToElement(el, 300);
    this.goodsScroll.scrollTo(0, 0);
  }
}
</script>

<style lang="scss" scoped>
.category-container {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 100px;
  width: 100%;
  overflow: hidden;
}

.menu-wrapper {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 180px;
  flex: 0 0 180px;
  width: 180px;
  background: #f3f5f7;

  .menu-item {
    display: table;
    height: 100px;
    width: 180px;
    padding: 0 15px;
    line-height: 100px;
    font-size: 28px;
    text-align: center;
  }

  .current {
    position: relative;
    z-index: 10;
    margin-top: -1px;
    background: #fff;
    font-weight: 700;
    border-left: 4px solid #f7624f;
  }
}

.goods-wrapper {
  flex: 1;

  ul {
    overflow: hidden;
  }

  .exli {
    height: 10vh;
    background: #eee;
    margin: 20px;
  }
}
</style>
