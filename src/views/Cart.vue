<template>
  <div>

    <app-header>
       <p slot="title">清单</p>
    </app-header>

    <div class="app-container">
       
      <div class="cart-msg">
          <i class="cart-icon icon">&#xe602;</i>
          <p>空空如也~</p>
          <div class="btn-gruop">
              <a class="go-indiana">前往夺宝</a>
          </div>
      </div>

    </div>
  </div>
</template>

<script>

    import Header from './common/Header.vue';
    
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

.cart-msg{
   width: 100%;
   text-align: center;
   margin-top: 30px;

   .btn-gruop{
      margin-top: 10px;
      a{
        display: block;
        background:#ff6666;
        width: 120px;
        height: 45px;
        line-height: 45px;
        margin: 0 auto;
        border-radius:3px;
        color:#fff;

      }
   }

   >p{
    margin-top: -30px;
   }

   .cart-icon{
     font-size: 120px;
     color:#ddd;
   }
}
   
</style>