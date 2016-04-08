<template>
  <div class="app" :class="{'change-page':changePage}">

    <!-- 缓存路由切换的页面 -->
    <div class="wrap">
      <router-view class="app-view v" keep-alive ></router-view>
    </div>

    <!-- app导航 -->
    <nav-bar></nav-bar>
    
  </div>
</template>

<script>
 
  import Navbar from './views/common/Navbar.vue';
  
  export default {
     data() {
      return {
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
  .app{
      height: 100%;
      position: relative;
      box-sizing: border-box;
  }
  .mainArea{
    // position: relative;
    // width: 100%!important;
    // height: 100%!important;
    // margin: 0 auto;
    // box-sizing: border-box;
    // overflow: hidden;
    // -webkit-overflow-scrolling: touch;
  }
  .hidden-page-y{
    overflow-y: hidden;
  }

  .app-view {
    background: #f8f8f8;
  }
    .v{
      min-height:calc(100vh - 50px);
    }
  
    .wrap{
      position:relative;
      height: 100%;
      margin-bottom: 50px;
      color:#fff;
    }
    .change-page .v{
      position: absolute;
      top:0;
      width: 100%;
      overflow-y: hidden;
    }

    ::-webkit-scrollbar {
      display: none;
    }



 /*场景切换*/
  .next-enter {
      z-index: 1002;
      -webkit-animation: pageFromRightToCenter 500ms forwards;
      animation: pageFromRightToCenter 500ms forward
  }
  .next-leave {
      z-index: 1001;
      -webkit-animation: pageFromCenterToLeft 500ms forwards;
      animation: pageFromCenterToLeft 500ms forwards
  }
  .prev-enter {
      z-index: 1001;
      -webkit-animation: pageFromLeftToCenter 500ms forwards;
      animation: pageFromLeftToCenter 500ms forward
  }
  .prev-leave {
      z-index: 1002;
      -webkit-animation: pageFromCenterToRight 500ms forwards;
      animation: pageFromCenterToRight 500ms forwards;
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
    -webkit-animation: pageFromCenterToLeft 500ms forwards;
            animation: pageFromCenterToLeft 500ms forwards;
  }
  .page-from-left-to-center  {
    -webkit-animation: pageFromLeftToCenter 500ms forwards;
            animation: pageFromLeftToCenter 500ms forwards;
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