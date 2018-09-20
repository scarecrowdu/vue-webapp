<template>
  <div class="category category-container">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li
          ref="menuList"
          class="menu-item"
          :class="{'current':currentIndex === index}"
          v-for="(item, index) in industryList"
          :key="item.id"
          @click="selectMenu(index,$event)">
          <span> {{ item.name }} </span>
        </li>
      </ul>
    </div>

    <div class="goods-wrapper" ref="goodsWrapper">
      <ul class="category-box">
        <li
          class="recommend"
          ref="goodList"
          v-for="(module, index) in moduleList"
          :key="index">

          <p class="title">{{ module.title }}</p>
          <div 
            class="item"
            v-for="(item, key) in module.items"
            :key="key">
            <a class="link-box">
              <img :src="item.pic">
              <p>{{ item.name }}</p>
            </a>
           </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import BScroll from 'better-scroll';
import { CategoryMenu, CategoryList } from '@/store/modules/category/types';

const namespace: string = 'category';

@Component({
  components: {},
})
export default class Category extends Vue {
  private meunScroll: any;
  private goodsScroll: any;
  private currentIndex: number = 0;

  @State(state => state.category.industryList)
  industryList!: CategoryMenu[];

  @State(state => state.category.moduleList)
  moduleList!: CategoryList[];

  @Action('getCategoryRecommend', { namespace })
  getCategoryRecommend: any;

  @Action('getCategoryList', { namespace })
  getCategoryList: any;

  $refs!: {
    menuList: Element[];
    menuWrapper: Element[];
    goodsWrapper: Element[];
  };

  created() {
    this.getCategoryRecommend();
  }

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
    let menuList = this.$refs.menuList;
    let el = menuList[index];
    this.meunScroll.scrollToElement(el, 300);
    this.goodsScroll.scrollTo(0, 0);

    this.getCategoryList();
  }
}
</script>

<style lang="scss" scoped>
.category-container {
  bottom: 100px;
  display: flex;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
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

  .category-box {
    .title {
      font-size: 3.733vw;
      font-weight: 400;
      line-height: 8vw;
      margin-top: 4vw;
      padding-left: 2.667vw;
    }

    .cat4 {
      border-radius: 1.333vw;
      box-shadow: 0 0 0.667vw 0 hsla(0, 5.4%, 78%, 0.5);
    }

    .recommend {
      margin: 0 15px;
      overflow: hidden;
      padding: 10px;

      .item {
        float: left;
        overflow: hidden;
        width: 33.3333%;

        img {
          display: block;
          height: 170px;
          overflow: hidden;
          padding: 10px;
          width: 100%;
        }

        p {
          font-size: 26px;
          margin-bottom: 15px;
          text-align: center;
        }
      }
    }
  }
}

.prompt {
  margin-top: 34.667vw;
  overflow: hidden;
  text-align: center;

  img {
    width: 26.667vw;
  }
  p {
    font-size: 3.467vw;
  }
}
</style>
