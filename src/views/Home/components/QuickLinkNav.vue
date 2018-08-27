<template>
  <div class="quick-nav-box">
    <nav class="quick-link-nav">
      <a href="#/" class="quick-link-item" v-for="item in data" :key="item.id">
        <span class="quick-box">
          <img :src="item.icon">
          <span class="ellipsis">{{ item.title }}</span>
        </span>
      </a>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class QuickLinkNav extends Vue {
  @Prop(Array)
  data: any;
}
</script>

<style lang="scss" scoped>
.quick-nav-box {
  position: relative;
  overflow: hidden;
  z-index: 1000;
  width: 100%;
  height: 100%;

  @at-root .quick-link-nav {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding: 10px 10px;

    .quick-link-item {
      width: 146px;
      margin-top: 10px;
      text-align: center;
    }

    .quick-box {
      display: block;

      img {
        width: 80px;
        height: 80px;
      }

      span {
        display: block;
        line-height: 38px;
        font-size: 24px;
        color: rgb(102, 102, 102);
      }
    }
  }
}
</style>
