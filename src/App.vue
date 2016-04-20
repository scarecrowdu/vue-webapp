<template>

  <div id="app" :class="{'change-page':changePage}">
    <!-- app导航 -->
    <nav-bar v-if="isIndex"></nav-bar>


    <div class="wrap">
      <router-view class="v"  :transition="effect" keep-alive ></router-view>
      <!-- :transition="effect" -->
    </div>

    <loading :show="loadshow"></loading>

</div>


</template>

<script>
 
  import Navbar from './views/common/Navbar.vue';
  import Loading from './components/Loading.vue';
  
  export default {
     data() {
      return {
          isIndex:true,
          effect:'next',
          changePage:false,
          loadshow:false
      }
     },
     components:{
       navBar:Navbar,
       loading:Loading
     },
     methods:{
     },
     ready(){
     
     }

  }
  
</script>

<style lang="sass">

</style>