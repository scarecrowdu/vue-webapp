<template>
  <div class="custom-wrap">
    <div class="custom-box" v-for="item in data" :key="item.id">
      <p class="column-title">{{item.title}}</p>

      <div class="activity-column-box" v-if="item.type === 'activity'">
        <ul class="activity-column-content">
          <li class="activity-column-item" v-for="img in item.imglist" :key="img.id">
            <a href="">
              <img :src="img.src">
            </a>
          </li>
        </ul>
      </div>

      <div class="recommend-column-box" v-if="item.type === 'recommend'">
        <div class="recommend-box">
          <a class="recommend-item recommend-item-col02" v-for="img in item.imglist.slice(0,2)" :key="img.id">
            <div class="recommend-text">
              <strong class="recommend-title">{{ img.title }}</strong>
              <p class="recommend-desc ellipsis">{{ img.desc }}</p>
            </div>

            <div class="recommend-img">
              <img :src="img.src" />
            </div>
          </a>
        </div>
        <div class="recommend-box">
          <a class="recommend-item recommend-item-col04" v-for="img in item.imglist.slice(2,6)" :key="img.id">
            <div class="recommend-text">
              <strong class="recommend-title">{{ img.title }}</strong>
              <p class="recommend-desc ellipsis">{{ img.desc }}</p>
            </div>

            <div class="recommend-img">
               <img :src="img.src" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CustomColumn extends Vue {
  @Prop({ type: Array, default: () => [] })
  private data: any;
}
</script>


<style lang="scss" scoped>
.column-title {
  text-align: left;
  font-size: 30px;
  padding: 30px 30px;
}

.activity-column-box {
  .activity-column-content {
    position: relative;
    overflow: hidden;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    display: -webkit-box;

    .activity-column-item img {
      width: 260px;
      height: 176px;
      margin-left: 30px;
    }
  }
}

.recommend-column-box {
  position: relative;
  overflow: hidden;

  .recommend-box {
    display: flex;
    justify-content: space-between;

    .recommend-item {
      display: flex;
      flex-direction: column;
      padding: 10px 20px;
      background: #fff;
      border-top: 1px solid #f5f5f5;
      border-right: 1px solid #f5f5f5;

      @at-root .recommend-text {
        width: 100%;
        height: 60px;

        .recommend-title {
          font-size: 28px;
          font-weight: normal;
        }

        .recommend-desc {
          font-size: 24px;
        }
      }

      @at-root .recommend-img {
        width: 100%;
        margin-top: 15px;
      }
    }

    .recommend-item:last-child {
      border-right: none;
    }

    .recommend-item-col02 {
      width: 50%;
      height: 280px;

      .recommend-img img {
        width: 200px;
        height: 180px;
      }
    }

    .recommend-item-col04 {
      width: 25%;
      height: 250px;

      .recommend-img {
        text-align: center;

        img {
          width: 130px;
          height: 140px;
        }
      }
    }
  }
}
</style>
