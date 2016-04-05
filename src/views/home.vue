
<template>
  <div>
    <div class="app-container">
      <div class="v-home">
          <h1><img src="../assets/images/logo.png"></h1>
          <p>这是一个学习VUE-DEMO</p>
          <p>使用:Vue+Webpack+ES6+Vue-Router</p>
      </div>    
    </div>
  </div>
</template>

<script>

    export default {
        data() {
         return{
           title:'Home',
         }
        },
        route:{
          activate:function(transition){
            document.title = this.title;
            this.$root.$set('header',this.title);
            transition.next();
          }
        },

    }
</script>
<style lang="sass" scoped>
   .v-home{
    text-align:center;
   }
</style>