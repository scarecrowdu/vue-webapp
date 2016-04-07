<template>
  <div class="app">

    <!-- 缓存路由切换的页面 -->
    <router-view class="app-view"  :transition="effect"></router-view>
    <!-- :transition="effect" -->

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
  .app{
      height: 100%;
      position: relative;
      box-sizing: border-box;
  }
  .mainArea{
    position: relative;
    width: 100%!important;
    height: 100%!important;
    margin: 0 auto;
    box-sizing: border-box;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
  }

  .app-view {
    transition: all .5s ease;
    -webkit-transition: all .5s ease;
    position: absolute;
      top:0;
    left: 0;
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background: #f8f8f8;
  }


/* 过渡动画 */
.fade-enter, .fade-leave {
  opacity: 0.5;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}
.fade-enter{
  opacity: 1;
  -webkit-transform: translate3d(100%, 0, 0);
          transform: translate3d(100%, 0, 0);
}

.fade-leave {
  opacity: 0.5;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}

.back-enter {
  opacity: 1;
  -webkit-transform: translate3d(-110%, 0, 0);
          transform: translate3d(-110%, 0, 0);

}
.back-leave{
  opacity: 0.5;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}



 
</style>