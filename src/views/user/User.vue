<template>
  <div class="user ">

      <!-- 缓存二级路由切换的页面 -->
      <router-view keep-alive > </router-view>

  </div>
</template>

<script>
    
    export default {
        data() {
         return{
           title:'登陆',
           isIndex:true,
         }
        },
        route:{
          activate:function(transition){
            transition.next();
          }
        },
    }
</script>

<style lang="sass">

.page-enter {
    z-index: 2002;
    -webkit-animation: pageFromRightToCenter 600ms forwards;
    -o-animation: pageFromRightToCenter 600ms forwards;
    animation: pageFromRightToCenter 600ms forward
}
.page-leave {
    z-index: 2002;
    -webkit-animation: pageFromCenterToRight 600ms forwards;
    -o-animation: pageFromCenterToRight 600ms forwards;
    animation: pageFromCenterToRight 600ms forwards
}

</style>