<template>
  <div class="orderpay app-container">
    	 <app-header title="支付订单" :title-bg="true" header-bg="#fff">
          <a href="javascript:history.back();" slot="left" ><i class="icon">&#xe60b;</i></a>
       </app-header>

       <div class="payItem">
          
            <div class="weui_media_box weui_media_small_appmsg ui-border-t">
                <div class="weui_cells">
                    <a class="weui_cell" href="javascript:;">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p>奖品合计</p>
                        </div>
                        <div class="weui_cell_ft">
                           <span>798积分</span>
                        </div>
                    </a>
                </div>
            </div>

            <div class="weui_media_box weui_media_small_appmsg weui_panel weui_panel_access">
                <div class="weui_cells">
                    <a class="weui_cell" href="javascript:;">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p>红包抵扣</p>
                        </div>
                        <div class="weui_cell_ft">
                            <p>暂未可用红包</p>
                        </div>
                    </a>
                </div>
                <div class="weui_cells">
                    <a class="weui_cell" href="javascript:;">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p>余额支付（余额：45232.00）</p>
                        </div>
                        <div class="weui_cell_ft">dasdasddasads</div>
                    </a>
                </div>
            </div>

            <div class="weui_media_box weui_media_small_appmsg weui_panel weui_panel_access">
                <div class="weui_cells">
                    <a class="weui_cell" href="javascript:;">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p>其他支付方式</p>
                        </div>
                        <div class="weui_cell_ft">dasdasddasads</div>
                    </a>
                </div>
            </div>


            <div class="ubtn-group">
               <p class="weui_btn weui_btn_warn" >确认支付</p>
           </div>

       </div>

  </div>
</template>

<script>

   import Header from '../common/Header.vue';

	export default {
        data() {
         return{
           
         }
        },
        route:{
          
        },
        components:{
          appHeader:Header
        }

    }
</script>


<style lang="sass">

	.payItem{

      .weui_cell{
         font-size: 14px;
      }

   }
</style>