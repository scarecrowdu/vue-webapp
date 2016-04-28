<template>
  <div class="rechargeRecord ">

    <app-header title="充值" >
        <a href="javascript:history.back();" slot="left" ><i class="icon">&#xe60b;</i></a>
    </app-header>

    
     
        
  </div>
</template>

<script>
    import appHeader from '../common/Header.vue';

    
    export default {
        data() {
         return{
           title:'充值',
         }
        },
        components:{
           appHeader,
        },
        route:{
          activate:function(transition){
            document.title = this.title;
            this.$root.$set('header',this.title);
            transition.next();

          }
        },
        methods:{

        }
    }
</script>
<style lang="sass">


</style>