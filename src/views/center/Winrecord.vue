<template>
  <div class="login">

    <app-header title="中奖记录" >
        <a href="javascript:history.back();" slot="left" ><i class="icon">&#xe60b;</i></a>
    </app-header>

    <div class="weui_panel weui_panel_access">
        <div class="weui_panel_bd winItem">
            <a v-link="{ path:'/center/winConfirm' }" class="weui_media_box weui_media_appmsg">
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
            </a>
            <p class="status ui-border-b">等待奖品派发</p>
        </div>
    </div>

     
        
  </div>
</template>

<script>
    import appHeader from '../common/Header.vue';

    
    export default {
        data() {
         return{
           title:'中奖记录',
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
.winItem{
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
        margin-top:5px;
    }

    .status{
        margin:0 10px;
        padding: 5px 0;
        text-align: right;
        font-size: 14px;
        position: relative;

        &:before {
            content: " ";
            position: absolute;
            left: 0;
            width: 100%;
            height: 1px;
            color: #d9d9d9;
            top: 0;
            border-top: 1px solid #d9d9d9;
            -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
            -webkit-transform: scaleY(.5);
            transform: scaleY(.5);
        }

    }


}
</style>
