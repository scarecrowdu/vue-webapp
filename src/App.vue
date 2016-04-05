<template>
  <div class="app">

    <div class="app-title">
      <h1 v-text="header">App Header</h1>
      <p>当前路径: {{$route.path}}</p>
    </div>

    <nav class="app-nav">
      <a v-link="{ name: 'home', exact: true }">首页</a>
      <a v-link="{ path: '/nofound' }">404</a>
    </nav>

    <router-view class="app-view" :transition="effect" ></router-view>
    
  </div>
</template>

<script>

  export default {
     data() {
      return {
        effect: 'fade',
      }
     },
     components:{
     },
     methods:{
     }

  }

</script>

<style lang="sass">
[v-cloak] {
  display: none;
}

/* 标题 */
.app-title{
  margin:20px 10px;
}

.custom-active-class{
  color: #f13f3f !important;
  border:1px solid #f13f3f !important;
}


/*导航烂*/
.app-nav{
  clear: both;
  margin:10px;
   
  >a{
    display: inline-block;
    border:1px solid #ddd;
    border-radius:3px; 
    padding: 5px 10px;
    margin-right: 5px;
    margin-top: 5px;
    text-align: center;
    color: #333;
  } 
}
  
.app-view {
  transition: all .3s ease;
  position: absolute;
  width: 100%;
  left:0;
}

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