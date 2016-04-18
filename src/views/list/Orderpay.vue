<template>
  <div class="orderpay app-container">
    	 <app-header title="支付订单" :title-bg="true" header-bg="#fff">
          <a href="javascript:history.back();" slot="left" ><i class="icon">&#xe60b;</i></a>
       </app-header>

       <div class="payItem">

              <panel :show="true" type="fold">

                  <div slot='header' class="weui_media_box weui_media_small_appmsg ui-border-t">
                      <div class="weui_cells">
                          <a class="weui_cell" href="javascript:;">
                              <div class="weui_cell_bd weui_cell_primary">
                                  <p>奖品合计</p>
                              </div> 
                              <div class="weui_cell_ft" v-bind:class="show ? 'arrowDown' : 'arrowUp'">

                                 <span >798积分</span>
                              </div>
                          </a>
                      </div>
                  </div>
                  <div slot='content'>
                      <div class="combined">
                          <p>注：请确认如下订单明细</p>
                          <div class="info">
                             <div class="v-flexbox">
                                 <p class="v-flexbox-item nowrap">注：请确认如下订单明细注：请确认如下订单明细</p>
                                 <p>3092积分</p>
                             </div>
                             <div class="v-flexbox">
                                 <p class="v-flexbox-item nowrap">注：请确认如下订单明细注：请确认如下订单明细</p>
                                 <p>3092积分</p>
                             </div>
                             <div class="v-flexbox">
                                 <p class="v-flexbox-item nowrap">注：请确认如下订单明细注：请确认如下订单明细</p>
                                 <p>3092积分</p>
                             </div>
                          </div>
                      </div>
                  </div>
              </panel>
              <panel :show="false"  type="fold">
                    <div slot='header' class="weui_media_box weui_media_small_appmsg weui_panel weui_panel_access">
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
                    </div>    
                    <div slot='content'>
                    
                    </div>
              </panel>
              <panel :show="false" type="fold">
                    <div slot='header' class="weui_cells">
                        <a class="weui_cell" href="javascript:;">
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>余额支付（余额：45232.00）</p>
                            </div>
                            <div class="weui_cell_ft" :class="show ? 'arrowDown' : 'arrowUp'">dadasads</div>
                        </a>
                    </div>
                    <div slot='content'>
                      <p>The most distant way in the world</p>
                      <p>is not the way from birth to the end</p>
                  </div>
               </panel>

              <panel :show="false" type="fold">
                  <div slot='header' class="weui_media_box weui_media_small_appmsg weui_panel weui_panel_access">
                        <div class="weui_cells">
                            <a class="weui_cell" href="javascript:;">
                                <div class="weui_cell_bd weui_cell_primary">
                                    <p>其他支付方式</p>
                                </div>
                                <div class="weui_cell_ft">dasdasddasads</div>
                            </a>
                        </div>
                  </div>
                  <div slot='content'>
                      <p>The most distant way in the world</p>
                      <p>is not the way from birth to the end</p>
                  </div>
              </panel>

          </div>

            <div class="ubtn-group">
               <p class="weui_btn weui_btn_warn" >确认支付</p>
           </div>

       </div>

  </div>
</template>

<script>

  import Header from '../common/Header.vue';
  import panel from '../../components/panel.vue'

	export default {
        data() {
         return{
            show:false
           
         }
        },
        route:{
          
        },
        components:{
          appHeader:Header,
          panel
        }

    }
</script>


<style lang="sass">

	.payItem{

      .weui_cell{
         font-size: 14px;
      }
      .arrowDown{
        &:after {
            content: " ";
            display: inline-block;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            height: 6px;
            width: 6px;
            border-width: 0 2px 2px 0;
            border-color: #c8c8cd;
            border-style: solid;
            position: relative;
            top: -2px;
            top: -1px;
            margin-left: .3em;
        }
      }
      .arrowUp{
        &:after {
            content: " ";
            display: inline-block;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
            height: 6px;
            width: 6px;
            border-width: 2px 2px 0 0;
            border-color: #c8c8cd;
            border-style: solid;
            position: relative;
            top: -2px;
            top: -1px;
            margin-left: .3em;
        }
      }

      .combined{
        margin:15px;
        padding:10px;
        background:#fff;

        >p{font-size: 14px;border-bottom:1px  #eee dotted;padding-bottom: 5px;color:#f69f16;}
        .info{
           font-size: 12px;
           p{line-height:22px;}
           p:last-child{margin-left:10px;}
        }
      }

   }
</style>