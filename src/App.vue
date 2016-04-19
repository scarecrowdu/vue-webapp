<template>
  <div class="app">

    <!-- 缓存路由切换的页面 -->
    <div class="appRouter">
        <router-view class="appView"  keep-alive :class="{'change-page':changePage}"></router-view>
    </div>
    <!--  :transition="effect" -->
    <!-- app导航 -->
    <nav-bar v-if="isIndex"></nav-bar>
    
  </div>
</template>

<script>
 
  import Navbar from './views/common/Navbar.vue';
  
  export default {
     data() {
      return {
          isIndex:true,
          effect:'next',
          changePage:false
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


 /*场景切换*/
.next-enter {
    z-index: 1002;
    -webkit-animation: pageFromRightToCenter 650ms forwards;
    animation: pageFromRightToCenter 650ms forward
}
.next-leave {
    z-index: 1001;
    -webkit-animation: pageFromCenterToLeft 650ms forwards;
    animation: pageFromCenterToLeft 650ms forwards
}
.prev-enter {
    z-index: 1001;
    -webkit-animation: pageFromLeftToCenter 650ms forwards;
    animation: pageFromLeftToCenter 650ms forward
}
.prev-leave {
    z-index: 1002;
    -webkit-animation: pageFromCenterToRight 650ms forwards;
    animation: pageFromCenterToRight 650ms forwards;
}

@-webkit-keyframes pageFromRightToCenter {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
    opacity: .9;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes pageFromRightToCenter {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
    opacity: .9;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@-webkit-keyframes pageFromCenterToRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  to {
    -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
    opacity: .9;
  }
}
@keyframes pageFromCenterToRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  to {
    -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
    opacity: .9;
  }
}
.page-from-center-to-left {
  -webkit-animation: pageFromCenterToLeft 650ms forwards;
          animation: pageFromCenterToLeft 650ms forwards;
}
.page-from-left-to-center  {
  -webkit-animation: pageFromLeftToCenter 650ms forwards;
          animation: pageFromLeftToCenter 650ms forwards;
}
@-webkit-keyframes pageFromCenterToLeft {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0.5;
    -webkit-transform: translate3d(-20%, 0, 0);
            transform: translate3d(-20%, 0, 0);
  }
}
@keyframes pageFromCenterToLeft {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0.5;
    -webkit-transform: translate3d(-20%, 0, 0);
            transform: translate3d(-20%, 0, 0);
  }
}
@-webkit-keyframes pageFromLeftToCenter {
  from {
    opacity: .5;
    -webkit-transform: translate3d(-20%, 0, 0);
            transform: translate3d(-20%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
}
@keyframes pageFromLeftToCenter {
  from {
    opacity: .5;
    -webkit-transform: translate3d(-20%, 0, 0);
            transform: translate3d(-20%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
}
  
</style>