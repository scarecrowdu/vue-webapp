<template>
    <div class="homepage app-content">

            <app-header title="积分购"></app-header>

            <div class="swiper-container" id="appSwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../assets/images/logo.png"></div>
                    <div class="swiper-slide"><img src="../assets/images/logo.png"></div>
                    <div class="swiper-slide"><img src="../assets/images/logo.png"></div>
                </div>
                <div class="swiper-pagination app-pagination"></div>
            </div>

            <section class="main-container">
                <ul class="itemBox">
                    <li class="item">
                        <img src="../assets/images/logo.png">
                        <div class="info">
                            <p class="title nowrap-multi">小米电视小米电视小米电视小米电视</p>
                        </div>
                        <div class="msg">
                            <p class="state">
                                <span class="percentage">开奖进度80%</span>
                                <span class="progress"><i class="ongoing"></i></span>
                            </p>
                            <p class="btn">
                                <span class="add">+清单</span>
                            </p>
                        </div>
                    </li>
                    <li class="item">
                        <img src="../assets/images/logo.png">
                        <div class="info">
                            <p class="title nowrap-multi">小米电视小米电视小米电视小米电视</p>
                        </div>
                        <div class="msg">
                            <p class="state">
                                <span class="percentage">开奖进度80%</span>
                                <span class="progress"><i class="ongoing"></i></span>
                            </p>
                            <p class="btn">
                                <span class="add">+清单</span>
                            </p>
                        </div>
                    </li>
                     <li class="item">
                        <img src="../assets/images/logo.png">
                        <div class="info">
                            <p class="title nowrap-multi">小米电视小米电视小米电视小米电视</p>
                        </div>
                        <div class="msg">
                            <p class="state">
                                <span class="percentage">开奖进度80%</span>
                                <span class="progress"><i class="ongoing"></i></span>
                            </p>
                            <p class="btn">
                                <span class="add">+清单</span>
                            </p>
                        </div>
                    </li>
                     <li class="item">
                        <img src="../assets/images/logo.png">
                        <div class="info">
                            <p class="title nowrap-multi">小米电视小米电视小米电视小米电视</p>
                        </div>
                        <div class="msg">
                            <p class="state">
                                <span class="percentage">开奖进度80%</span>
                                <span class="progress"><i class="ongoing"></i></span>
                            </p>
                            <p class="btn">
                                <span class="add">+清单</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
    </div>
</template>

<script>
    require('../assets/css/swiper.min.css');

    import Header from './common/Header.vue';
    import Loading from '../components/Loading.vue';
    import Swiper from 'swiper';
    export default {
        data() {
            return{
                title:'Home',
            }
        },
        components:{
            appHeader:Header,
            appLoading :Loading
        },
        route:{
            activate:function(transition){
                transition.next();
            }
        },
        ready:function(){
            new Swiper('#app-swiper', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
            });
        }
    }
</script>

<style lang="sass">
    .homepage {
        bottom: 55px;
      }
    #appSwiper {
        width:100%;
    }
    #appSwiper .swiper-slide {
        text-align: center;
        background: #fff;
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

    .app-pagination{
        bottom:5px !important;
        padding-right: 10px;
        text-align:right;

        >span{
             width: 25px;
             height: 5px;
             background:#888;
             border-radius:0;
             margin: 0 2px !important;
         }
    }

    .itemBox{
    
        .item:nth-child(even){ 
            &:after {
                position: absolute;
                top: 0;
                left: 0;
                left: 0;
                width: 1px;
                height: 100%;
                border-right: 1px solid #d9d9d9;
                color: #d9d9d9;
                content: " ";
                -webkit-transform: scaleX(.5);
                transform: scaleX(.5);
                -webkit-transform-origin: 0 0;
                transform-origin: 0 0;
            }
         }

        .item{
            position: relative;
            width: 50%;
            float: left;
           -webkit-box-sizing: border-box;
           -ms-box-sizing: border-box;
           -o-box-sizing: border-box;
           box-sizing: border-box;
           background: #fff;
           padding:10px;

            &:before {
              position: absolute;
              top: 0;
              left: 0;
              left: 0;
              width: 100%;
              height: 1px;
              border-top: 1px solid #d9d9d9;
              color: #d9d9d9;
              content: " ";
              -webkit-transform: scaleY(.5);
              transform: scaleY(.5);
              -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
            }
             

            img{ width: 100%; }

            .info{
                background: #fff;
                height: 40px;
               .title{font-size: 14px;line-height: 1.4;}
            }

            .msg{
                width: 100%;
                text-align: center;
                display: -webkit-box;
                display: -moz-box;
                display: -o-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -webkit-align-items: center;
                padding:6px 0;


               .state{
                    -moz-box-flex: 1;
                    -webkit-box-flex: 1;
                    -o-box-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    text-align:left;

                    .percentage{ font-size: 12px; }
                    .progress{
                        display: block;
                        overflow: hidden;
                        width: 80%;
                        height: 6px;
                        border-radius:3px;
                        background: #ddd;
                    }    
                    .ongoing{
                        display: block;
                        width: 50%;
                        height: 6px;
                        background:#ff6666;
                    }
                }
            }

            .btn{
                .add{
                    display: block;
                    padding:2px 0;
                    width: 60px;
                    border-color: #ff6666;
                    border-style: solid;
                    border-width: 1px;
                    border-radius:3px;
                    color: #ff6666;
                }
             }
        }
    }
</style>