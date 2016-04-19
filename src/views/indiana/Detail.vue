<template>
  <div class="detail">
     
     <!-- 头部 -->
     <app-header title="商品详情" :title-bg="true" header-bg="#fff">
        <a href="javascript:history.back();" slot="left" ><i class="icon">&#xe60b;</i></a>
        <a slot="right" >分享</a>
    </app-header>

    <!-- 商品广告 -->
    <div class="swiper-container appSwiper" id="detailSwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../../assets/images/logo.png"></div>
            <div class="swiper-slide">
                <img src="../../assets/images/logo.png"></div>
            <div class="swiper-slide">
                <img src="../../assets/images/logo.png"></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>

    <!-- 主体区域 -->
    <div class="detailItem">
        <div class="topInfo">
            <div class="title">
                <span class="status">进行中</span>
                <span class="gname">Uwatch 10 升级版 智能创意手表Uwatch 10 升级版 智能创意手表</span>
            </div>
            <div class="match v-flexbox">
                <div class="txt v-flexbox-item">
                    <p>期号：12345625</p>
                    <p class="timer">
                       <span>揭晓倒计时：05:52:13</span>
                    </p>
                </div>
                <div class="btn">
                    <a class="match-btn">计算详情</a>
                </div>
            </div>
            <div class="chklist">
                <!-- <div class="prompt">
                    <a href="javascript:void(0)"><span>登录</span>查看我的夺宝记录</a>
                </div> -->
                <div class="nitem">
                   <div class="ntxt">
                       <p>你参与了：</p><p>10人次</p>
                   </div>
                    <div class="ntxt">
                       <p>夺宝号码：</p><p><span>14234665</span><span>14234665</span><span>14234665</span></p>
                   </div>
                </div>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>

    import Header from '../common/Header.vue';
    import Swiper from 'swiper';

	export default {
        data() {
         return{
         }
        },
        route:{
          activate(transition){

            transition.next();
          }
        },
        ready(){
            new Swiper('.appSwiper', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
            });
        },
        components:{
           appHeader:Header
        }

    }
</script>


<style lang="sass">
    .appSwiper {
        width:100%;

        .swiper-slide {
            text-align: center;
            background: #ebebeb;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
        }
    }

    
    .detailItem{
       
        .topInfo{
            background:#fff;
            padding:15px;

            .title{
              .status{ padding:5px;border-radius:3px;border:.5px solid #eee; }
              .gname{}
            }
        }

        .match{
            overflow: hidden;
            background: #ff6666;
            padding:15px;
            border-radius:3px;
            color:#fff;
            margin-top: 5px;

            .txt{
              text-align: left;
            }
            .btn{

                .match-btn{
                    display: block;
                    overflow: hidden;
                    color:#fff;
                    padding:5px 10px;
                    font-size: 13px;
                    border-radius:3px;
                    border:.5px solid #fff;
                }
            }
        }

        .chklist{
            background: #ebebeb;
            margin-top:10px;

            .prompt{
                text-align: center;
                padding:10px;
                >a{display: block;}
                span{color:#ff6666;}
            }
        }
    }


</style>