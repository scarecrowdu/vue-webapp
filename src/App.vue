<template>
  <div class="app">

    <!-- vue View -->
    <router-view class="app-view" :transition="effect" ></router-view>

    <!-- app导航 -->
    <nav-bar></nav-bar>
    
  </div>
</template>

<script>
 
  import Navbar from './views/common/Navbar.vue';

  export default {
     data() {
      return {
        effect: 'fade',
      }
     },
     components:{
       navBar:Navbar
     },
     methods:{
     }

  }

</script>

<style lang="sass">
[v-cloak] {
  display: none;
}


.app-view {
  transition: all .3s ease;
  position: absolute;
  width: 100%;
  left:0;
  top:0;
  overflow: auto;
}


/* 过渡动画 */
.fade-enter, .fade-leave {
  opacity: 0;
  transform: translate3d(0, 0, 0);
}
.fade-enter{
  opacity: 1;
  transform: translate3d(100%, 0, 0);
}

.fade-leave {
  opacity: 0;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}


.back-enter {
  opacity: 1;
  -webkit-transform: translate3d(-110%, 0, 0);
          transform: translate3d(-110%, 0, 0);

}
.back-leave{
  opacity: 0;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}

</style>