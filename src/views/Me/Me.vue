<template>
  <div class="me me-wrap">
    <div class="me-header">
      <div class="me-header-main">
        <div class="m-header-avatar">
          <img src="//img11.360buyimg.com/jdphoto/s120x122_jfs/t5683/191/7076936752/5123/834e5571/596dd62bN7a8affc5.png">
        </div> 

        <div class="m-header-msg">
          <div class="mh-user-name">Vincent Du</div>
          <div class="mh-user-info">
            <span>信用值: 93.6</span>
          </div>
        </div>

        <div class="m-header-settings">
          <icon name="nav4a"></icon>
        </div>
      </div>

      <div class="me-header-links">
        <div class="me-links-item">
          <p class="have-nums">162</p>
          <p class="link-name">收藏夹</p>
        </div>
        <div class="me-links-item">
          <p class="have-nums">22</p>
          <p class="link-name">关注店铺</p>
        </div>
        <div class="me-links-item">
          <p class="have-nums">88</p>
          <p class="link-name">足迹</p>
        </div>
        <!-- <div class="me-links-item">
          <p class="have-nums">2</p>
          <p class="link-name">收藏夹</p>
        </div> -->
      </div>
    </div>

    <section class="me-act">

    </section>

    <section class="block-area me-order">
      <div class="block-area-box">
        <div class="block-box-header">
          <p class="block-title">我的订单</p>
          <p class="block-more">查看更多订单<icon name="arrow-right"></icon></p>
        </div>

        <ul class="block-box-cell">
          <li class="block-item">
            <a>
              <p class="block-icon">
                <icon name="daifukuanicon"></icon>
              </p>
              <p class="block-name">代付款</p>
              <!-- <span class="block-tag">12</span> -->
            </a>
          </li>

          <li class="block-item">
            <a>
              <p class="block-icon">
                <icon name="daifahuo"></icon>
              </p>
              <p class="block-name">代发货</p>
              <span class="block-tag">12</span>
            </a>
          </li>

          <li class="block-item">
            <a>
              <p class="block-icon">
                <icon name="fahuo"></icon>
              </p>
              <p class="block-name">代收货</p>
              <!-- <span class="block-tag">12</span> -->
            </a>
          </li>

          <li class="block-item">
            <a>
              <p class="block-icon">
                <icon name="daipingjia1"></icon>
              </p>
              <p class="block-name">代评价</p>
              <!-- <span class="block-tag">12</span> -->
            </a>
          </li>

          <li class="block-item">
            <a>
              <p class="block-icon">
                <icon name="tuikuanzhong"></icon>
              </p>
              <p class="block-name">退款/售后</p>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section class="block-area me-tools">
      <div class="block-area-box">
        <div class="block-box-header">
          <p class="block-title">必备工具箱</p>
          <p class="block-more">查看全部工具<icon name="arrow-right"></icon></p>
        </div>

        <ul class="block-box-cell">
          <li class="block-item fli5">
            <a>
              <p class="block-icon">
                <icon name="huodong"></icon>
              </p>
              <p class="block-name">我的活动</p>
            </a>
          </li>

          <li class="block-item fli5">
            <a>
              <p class="block-icon">
                <icon name="youhuiquan1"></icon>
              </p>
              <p class="block-name">领券中心</p>
            </a>
          </li>

          <li class="block-item fli5">
            <a>
              <p class="block-icon">
                <icon name="qianbao1"></icon>
              </p>
              <p class="block-name">我的钱包</p>
            </a>
          </li>

          <li class="block-item fli5">
            <a>
              <p class="block-icon">
                <icon name="kefucopy"></icon>
              </p>
              <p class="block-name">客服反馈</p>
            </a>
          </li>

          <li class="block-item fli5">
            <a>
              <p class="block-icon">
                <icon name="pingjia6"></icon>
              </p>
              <p class="block-name">我的评价</p>
            </a>
          </li>

          <li class="block-item fli5">
            <a>
              <p class="block-icon">
                <icon name="wenda1"></icon>
              </p>
              <p class="block-name">我的问答</p>
            </a>
          </li>

          <li class="block-item fli5">
            <a>
              <p class="block-icon">
                <icon name="huiyuanzhongxin"></icon>
              </p>
              <p class="block-name">会员中心</p>
            </a>
          </li>

          <li class="block-item fli5">
            <a>
              <p class="block-icon">
                <icon name="gengduo1"></icon>
              </p>
              <p class="block-name">更多</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Me extends Vue {}
</script>


<style lang="scss" scoped>
.me-wrap {
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 50px;

  .me-order {
    margin-top: 0px;
  }
}

.me-header {
  position: relative;
  height: 320px;
  background: url('../../assets/images/mheader_bg.png');
  background-size: cover;
  background-position: center;

  .me-header-main {
    display: flex;
    align-items: center;
    -webkit-box-align: center;
    height: 160px;
    padding: 15px 30px;
    color: #ffffff;
  }

  .me-header-links {
    display: flex;
    height: 100px;
    color: #ffffff;
  }

  @at-root .me-header-main {
    .m-header-avatar {
      position: relative;
      overflow: hidden;
      width: 100px;
      height: 100px;
      margin-right: 20px;
      border-radius: 50%;
      background: #ffffff;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .m-header-msg {
      flex: 1;

      .mh-user-name {
        font-size: 32px;
        font-weight: bold;
      }

      .mh-user-info {
        margin-top: 10px;
        font-size: 26px;
      }
    }

    .m-header-settings {
      position: absolute;
      top: 40px;
      right: 40px;
      width: 50px;
      height: 50px;

      svg {
        font-size: 50px;
      }
    }
  }

  @at-root .me-header-links {
    .me-links-item {
      flex: 1;
      min-width: 25%;
      text-align: center;

      .have-nums {
        font-size: 30px;
        font-weight: bold;
      }

      .link-name {
        margin-top: 10px;
        font-size: 26px;
      }
    }
  }
}

.block-area {
  min-height: 200px;
  margin: 30px 30px;
  border-radius: 10px;
  background: #fff;

  .block-area-box {
    position: relative;
    overflow: hidden;
  }

  .block-box-header {
    display: flex;
    padding: 25px 20px;
    border-bottom: 1px solid #eeeeee;

    .block-title {
      width: 200px;
      font-size: 28px;
      font-weight: bold;
    }

    .block-more {
      flex: 1;
      font-size: 24px;
      text-align: right;
    }
  }

  .block-box-cell {
    overflow: hidden;
    margin-top: 10px;
    padding: 20px 0;

    li.fli5 {
      width: 25%;

      &:nth-child(n + 5) {
        margin-top: 20px;
      }
    }

    li {
      float: left;
      width: 20%;
      text-align: center;
      font-size: 26px;
      position: relative;

      a {
        display: block;
      }

      .block-icon {
        width: 70px;
        height: 70px;
        margin: auto;
        // background: #f5f5f5;

        svg {
          font-size: 60px;
        }
      }

      .block-name {
        margin: 10px auto;
      }

      .block-tag {
        position: absolute;
        top: -5px;
        right: 15px;
        width: 40px;
        height: 40px;
        font-size: 20px;
        color: #fff;
        line-height: 40px;
        border-radius: 50%;
        background: #f7624f;
        // border: 2px solid f7624f;
      }
    }
  }
}
</style>
