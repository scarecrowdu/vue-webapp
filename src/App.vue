<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
    	<keep-alive>
        <router-view/>
      </keep-alive>
    </transition>

    <Footer :data="navs" v-show="isNav" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Footer,
  },
})
export default class Home extends Vue {
  private isNav: boolean = false;

  @State
  navs!: StoreState.Navs[];

  @Watch('$route')
  onRotuteChanged(val: any) {
    const { meta } = val;
    this.isNav = meta.isNav || false;
  }

  created() {
    let { isNav } = this.$route.meta;
    this.isNav = isNav || false;
  }
}
</script>


<style lang="scss">
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
