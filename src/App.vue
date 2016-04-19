<template>

  <div id="app" :class="{'change-page':changePage}">
    <!-- app导航 -->
    <nav-bar v-if="isIndex"></nav-bar>


    <div class="wrap">
      <router-view class="v"  ></router-view>
    </div>
    <!-- :transition="effect" -->

</div>


</template>

<script>
 
  import Navbar from './views/common/Navbar.vue';
  import IScroll from './lib/iscroll/iscroll.js';
  
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
     },
     ready(){
     
     }

  }
  
</script>

<style lang="sass">

</style>