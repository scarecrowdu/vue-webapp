<template>
  <swiper :options="swiperOption" ref="bannerSwiper" class="banner-swiper">
    <!-- slides -->
    <swiper-slide v-for="item in data" :key="item.id || item.activityId">
      <router-link :to="item.isActivity ? '/detail/'+ item.id : '/activity/' + item.activityId">
        <img :src="item.src" :alt="item.desc" />
      </router-link>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

@Component({
  components: {
    swiper,
    swiperSlide,
  },
})
export default class BannerSwiper extends Vue {
  @Prop(Array)
  data: any;

  swiperOption = {
    pagination: {
      el: '.swiper-pagination',
    },
  };

  get swiper() {
    return (this.$refs.bannerSwiper as any).swiper;
  }
}
</script>

<style lang="scss" scoped>
.banner-swiper {
  height: 264px;
  background: #f5f5f5;

  .swiper-slide img {
    width: 100%;
    height: 264px;
  }
}
</style>
