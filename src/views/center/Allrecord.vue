<template>
  <div class="allRecord">

    <app-header title="夺宝记录" >
        <a href="javascript:history.back();" slot="left" ><i class="icon">&#xe60b;</i></a>
    </app-header>


  
    <div class="weui_panel weui_panel_access">
        <div class="weui_panel_bd allItem">
            <a v-link="{ path:'/center/winConfirm' }" class="weui_media_box weui_media_appmsg">
                <div class="weui_media_hd">
                    <img class="weui_media_appmsg_thumb" src="../../assets/images/logo.png"  alt="">
                </div>
                <div class="weui_media_bd">
                    <h4 class="weui_media_title nowrap-flex">标题一标题一标题一标题一标题一标题一</h4>
                    <div class="weui_media_desc info">
                       <p>期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<span>1235647556767</span></p>
                       <p><span class="weui_btn weui_btn_warn addBtn" >追加</span></p>
                    </div>
                    <div class="weui_media_desc">总&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;需：<span>1000次</span></div>
                    <div class="weui_media_desc info">
                        <p>本期参与：<span style="color:#ff6666;">20</span>人次</p>
                        <p class="num">查看我的号码</p>
                    </div>
                    <div class="weui_media_desc">揭晓时间：2016-4-10 18:30:08</div>
                </div>
            </a>
        </div>
    </div>

    <div class="weui_panel weui_panel_access">
        <div class="weui_panel_bd allItem">
            <a v-link="{ path:'/center/winConfirm' }" class="weui_media_box weui_media_appmsg">
                <div class="weui_media_hd">
                    <img class="weui_media_appmsg_thumb" src="../../assets/images/logo.png"  alt="">
                </div>
                <div class="weui_media_bd">
                    <h4 class="weui_media_title nowrap-flex">标题一标题一标题一标题一标题一标题一</h4>
                    <div class="weui_media_desc info">
                       <p>期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<span>1235647556767</span></p>
                       <p><span class="weui_btn weui_btn_warn addBtn" >追加</span></p>
                    </div>
                    <div class="weui_media_desc state">
                        <span class="progress"><i class="ongoing"></i></span>
                    </div>
                    <div class="weui_media_desc">总&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;需：<span>1000次</span></div>
                    <div class="weui_media_desc info">
                        <p>本期参与：<span style="color:#ff6666;">20</span>人次</p>
                        <p class="num">查看我的号码</p>
                    </div>
                    <!-- <div class="weui_media_desc">揭晓时间：2016-4-10 18:30:08</div> -->
                </div>
            </a>
        </div>
    </div>



    <div class="weui_panel weui_panel_access">
        <div class="weui_panel_bd allItem">
            <a v-link="{ path:'/center/winConfirm' }" class="weui_media_box weui_media_appmsg">
                <div class="weui_media_hd">
                    <img class="weui_media_appmsg_thumb" src="../../assets/images/logo.png"  alt="">
                </div>
                <div class="weui_media_bd">
                    <h4 class="weui_media_title nowrap-flex">标题一标题一标题一标题一标题一标题一</h4>
                    <div class="weui_media_desc info">
                       <p>期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<span>1235647556767</span></p>
                       <!-- <p><span class="weui_btn weui_btn_warn addBtn" >追加</span></p> -->
                    </div>
                    <div class="weui_media_desc">总&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;需：<span>1000次</span></div>
                    <div class="weui_media_desc info">
                        <p>本期参与：<span style="color:#ff6666;">20</span>人次</p>
                        <p class="num">查看我的号码</p>
                    </div>
                    <!-- <div class="weui_media_desc">揭晓时间：2016-4-10 18:30:08</div> -->
                    <div class="weui_media_desc msg">
                        <p>获得者：小林</p>
                        <p>参与人数：20</p>
                        <p>幸运号码：10234630556</p>
                        <p>揭晓时间：2016-4-10 18:30:08</p>
                    </div>
                </div>
            </a>
        </div>
    </div>


    

        
  </div>
</template>

<script>

    import Header from '../common/Header.vue';

    
    export default {
        data() {
         return{
            title:'全部参与记录',
            isIndex:false
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
.allItem{
    background: #fff;
    margin-top: 10px;

    .weui_media_title{
      white-space: normal; 
      font-size: 14px; 
    }

    >.weui_media_appmsg{
      align-items: flex-start;
    }

    .weui_media_desc{
        margin-top:8px;
    }

    .info{
        font-size: 0;
        >p:nth-child(1){ width: 60%; }
        >p{
            display: inline-block;
            width:40%;
            font-size: 13px;
            vertical-align: middle;
        }
        .num{
          color:#10AEFF;
        }

        .addBtn{
            font-size: 13px;
            display: block;
            width: 65px;
            height: 30px;
            line-height: 30px;
            float: right;
        }
    }

    .state{ 
       width: 60%;

      .progress {
        overflow: hidden;
        display: block;
        width: 80%;
        height: 6px;
        background: #ddd;
        border-radius: 3px;

        .ongoing {
            display: block;
            width: 50%;
            height: 6px;
            background: #ff6666;
        }
      }  
    }

    .msg{
      background: #eee;
      padding:10px;
      >p{
        margin-top: 4px;
      }
    }

}
</style>