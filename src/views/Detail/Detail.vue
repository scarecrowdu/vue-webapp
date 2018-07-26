<template>
  <div class="detail buy-goods-wrap">
    <div class="goodsSwiper">
      <img src="https://img.alicdn.com/imgextra/i3/413996455/TB2zjclb25TBuNjSspcXXbnGFXa_!!413996455.jpg_640x640q85s150_.webp">
    </div>

    <!-- 价格 -->
    <div class="goods-price">
      <p class="goods-sales-price">¥
        <em>39.00</em>
      </p>
      <p class="goods-original-price">价格
        <del>63.00</del>
      </p>
    </div>

    <!-- 价格 -->
    <div class="goods-name">
      <p class="goods-name-text">
        华霸休闲鞋男夏秋季板鞋子男士网面透气帆布鞋飞织鞋男韩版潮流学生鞋增高户外旅游运动休闲低帮 AD001款黑白 41
      </p>
      <p class="goods-share"></p>
    </div>

    <!-- 其他信息 -->
    <div class="goods-text">
      <p class="goods-express">快递：免邮</p>
      <p class="goods-sales">月销500笔</p>
      <p class="goods-evaluation">评价1009条</p>
    </div>

    <div class="goods-gary"></div>

    <!-- 规格 -->
    <div class="goods-cell" @click="popupVisible = true">
      <div class="goods-cell-title">
        <p>规格</p>
      </div>
      <div class="goods-cell-content">
        <p>请选择 层数 颜色分类 </p>
      </div>
      <div class="goods-cell-icon">
        <p>></p>
      </div>
    </div>

    <!-- 参数 -->
    <div class="goods-cell">
      <div class="goods-cell-title">
        <p>参数</p>
      </div>
      <div class="goods-cell-content">
        <p>产品 品牌...</p>
      </div>
      <div class="goods-cell-icon">
        <p>></p>
      </div>
    </div>

    <div class="goods-gary"></div>

    <!-- 店铺 -->
    <div class="goods-shop">
      <div class="goods-shop-name">
        <img class="shop-logo" src="https://img.alicdn.com/imgextra/i2/413996455/TB22EWwiv1TBuNjy0FjXXajyXXa_!!413996455.jpg_.webp">
        <p class="shop-name ellipsis">摩登主妇生活馆</p>
      </div>

      <div class="goods-shop-evaluation">
        <p class="gs-desc">商品描述：
          <span>4.9</span>
          <span>高</span>
        </p>
        <p class="gs-sales">卖家服务：
          <span>4.9</span>
          <span>高</span>
        </p>
        <p class="gs-express">物流服务：
          <span>4.9</span>
          <span>高</span>
        </p>
      </div>

      <div class="goods-shop-bnts">
        <button>关注店铺</button>
        <button>进入店铺</button>
      </div>
    </div>

    <!-- 详情 -->
    <div class="goods-detail-desc">
      <p class="detail-desc-title">
        <span>详情</span>
      </p>
      <img class="desc-img" src="https://img.alicdn.com/imgextra/i3/413996455/TB2vc2olFXXXXaOXXXXXXXXXXXX_!!413996455.jpg_640x0q85s150_.webp">
      <img class="desc-img" src="https://img.alicdn.com/imgextra/i1/413996455/TB2mgnwirlmpuFjSZFlXXbdQXXa_!!413996455.jpg_640x0q85s150_.webp" data-spm-anchor-id="a2141.7c.0.i2">
      <img class="desc-img" src="https://img.alicdn.com/imgextra/i4/413996455/TB2C_E0AwmTBuNjy1XbXXaMrVXa_!!413996455.jpg_640x0q85s150_.webp">
      <img class="desc-img" src="https://img.alicdn.com/imgextra/i4/413996455/TB2z5zciCVmpuFjSZFFXXcZApXa_!!413996455.jpg_640x0q85s150_.webp">
    </div>

    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup">
      <div style="width: 100vw; background: #fff; height: 300px;">
        <button @click="popupVisible = false" >close</button>
      </div>
    </mt-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Popup } from 'mint-ui';
