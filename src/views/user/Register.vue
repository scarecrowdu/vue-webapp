<template>
  <div class="login app-content">

     <app-header title="注册" :title-bg=true>
        <a href="javascript:history.back();" slot="left" ><i class="icon">&#xe60b;</i></a>
    </app-header>
      
  </div>
</template>

<script>

    import Header from '../common/Header.vue';
    
    export default {
        data() {
         return{
           title:'注册',
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