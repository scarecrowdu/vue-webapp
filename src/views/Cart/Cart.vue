<template>
  <div class="cart cart-container">
    <Header class="cart-header" title="购物车">
      <a class="back-cell" slot="left" @click="goBack">
        <icon name="back"></icon>
      </a>
    </Header>

    <div class="cart-area">
      <div class="cart-list">
        <div
          class="cart-group"
          v-if="goods.length > 0"
          v-for="(goods, key) in cartInfo.gorups"
          :key="key">


          <div class="shop-item border-bottom">
            <div class="shopcb">
              <p @click="selectShop(cartInfo.shops[key])">
                <icon name="checkbox-right" v-if="cartInfo.shops[key].fields.checked === true" ></icon>
                <icon name="checkbox" v-else></icon>
              </p>
            </div>
            <div class="shopicon">
              <icon name="shop"></icon>
            </div>
            <div class="contact">
              <a href="">{{ cartInfo.shops[key].fields.title }} ></a>
            </div>
            <div class="state">
              <p @click="editBuyEditStatus(key)">
                <span v-if="cartInfo.shops[key].fields.is11">完成</span>
                <span v-else>编辑</span>
              </p>
            </div>
          </div>

          <!-- single good -->
          <div
            v-if="cartInfo.goods"
            class="cart-item"
            v-for="item in goods"
            :key="item">

            <div class="cart-item-box" :class="{ 'act-edit' : cartInfo.shops[key].fields.is11}">
              <div class="item-cb">
                <p @click="selectGood(cartInfo.goods[item])">
                  <icon name="checkbox-right" v-if="cartInfo.goods[item].fields.checked  === true"></icon>
                  <icon name="checkbox" v-else></icon>
                </p>
              </div>

              <div class="item-detail">
                <div>
                  <div class="item-img">
                    <a>
                      <img :src="cartInfo.goods[item].fields.pic">
                    </a>
                  </div>

                  <div class="item-info">
                    <a href="">
                      <h3 class="title">{{ cartInfo.goods[item].fields.title }}</h3>
                      <div class="edit-sku">
                        <div>
                          {{ cartInfo.goods[item].fields.sku.title }}
                          <icon name="arrow-down"></icon>
                        </div>
                      </div>
                    </a>

                    <div class="pay">
                      <div class="pay-price">
                        <div class="price">
                          <p class="o-t-price">
                            <span class="major">{{ cartInfo.goods[item].fields.pay.now | filterPrice }}</span>
                          </p>
                        </div>
                      </div>

                      <div class="edit-quantity">
                        <p class="btn-minus" @click.prevent="actionBuyQuantity(cartInfo.goods[item], 'minus')">
                          <a class="sbtn minus off">
                            <icon name="minus"></icon>
                          </a>
                        </p>
                        <p class="btn-input">
                          <input
                            type="number"
                            v-model.number="cartInfo.goods[item].fields.quantity.quantity"
                            :min="cartInfo.goods[item].fields.quantity.min"
                            :max="cartInfo.goods[item].fields.quantity.max"
                            @blur="actionBuyQuantity(cartInfo.goods[item], 'input')">
                        </p>
                        <p class="btn-plus" @click.prevent="actionBuyQuantity(cartInfo.goods[item], 'plus')">
                          <a class="sbtn plus">
                            <icon name="plus"></icon>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="cart-item-del" :class="{ 'act-del' : cartInfo.shops[key].fields.is11}" @click="delCartGood(cartInfo.goods[item])">
              <div>删除</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cart-empty" style="display: none;">
      <icon class="cart-icon" name="gouwuche"></icon>
      <p>购物车是空空的</p>
      <router-link class="cart-gzbtn" to="/">看看关注</router-link>
    </div>

    <div class="guess-like-wrap" style="min-height: 80vh;">
      <p class="guess-title">
        <span class="guess-layout">为你推荐</span>
      </p>
      <GoodList :data="goodslist" />
    </div>

    <div class="cart-fixed">
      <div class="cart-settlement">
        <div class="allcb">
          <div @click="selectAll">
            <icon name="checkbox-right" v-if="cartInfo.footer && cartInfo.footer.fields.checkAll.checked === true"></icon>
            <icon name="checkbox" v-else></icon>
            <span>全选</span>
          </div>
        </div>
        <div class="total">
          <div>
            <span>合计：</span>
            <span class="money">{{ payInfo.totalprice }}</span>
          </div>
        </div>
        <div class="btns">
          <span>结算</span>
          <span>({{ payInfo.quantity }})</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';

