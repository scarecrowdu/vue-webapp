<template>
  <div id="app" v-cloak :class="{'change-page':changePage}" >

      <!-- 路由 -->
      <div class="wrap">
        <router-view class="v"  :transition="effect" keep-alive ></router-view>
        <!-- :transition="effect" -->
      </div>

      <!-- 导航 -->
      <navbar v-if="isIndex"></navbar>

      <!-- loading -->
      <loading :show="loadshow"></loading>

  </div>
</template>

<script>
  import navbar from './views/common/Navbar.vue';
  import loading from './components/Loading.vue';
  export default {
     data() {
        return { 
            effect       :  'next',     //用于切换过渡动画
            isIndex      :  true,       //用于navbar导航
            changePage   :  false,      //用于过渡设置样式
            loadshow     :  false       //用于全局loading
        }
     },
     methods:{},
     ready(){},
     components:{
       navbar,
       loading
     },
  }
</script>

<style>
  @import '~vux/vux.css';
  [v-cloak] { 
    display: none;
  }
  body{
    background: yellow;
  }
</style>