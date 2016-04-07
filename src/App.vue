<template>
  <div class="app">

    <!-- 缓存路由切换的页面 -->
    <router-view class="app-view" keep-alive></router-view>

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
  #app{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      background: #f8f8f8;
  }
  .app-view {
    position: absolute;
    top: 0;
    left: 0;
    right:0;
    bottom: 55px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
</style>