import Header from '@/components/Header.vue';
import GoodList from '@/components/GoodList.vue';

const namespace: string = 'cart';

@Component({
  components: {
    Header,
    GoodList,
  },
  filters: {
    filterPrice(num: number) {
      return num / 100;
    },
  },
})
export default class Cart extends Vue {
  @State(state => state.shop.goodslist)
  goodslist!: StoreState.Goods[];

  @Getter('cartInfo', { namespace })
  cartInfo!: any;

  @Getter('payInfo', { namespace })
  payInfo!: any;

  @Action('getCartList', { namespace })
  getCartList: any;

  @Action('selectGood', { namespace })
  selectGood: any;

  @Action('selectShop', { namespace })
  selectShop: any;

  @Action('selectAll', { namespace })
  selectAll: any;

  @Action('editBuyQuantity', { namespace })
  editBuyQuantity: any;

  @Action('editBuyEditStatus', { namespace })
  editBuyEditStatus: any;

  @Action('delCartGood', { namespace })
  delCartGood: any;

  @Action('shop/getGoodsList')
  getGoodsList: any;

  created() {
    this.getCartList();
    this.getGoodsList();
  }

  private goBack() {
    this.$router.go(-1);
  }

  private actionBuyQuantity(item: any, type: string) {
    this.editBuyQuantity({ item, type });
  }
}
</script>

<style lang="postcss">
@import url('../../style/mixins.css');
</style>

<style lang="scss">
.cart-container {
  min-height: 100vh;
  background: #f5f5f5;
}

.cart-header {
  .back-cell {
    .icon {
      color: #ffffff;
      font-size: 35px;
    }
  }
}

