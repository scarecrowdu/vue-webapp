<template>
  <div class="login app-content">

    <app-header title="中奖确认" :title-bg="true" header-bg="#fff">
        <a href="javascript:history.back();" slot="left" ><i class="icon">&#xe60b;</i></a>
    </app-header>


   <div class="statusItem">
        <div class="content v-flexbox">
            <div class="iconInfo "></div>
            <div class="msgInfo v-flexbox-item">
                <p>获得奖品</p>
            </div>
        </div>
    </div>


    <div class="weui_panel weui_panel_access adsItem">
        <div class="weui_panel_hd">地址信息</div>
        <div class="weui_panel_bd">
            <div class="weui_media_box weui_media_text">
                <h4 class="weui_media_title adsheader">
                    <p class="name">习大大</p><p class="mobile">15521387308</p>
                </h4>
                <p class="weui_media_desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
            </div>
        </div>
    </div>

    <div class="weui_panel weui_panel_access">
        <div class="weui_panel_hd">奖品信息</div>
        <div class="weui_panel_bd winItem">
            <div class="weui_media_box weui_media_appmsg">
                <div class="weui_media_hd">
                    <img class="weui_media_appmsg_thumb" src="../../assets/images/logo.png"  alt="">
                </div>
                <div class="weui_media_bd">
                    <h4 class="weui_media_title nowrap-flex">标题一标题一标题一标题一标题一标题一</h4>
                    <p class="weui_media_desc">期&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<span>1235647556767</span></p>
                    <p class="weui_media_desc">总&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;需：<span>1000次</span></p>
                    <p class="weui_media_desc">幸运号码：<span style="color:#ff6666;">242424141</span></p>
                    <p class="weui_media_desc">本期参与：<span style="color:#ff6666;">20</span>人次</p>
                    <p class="weui_media_desc">揭晓时间：2016-4-10 18:30:08</p>
                </div>
            </div>
        </div>
    </div>

     
        
  </div>
</template>

<script>
    import appHeader from '../common/Header.vue';

    
    export default {
        data() {
         return{
           title:'中奖确认',
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

.statusItem{
    background:#fff;
    margin-top: 10px;
    padding: 10px 15px;
    font-size: 14px;

    .content{
       
       .iconInfo{
        width: 60px;
        text-align: center;

       }
       .msgInfo{
        p{text-align: left;}
        

       }

    }  
}

.adsItem{
   .adsheader{
        p{
         width: 50%;float: left;
         font-size: 14px;
        }
    }
}

</style>
