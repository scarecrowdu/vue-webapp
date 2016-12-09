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

            <div class="results ui-border">
               <div class="centent">
                 <div class="Rimg"><img src="../../assets/images/logo.png"></div>
                 <div class="Rtxt">
                    <p>获奖者：我的兄弟叫顺溜</p>
                    <p>用户ID：110110</p>
                    <p>期号：105234203</p>
                    <p>本期参与：893人次</p>
                    <p>揭晓时间：2012-04-18 19:14:20</p>
                 </div>
                </div>

               <div class="item v-flexbox">
                    <p class="lucknum v-flexbox-item">幸运号码：12346790</p>
                    <p class="btn">
                       <a class="match-btn">计算详情</a>
                    </p>
               </div>
            </div>

            <div class="chklist">
                <div class="prompt">
                    <a href="javascript:void(0)"><span>登录</span>查看我的夺宝记录</a>
                </div>
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

        <div class="linkInfo">
            <div class="weui_cells">
                <a class="weui_cell" v-link="{ path: '' }">
                  <div class="weui_cell_bd weui_cell_primary">
                    <p>图文详情</p>
                  </div>
                  <div class="weui_cell_ft with_arrow">建议在WIFI下查看</div>
                </a>
                <a class="weui_cell" v-link="{ path: '' }">
                  <div class="weui_cell_bd weui_cell_primary">
                    <p>往期揭晓</p>
                  </div>
                  <div class="weui_cell_ft with_arrow"></div>
                </a>
            </div>

            <div class="weui_cells">
                <a class="weui_cell" v-link="{ path: '' }">
                  <div class="weui_cell_bd weui_cell_primary">
                    <p>所有参与记录</p>
                  </div>
                </a>
                <div class="recordmsg">
                    <div class="item">
                        <div class="Cimg">
                            <img src="http://bs.baidu.com/dulife/562df13b07703.png">
                        </div>
                        <div class="Cinfo">
                            <p>我的兄弟叫顺溜</p>
                            <p>未分配或者内网IP</p>
                        </div>
                        <div class="Ccount">参与1人次</div>
                    </div>
                    <div class="item">
                        <div class="Cimg">
                            <img src="http://bs.baidu.com/dulife/562df13b07703.png">
                        </div>
                        <div class="Cinfo">
                            <p>我的兄弟叫顺溜</p>
                            <p>未分配或者内网IP</p>
                        </div>
                        <div class="Ccount">参与1人次</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottomInfo v-flexbox">
            <p class="v-flexbox-item">新一期正在火热进行中</p>
            <p>
                <a href="javascript:;" class="weui_btn weui_btn_warn">立即前往</a>
            </p>
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

@-webkit-keyframes showUp {
  from {opacity: 0;bottom:-100px;}
  to { opacity: 1;bottom:0;}
}

@keyframes showUp {
  from {opacity: 0;bottom:-100px;}
  to { opacity: 1;bottom:0;}
}

.showUp {
  -webkit-animation-name: showUp;
  animation-name: showUp;
   -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
    .appSwiper {
        width:100%;

        .swiper-slide {
            display: flex;
            background: #ebebeb;
            text-align: center;
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


    .detailItem{ }
    .topInfo{
        background:#fff;
        padding:15px;

        .title{
          .status{ padding:5px;border:.5px solid #eee;border-radius:3px; }
          .gname{ }
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
                    padding:5px 10px;
                    border:.5px solid #fff;
                    border-radius:3px;
                    color:#fff;
                    font-size: 13px;
                }
            }
        }

        .results{
            margin-top: 10px;
            padding:5px;

            .centent{
                display: -webkit-box;
                display: -moz-box;
                display: -o-box;
                display: -ms-flexbox;
                display: flex;
                background:#ebebeb;
                padding:10px;

                .Rimg{
                   width: 45px;
                   height: 45px;
                   border-radius:100%;
                   overflow: hidden;
                   background:#fff;
                   img{width: 100%;}
                }
                .Rtxt{
                    margin-left: 10px;
                    font-size: 13px;
                }
            }

            .item{
                background: #ff6666;
                color:#fff;
                padding:10px;

               .lucknum{text-align:left;}
               .match-btn{
                    display: block;
                    overflow: hidden;
                    padding:5px 10px;
                    border:.5px solid #fff;
                    border-radius:3px;
                    color:#fff;
                    font-size: 13px;
                }
            }

        }

        .chklist{
            overflow: hidden;
            .prompt{
                background: #ebebeb;
                margin-top:10px;
                padding:10px;
                text-align: center;
                >a{display: block;}
                span{color:#ff6666;}
            }

            .nitem{
                background: #ebebeb;
                margin-top:10px;
                padding:10px;
                font-size: 13px;

                .ntxt{
                    display: -webkit-box;
                    display: -moz-box;
                    display: -o-box;
                    display: -ms-flexbox;
                    display: flex;

                    >p:last-child{
                        -moz-box-flex: 1;
                        -webkit-box-flex: 1;
                        -o-box-flex: 1;
                        -ms-flex: 1;
                        flex: 1;
                    }
                    span{display: inline-block;margin-right: 5px;}
                }
            }
        }
    }

    .linkInfo{
        >.weui_cells{margin-top:10px;font-size: 14px;}
        .recordmsg{
            background: #ebebeb;
            margin-bottom:55px;


            .item{
                position: relative;
                display: -webkit-box;
                display: -moz-box;
                display: -o-box;
                display: -ms-flexbox;
                display: flex;
                padding:10px 15px;
            }

            .Cimg{
               width: 40px;

               &:after{
                  position: absolute;
                  top: 0;
                  left: 35px;
                  z-index: 0;
                  width: 1px;
                  height: 100%;
                  border-right: 1px solid #888;
                  color: #888;
                 content: " ";
                  -webkit-transform: scaleX(.5);
                  transform: scaleX(.5);
                  -webkit-transform-origin: 0 0;
                  transform-origin: 0 0;

               }


               img{
                 position: absolute;
                 z-index: 11;
                 overflow:hidden;
                 margin:0 auto;
                 width: 40px;
                 height: 40px;
                 border-radius:100%;
               }
            }

            .Cinfo{
                margin-left: 10px;
                font-size: 13px;
                -moz-box-flex: 1;
                -webkit-box-flex: 1;
                -o-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
            }

            .Ccount{
                position: absolute;
                right: 15px;
                bottom:10px;
                font-size: 13px;
            }
        }
    }

    .bottomInfo{
        position: fixed;
        bottom:0;
        left:0;
        z-index: 99;
        width: 100%;
        padding:10px 15px;
        background:#fff;
        font-size: 14px;
        >p:nth-child(1){
            text-align:left;
        }
        >p:nth-child(2){
            >a{ font-size: 14px;border-radius:3px;}
        }
    }

</style>