import 'mint-ui/lib/popup/style.css';

@Component({
  components: {
    [Popup.name]: Popup,
  },
})
export default class Detail extends Vue {
  private popupVisible: boolean = false;
}
</script>

<style lang="scss" scoped>
.mint-popup {
  width: 100%;
}
</style>


<style lang="scss" scoped>
.goodsSwiper {
  overflow: hidden;
  width: 100;
  height: 850px;
  background: #f5f5f5;

  img {
    width: 100%;
    height: 850px;
  }
}

.buy-goods-wrap {
  .goods-gary {
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 20px;
    background-color: #f5f5f5;
    position: relative;
  }
  .goods-price {
    overflow: hidden;
    position: relative;
    padding: 0 20px;
    margin-top: 24px;
    .goods-sales-price {
      font-size: 24px;
      font-weight: bold;
      color: #e4393c;

      em {
        font-size: 38px;
        font-style: normal;
      }
    }

    .goods-original-price {
      font-size: 24px;

      del {
        font-style: normal;
      }
    }
  }

  .goods-name {
    display: flex;
    overflow: hidden;
    position: relative;
    padding: 20px 20px;

    .goods-name-text {
      font-size: 30px;
      font-weight: bold;
      line-height: 40px;
    }

    .goods-share {
      width: 240px;
      height: 100px;
    }
  }

  .goods-text {
    display: flex;
    overflow: hidden;
    position: relative;
    padding: 0 20px;
    padding-bottom: 20px;

    > p {
      flex: 1;
      font-size: 24px;
    }

    > p:nth-child(2) {
      text-align: center;
    }

    > p:nth-child(3) {
      text-align: right;
    }
  }

  .goods-shop {
    padding: 10px 0;
    .goods-shop-name {
      display: flex;
      overflow: hidden;
      position: relative;
      padding: 0 20px;
      align-items: center;
      .shop-logo {
        width: 80px;
        height: 80px;
      }

      .shop-name {
        flex: 1;
        font-size: 28px;
        margin-top: 10px;
        margin-left: 15px;
      }
    }
  }

  .goods-shop-evaluation {
    display: flex;
    overflow: hidden;
    position: relative;
    padding: 0 20px;

    > p {
      flex: 1;
      font-size: 24px;

      span {
        display: inline-block;
        margin-right: 10px;
        color: #e4393c;
      }
    }

    > p:nth-child(2) {
      text-align: center;
    }

    > p:nth-child(3) {
      text-align: right;
    }
  }

  .goods-shop-bnts {
    display: flex;
    overflow: hidden;
    padding: 20px 0 10px 20px;

    button {
      flex: 1;
      position: relative;
      border: none;
      margin: 10px 20px 0 0;
      height: 60px;
      line-height: 60px;
      font-size: 24px;
      background-color: #fff;
      border: 1px solid #ddd;
    }
  }
}

.goods-detail-desc {
  .detail-desc-title {
    position: relative;
    display: -webkit-box;
    -webkit-box-pack: center;
    padding: 20px 0;
    text-align: center;
    font-size: 28px;
    background-color: #f5f5f5;

    &:after {
      transform: scaleY(0.5);
      background-color: #cbcbcb;
      content: '';
      height: 1px;
      left: 0;
      position: absolute;
      top: 50%;
      width: 100%;
    }

    span {
      display: block;
      position: relative;
      z-index: 1;
      padding: 0 20px;
      background-color: #f5f5f5;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }
}

.goods-cell {
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  padding: 20px 20px;
  font-size: 26px;
  line-height: 50px;

  .goods-cell-title {
    width: 100px;
    color: rgb(153, 153, 153);
  }

  .goods-cell-content {
    flex: 1;
  }
}
</style>
