<template>
    <div class="homepage app-content">
        <div class="mainArea">

            <app-header title="积分购"></app-header>

            <div class="swiper-container" id="app-swiper">
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
                        <div>
                            <img src="../assets/images/logo.png">
                            <div class="info">
                                <p class="title nowrap">小米电视</p>
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
                        </div>
                    </li>
                    <li class="item">
                        <div>
                            <img src="../assets/images/logo.png">
                            <div class="info">
                                <p class="title nowrap">小米电视</p>
                            </div>
                            <div class="msg">
                                <p class="state">
                                    <span class="percentage">开奖进度80%</span>
                                    <span class="progress"></span>
                                </p>
                                <p class="btn">
                                    <span class="add">+清单</span>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="item">
                        <div>
                            <img src="../assets/images/logo.png">
                            <div class="info">
                                <p class="title nowrap">小米电视</p>
                            </div>
                            <div class="msg">
                                <p class="state">
                                    <span class="percentage">开奖进度80%</span>
                                    <span class="progress"></span>
                                </p>
                                <p class="btn">
                                    <span class="add">+清单</span>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="item">
                        <div>
                            <img src="../assets/images/logo.png">
                            <div class="info">
                                <p class="title nowrap">小米电视</p>
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
                        </div>
                    </li>
                    <li class="item">
                        <div>
                            <img src="../assets/images/logo.png">
                            <div class="info">
                                <p class="title nowrap">小米电视</p>
                            </div>
                            <div class="msg">
                                <p class="state">
                                    <span class="percentage">开奖进度80%</span>
                                    <span class="progress"></span>
                                </p>
                                <p class="btn">
                                    <span class="add">+清单</span>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>

        </div>
    </div>
</template>

<script>
    require('../assets/css/swiper.min.css');

    import Header from './common/Header.vue';
    import Swiper from 'swiper';
    export default {
        data() {
            return{
                title:'Home',
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
    .swiper-container {
        width:100%;
    }
    .swiper-slide {
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
         margin: 0 10px;

        .item:nth-child(odd) > div{ margin-right: 5px; }
        .item:nth-child(even) >div{ margin-left: 5px;  }
        .item{
           width: 50%;
           float: left;
           -webkit-box-sizing: border-box;
           -ms-box-sizing: border-box;
           -o-box-sizing: border-box;
           box-sizing: border-box;
             
            >div{
                 display: block;
                 color: #333;
                 background: #fff;
                 padding: 5px;
                 margin-top: 10px;
             }
        img{ width: 100%; }
        .info{
            background: #fff;
        .title{font-weight: 600;}
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
            padding:8px 0;
        .state{
            -moz-box-flex: 1;
            -webkit-box-flex: 1;
            -o-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            text-align:left;
        .percentage{ font-size: 12px; }
        .progress{
            overflow: hidden;
            display: block;
            width: 80%;
            height: 6px;
            background: #ddd;
            border-radius:3px;
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
            width: 60px;
            padding:2px 0;
            border-style: solid;
            border-width: 1px;
            border-color: #ff6666;
            border-radius:3px;
            color: #ff6666;
        }
     }
    }
    }
    }
</style>