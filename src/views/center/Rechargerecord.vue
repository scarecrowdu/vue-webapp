<template>
  <div class="rechargeRecord">

    <app-header title="充值记录" >
        <a href="javascript:history.back();" slot="left" ><i class="icon">&#xe60b;</i></a>
        <a style="color:#ff6666" slot="right" v-link="{ path: '/me/recharge' }">充值</a>
    </app-header>

    <div class="recordItem-c">
        <div class="list">
           <p class="title">微信支付</p>
           <p class="info"><span class="time">2016-5-5 16:12:12</span><span class="money">20元</span></p>
           <p class="status">未支付</p>
        </div>
        <div class="list">
           <p class="title">微信支付</p>
           <p class="info"><span class="time">2016-5-5 16:12:12</span><span class="money">20元</span></p>
           <p class="status">未支付</p>
        </div>
    </div>
     
        
  </div>
</template>

<script>
    import appHeader from '../common/Header.vue';

    
    export default {
        data() {
         return{
           title:'充值记录',
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
    .recordItem-c{
        .list{
          margin-top:10px;
          padding:10px 15px;
          background: #fff;

            .title{

            }
            .info{
                margin:5px 0;
                font-size: 14px;

                span{
                    display: inline-block;
                    width: 50%;
                }
                .money{text-align:right;color:#ff6666;}
            }
            .status{
                font-size: 14px;
            }
        }
    }
</style>
