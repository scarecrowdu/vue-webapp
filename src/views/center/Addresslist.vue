<template>
  <div class="adsList app-content">

    <app-header title="地址管理" :title-bg="true" header-bg="#fff">
        <a href="javascript:history.back();" slot="left" ><i class="icon">&#xe60b;</i></a>
        <a v-link="{ path: '/me/addressEdit' }" slot="right" >添加</a>
    </app-header>


    <div class="ads-list">
        <div class="adsItem">
           <div class="adsheader">
             <p class="name">习大大</p>
             <p class="mobile">15521387308</p>
           </div>
           <div class="adsinfo">
             <p class="msg"><label>[默认]</label>北京天安门广场总部大厦1106号</p>
           </div>
        </div>

        <div class="adsItem">
           <div class="adsheader">
             <p class="name">习大大</p>
             <p class="mobile">15521387308</p>
           </div>
           <div class="adsinfo">
             <p class="msg">北京天安门广场总部大厦1106号</p>
           </div>
        </div>
    </div>


        
  </div>
</template>

<script>

    import Header from '../common/Header.vue';

    
    export default {
        data() {
         return{
           title:'地址管理',
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
.ads-list{
  overflow: hidden;
  font-size: 14px;
  
  .adsItem{
    background:#fff;
    padding:10px 15px;
    margin-top: 10px;

    .adsheader{
      clear: both;
      overflow: hidden;

      p{ width: 50%;float: left;text-align: left;}
    }

    .adsinfo{
      clear: both;
      overflow: hidden;
      margin-top:10px;
      text-align: left;
      label{
        display: inline-block;
        color: red;
        margin-right:5px;
      }
    }
  } 

}
</style>