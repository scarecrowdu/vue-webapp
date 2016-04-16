<template>
  <div class="payresults app-container">
    	 <app-header title="支付结果" :title-bg="true" header-bg="#fff">
          <a href="javascript:history.back();" slot="left" ><i class="icon">&#xe60b;</i></a>
       </app-header>

       <div class="resultsItem">
            <div class="contentMsg">
                <h3>恭喜您，支付成功！</h3>
                <h3>请等待系统为您揭晓！</h3>
                <div class="btnBox">
                  <a href="javascript:" class="weui_btn weui_btn_warn"> 继续夺宝 </a>
                  <a href="javascript:" class="weui_btn weui_btn_default"> 查看夺宝记录 </a>
                </div>
            </div>
            <div class="contentList">
                <h3>您成功参与了<span>1</span>件商品共<span>5</span>人次夺宝，信息如下：</h3>
                <div class="detail">
                    <div class="item">
                        <p class="gname nowrap">快轮EVA自平衡独轮车快轮EVA自平衡独轮车快轮EVA自平衡独轮车</p>
                        <p class="gnum">商品期号：12345678</p>
                        <div class="ginfo">
                           <p class="txt">夺宝号码：</p>
                           <p class="num">
                               <span>11323213</span><span>11323213</span>
                               <span>11323213</span><span>11323213</span>
                           </p>
                        </div>
                    </div>

                    <div class="item">
                        <p class="gname nowrap">快轮EVA自平衡独轮车快轮EVA自平衡独轮车快轮EVA自平衡独轮车</p>
                        <p class="gnum">商品期号：12345678</p>
                        <div class="ginfo">
                           <p class="txt">夺宝号码：</p>
                           <p class="num">
                               <span>11323213</span><span>11323213</span>
                               <span>11323213</span><span>11323213</span>
                           </p>
                        </div>
                    </div>
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

	.resultsItem{
      
       .contentMsg{
           position: relative;
           padding:15px 10px;
           background: #fff;
           text-align: center;

           &:before {
                content: " ";
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 1px;
                border-top: 1px solid #d9d9d9;
                color: #d9d9d9;
                -webkit-transform-origin: 0 0;
                transform-origin: 0 0;
                -webkit-transform: scaleY(.5);
                transform: scaleY(.5);
                left: 0;
           }

           h3:nth-child(1){margin-top: 20px;}

           .btnBox{
              a:nth-child(1){margin-right:10px;}
              a{display: inline-block;width: 140px;}
           }
       }

       .contentList{
         padding:15px;
         h3{font-size: 14px;}

         .detail{
            margin-top: 10px;
            padding:10px;
            min-height: 100px;
            background: #fff;

            .item{
                font-size: 14px;
                margin-bottom: 10px;
                .gname{font-size: 14px;color:#ff6666;}
                .gnum{margin:5px 0;}
            }
            .ginfo{
                text-align: center;
                display: -webkit-box;
                display: -moz-box;
                display: -o-box;
                display: -ms-flexbox;
                display: flex;

                .num{
                    -moz-box-flex: 1;
                    -webkit-box-flex: 1;
                    -o-box-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    text-align: left;

                    >span{display: inline-block; margin-right: 5px;}
                }

            }
         }


       }
    }
</style>