<template>
  <div class="login app-content">

    <app-header title="手机绑定"></app-header>
      
  </div>
</template>

<script>

    import Header from '../common/Header.vue';
    
    export default {
        data() {
         return{
           title:'清单',
         }
        },
        components:{
           appHeader:Header
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

<style lang="sass">

</style>