.cart-group {
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }

  .shop-item {
    position: relative;
    display: flex;
    align-items: center;
    -webkit-box-align: center;
    width: 100%;
    height: 88px;
    padding-left: 20px;
    box-sizing: border-box;
    background: #fff;
    font-size: 28px;

    .shopcb {
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      display: flex;
      margin-right: 20px;

      .icon {
        font-size: 40px;
      }
    }

    .shopicon {
      margin-right: 10px;
      svg {
        font-size: 36px;
      }
    }

    .contact {
      flex: 1;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;

      a {
        width: 100%;
        display: flex;
        padding-right: 16px;
        box-sizing: border-box;
        color: #051b28;
        font-size: 24px;
      }
    }

    .state {
      margin-left: 16px;
      display: flex;

      p {
        margin-right: 20px;
        font-size: 24px;
      }
    }
  }

  .cart-item {
    position: relative;
    display: flex;
    font-size: 24px;
  }

  @at-root .cart-item-box {
    position: relative;
    z-index: 10;
    display: flex;
    background: #fff;
    transition: transform 0.2s ease-in 0s;

    .o-t-price {
      color: #f60;
      display: inline;

      &:before {
        content: '￥';
        display: inline-block;
      }

      .major {
        font-size: 32px;
      }
    }

    .item-cb {
      -webkit-box-pack: center;
      -ms-box-pack: center;
      -o-box-pack: center;
      display: -webkit-box;
      width: 80px;
      margin-right: 10p;
      position: relative;

      p {
        display: flex;
        align-items: center;
        -webkit-box-align: center;

        .icon {
          font-size: 40px;
        }
      }
    }

    .item-detail {
      flex: 1;

      div {
        display: flex;
      }

      .item-img {
        width: 200px;
        margin: 15px 0 15px 0px;
        background: #fff;
        overflow: hidden;
        display: flex;
        -webkit-flex-direction: column;
        flex-direction: column;

        a {
          display: block;
          height: 200px;
          line-height: 250px;
          text-align: center;
          overflow: hidden;
        }

        img {
          width: 100%;
          max-width: 100%;
          transform: translateZ(0);
        }
      }

      .item-info {
        flex: 1;
        padding: 15px 30px;
        box-sizing: border-box;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;

        .title {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-weight: normal;
          color: #051b28;
          font-size: 23px;
          height: 60px;
          line-height: 32px;
        }

        .edit-sku {
          margin-top: 16px;
          max-height: 46px;
          color: #999;
          cursor: pointer;

          > div {
            max-height: 46px;
            line-height: 40px;
            overflow: hidden;
            box-sizing: boder-box;
            position: relative;
            background-color: #f5f5f5;
            border-radius: 8px;
            padding: 5px 5px 5px 10px;
            display: flex;
            align-items: center;
            -webkit-box-align: center;

            svg {
              margin-left: 10px;
            }
          }
        }

        .pay {
          display: flex;
          width: 100%;
          height: 87px;
          line-height: 87px;
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;

          .pay-price {
            flex: 1;
          }
        }

        .edit-quantity {
          height: 100%;
          width: 175px;
          display: flex;

          input {
            width: 100%;
            text-align: center;
            font-size: 28px;
            height: 100%;
          }

          .sbtn {
            display: block;
            height: 100%;
            position: relative;
            text-align: center;
          }
        }

        .btn-minus,
        .btn-plus {
          width: 65px;
          height: 100%;
        }

        .btn-input {
          width: 45px;
        }
      }
    }
  }

  .cart-item-del {
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 120px;
    z-index: 1;
    color: #fff;
    background: #f7624f;
    border-top: 2px solid #f5f5f5;
    border-bottom: 2px solid #f5f5f5;

    div {
      display: flex;
      margin: auto;
      text-align: center;
      align-items: center;
      -webkit-box-align: center;
    }
  }

  .act-edit {
    transform: translate3d(-120px, 0px, 0px);
  }

  .act-del {
    z-index: 1;
  }
}

.cart-empty {
  padding: 60px 0 40px 0;
  text-align: center;
  background: #fff;

  .cart-icon {
    font-size: 160px;
  }

  .cart-gzbtn {
    display: block;
    font-size: 26px;
    padding: 10px;
    width: 150px;
    margin: 20px auto;
    color: #f7624f;
    border: 1px solid #f7624f;
    border-radius: 6px;
  }

  p {
    line-height: 45px;
    font-size: 26px;
  }
}

.cart-fixed {
  position: fixed;
  z-index: 99;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 100px;
  background: hsla(0, 0%, 100%, 0.95);
  color: #333;
  font-size: 28px;
  box-shadow: 0 0 0.667vw 0 hsla(0, 5.4%, 78%, 0.3);

  .cart-settlement {
    display: flex;
    width: 100%;
    height: inherit;
    background: #fff;
    // border-top: 1px solid #e7e7e7;
  }

  @at-root .cart-settlement {
    .allcb {
      width: 160px;
      -webkit-box-pack: center;
      align-items: center;
      display: flex;

      .icon {
        width: 80px;
        text-align: center;
        font-size: 40px;
      }
    }

    .total {
      flex: 1;
      display: flex;
      align-items: center;
      -webkit-box-align: center;
      text-align: right;

      div {
        flex: 1;
        text-align: right;
      }

      .money {
        color: #f7624f;

        &:before {
          content: '￥';
          display: inline-block;
        }
      }
    }

    .btns {
      width: 220px;
      color: #fff;
      background: #f50;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      display: flex;
      margin-left: 30px;
    }
  }
}
</style>
