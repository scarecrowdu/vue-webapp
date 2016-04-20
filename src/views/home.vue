<template>
    <div class="homepage">
        
        <!-- 头部 -->
        <app-header title="积分购"></app-header>
        
        <!-- 轮播广告 -->
        <div class="swiper-container appSwiper">
            <div class="swiper-wrapper">

                <div class="swiper-slide" v-for="item in imglist" :style="{height:item.height +'px' }">
                    <img :src="item.src">
                </div>
            </div>
            <div class="swiper-pagination app-pagination"></div>
        </div>


        <!-- 商品内容区 -->
        <ul class="tab-menu v-flexbox">
            <li class="v-flexbox-item tab-item"  v-for="item in tablist"  @click="sordBy(item.key)" :class="[{active:$index === activeIndex}]" >
                <a href="javascript:void(0)"  v-if="$index >
                    2"  @click.prevent="activeIndex=$index"  :class="{ markUp: mark.up, markDown: mark.down }"> {{item.title}}
                </a>
                <a href="javascript:void(0)"  v-else  @click.prevent="activeIndex=$index">{{item.title}}</a>
            </li>
        </ul>
        <section class="main-container">
            <ul class="itemBox">
                <li class="item" v-for="item in shoplist">
                  <a v-link="{name:'detail'}">
                    <img v-lazy="item.cover" :style="{ width:item.imgwh +'px',height:item.imgwh +'px' }">
                    <div class="info">
                        <p class="title nowrap-multi">{{item.title}}</p>
                    </div>
                    <div class="msg">
                        <p class="state">
                            <span class="percentage">开奖进度{{progress($index)}}</span>
                            <span class="progress"> <i class="ongoing" :style="{width:progress($index)}"></i></span>
                        </p>
                        <p class="btn">
                            <span class="add">+清单</span>
                        </p>
                    </div>
                  </a>  
                </li>
            </ul>
        </section>

    </div>
</template>

<script>
    require('../assets/css/swiper.min.css');

    import Header from './common/Header.vue';
    import Swiper from 'swiper';

    export default {
        data() {
            return{
                mark:{up:false,down:false},
                isflag:false,
                activeIndex: 0,
                scroll:true,
                page:1,
                tablist:[
                   {title:"默认",key:'1'},
                   {title:"销量",key:'2'},
                   {title:"上新",key:'3'},
                   {title:"价格",key:'4'},
                ],
                shoplist:[],
                imglist:[
                   {src:"http://bs.baidu.com/dulife/562df13b07703.png",id:'1'},
                   {src:"http://bs.baidu.com/dulife/557654e01de3e.jpg",id:'2'},
                   {src:"http://bs.baidu.com/dulife/54d9c790f0903.jpg",id:'3'},
                ]
            }
        },
        components:{
            appHeader:Header
        },
        route:{
            data(transition){
                var _self = this;
                _self.getAjaxData(transition);
                //滚动加载
                $(window).on('scroll', (transition) => {
                    this.getScrollData(transition);
                });
            },
            deactivate(transition){
                // var _self = this;
                // _self.$root.$set('loadshow',true);
               $(window).off('scroll');
               transition.next();
            }
        },
        ready(){
            var _self = this;
            new Swiper('.appSwiper', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
            });


            for (var i = 0; i < _self.imglist.length; i++) {
                _self.imglist[i].height = window.innerWidth / 2
            }

            console.log(JSON.stringify(_self.imglist));

        },
        attached(){
            // //滚动加载
            // $(window).on('scroll', (transition) => {
            //     this.getScrollData(transition);
            // });

        },
        detached(){
            // $(window).off('scroll');
        },
        methods:{

            //请求数据
            getAjaxData(transition){
                let _self = this;
                $.ajax({
                    type: "GET",
                    url:'../../src/data/shoplist.json',
                    data:{},
                    dataType:"json",
                    success :function(json){
                        _self.scroll = true;
                        // _self.$root.$set('loadshow',false);
                        if(json.retcode==1){
                            let jsonData = json.data.rows;
                            for (var i = 0; i < jsonData.length; i++) {
                                jsonData[i].imgwh = window.innerWidth/2-20;
                            }
                            if (_self.page === 1) {
                               _self.shoplist = jsonData
                            }else{
                                _self.shoplist = _self.shoplist.concat(jsonData);
                            }
                            // transition.next(function(){
                                // setTimeout(function(){
                                //    _self.shoplist = _self.shoplist.concat(json.data.rows);
                                // },300)
                               
                            // });
                        }
                    }
                });
            },

             //滚动加载数据
            getScrollData (transition){
                let _self = this;
                if(_self.scroll){
    
                    let totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
                    if ($(document).height() <= totalheight + 200) {
                         _self.scroll = false;
                         _self.page++;

                         if(_self.page <= 5){
                              console.log(_self.page);
                           _self.getAjaxData(transition)
                         }
                    }
                }
            },

            // 计算开奖进度
            progress(index){
                let _self = this;
                let totalprogress = 0,
                    remainmember = _self.shoplist[index].remainmember,
                    totalmember = _self.shoplist[index].totalmember;

                totalprogress   = Math.round(remainmember/totalmember*100)+'%';
               
                return  totalprogress; 
            },

            sordBy(key){
                let _self = this;
                _self.shoplist = [];
                _self.page = 1;

                _self.getAjaxData();

                if (key == 4) {
                    _self.isflag = !_self.isflag;
                    
                    if (this.isflag) {
                        _self.mark.up = true;
                        _self.mark.down = false;
                        alert('up')
                    }else{
                        alert('down')
                        _self.mark.down = true;
                        _self.mark.up = false;
                    }

                }else{
                    _self.mark.up =  _self.mark.down = false; 
                }
                


            }

        }
    }
</script>

<style lang="sass">
    .homepage {

      }
    .appSwiper {
        width:100%;
        
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

            img{width: 100%;height: 200px;}
        }
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

    .tab-menu{
        position: relative;
        padding:10px 0;
        background: #fff;

        .active a{color:#ff6666;}

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

        .tab-item:last-child a{
            position: relative;
            display: block;

            &:before {
                content:"";
                display: block;
                position: absolute;
                top:4px;
                right:20%;
                width: 0;
                height: 0;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-bottom: 7px solid #555;
            }

            &:after{
                content:"";
                display: block;
                position: absolute;
                bottom:4px;
                right:20%;
                width: 0;
                height: 0;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-top: 7px solid #555;
            }
        }

        .markUp{
            &:before {border-bottom: 7px solid #ff6666 !important;}
        }
         .markDown{
            &:after {border-top: 7px solid #ff6666 !important;}
        }

    }

    
    .main-container{
        position: relative;
        width: 100%;
        margin-bottom: 55px;
        overflow: hidden;
    }
    .itemBox{
        overflow: hidden;
        min-height: 450px;
    
        .item:nth-child(even){ 
            &:after {
                position: absolute;
                top: 0;
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

            a{display: block;}
             

            img{ width: 100%;height: 100%; }

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
                        // width: 50%;
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