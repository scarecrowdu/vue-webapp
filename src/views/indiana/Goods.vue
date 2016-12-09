<template>
  <div class="detail">

    <!-- 头部 -->
    <appheader title="商品详情" >
        <a href="javascript:history.back();" slot="left" ><i class="icon">&#xe60b;</i></a>
        <a slot="right" >分享</a>
    </appheader>

    <!-- 商品广告 -->
    <div class="swiper-container goodSwiper" id="detailSwiper" v-if="!loading">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in list.images" track-by="$index">
                <img :src="item" >
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>

    <!-- 主体区域 -->
    <div class="detailItem" v-if="!loading">
        <div class="topInfo">
            <!-- 标题 -->
            <div class="title">
                <span class="status st1" v-if="list.isshow == 0">进行中</span>
                <span class="status st2" v-if="list.isshow == 1">倒计时</span>
                <span class="status st3" v-if="list.isshow == 2">已揭晓</span>
                <span class="gname">{{list.title}}</span>
            </div>

            <!-- 进行中 -->
            <div class="dcontent" v-if="list.isshow == 0">
                 <p class="d-num">期号：{{list.periods}}</p>
                 <p class="progress"><i class="ongoing" :style="{width:progress($index)}"></i></p>
                 <p class="d-txt">
                     <span class="total">总需{{list.totalmember}}人次</span>
                     <span class="remain">剩余{{list.remainmember}}<span>
                 </p>
            </div>

            <!-- 倒计时 -->
            <div class="match v-flexbox" v-if="list.isshow == 1">
                <div class="txt v-flexbox-item">
                    <p>期号：{{list.periods}}</p>
                    <p class="timer">
                       <span>揭晓倒计时：05:52:13</span>
                    </p>
                </div>
                <div class="btn">
                    <a class="match-btn">计算详情</a>
                </div>
            </div>

            <!-- 已揭晓 -->
            <div class="results ui-border" v-if="list.isshow == 2">
               <div class="centent">
                 <div class="Rimg"><img :src="list.wuser.portrait"></div>
                 <div class="Rtxt">
                    <p>获奖者：{{list.wuser.nickname}}</p>
                    <p>用户ID：{{list.wuser.bingocode}}</p>
                    <p>期号：{{list.periods}}</p>
                    <p>本期参与：{{list.wuser.buycount}}人次</p>
                    <p>揭晓时间：{{list.publishtime | dateFormat 'yyyy-MM-dd hh:mm:ss' }}</p>
                 </div>
                </div>

               <div class="item v-flexbox">
                    <p class="lucknum v-flexbox-item">幸运号码：12346790</p>
                    <p class="btn">
                       <a class="match-btn">计算详情</a>
                    </p>
               </div>
            </div>

            <!-- 夺宝记录 -->
            <div class="chklist">
                <div class="prompt">
                    <a href="javascript:void(0)"><span>登录</span>查看我的夺宝记录</a>
                </div>
                <div class="nitem">
                   <div class="ntxt">
                       <p>你参与了：</p><p>{{list.buyInfo.buycount}}人次</p>
                   </div>
                    <div class="ntxt">
                       <p>夺宝号码：</p><p><span>{{list.buyInfo.buycodes}}</span></p>
                   </div>
                </div>
            </div>

        </div>

        <div class="linkInfo">
            <div class="weui_cells">
                <a class="weui_cell"  v-link="{name:'graphic',query:{id:list.id}}">
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
                            <img src="http://dummyimage.com/200x200/ff6666/333&text=user">
                        </div>
                        <div class="Cinfo">
                            <p>我的兄弟叫顺溜</p>
                            <p>未分配或者内网IP</p>
                        </div>
                        <div class="Ccount">参与1人次</div>
                    </div>
                    <div class="item">
                        <div class="Cimg">
                            <img src="http://dummyimage.com/200x200/ff6666/333&text=user">
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

        <div class="bottomInfo v-flexbox" style="display:none"  >
            <p class="v-flexbox-item">新一期正在火热进行中</p>
            <p>
                <a href="javascript:;" class="weui_btn weui_btn_warn">立即前往</a>
            </p>
        </div>

        <div class="bottomInfo2 v-flexbox" >
            <p class="v-flexbox-item"><a href="javascript:;" class="weui_btn weui_btn_warn" @click="showBottomAside = true">立即夺宝</a></p>
            <p class="v-flexbox-item"><a href="javascript:;" class="weui_btn weui_btn_plain_default">加入清单</a></p>
            <p class="iconBox"><i class="icon">&#xe602;</i></p>
        </div>
    </div>

    <!-- 加载层 -->
    <loading :show="loading"></loading>

  </div>
</template>

<script>

    import Mock        from 'mockjs';
    // 生成商品列数据
    Mock.mock('detail.json', {
      "retcode": 1,
      "retmsg": "查询成功",
      "data": {
          "id": 1,
          "sid": 1,
          "step": 1,
          "periods": 100000001,
          "title": "XooparXP61044章鱼吸盘式移动电源4000毫安",
          "totalmember": 119,
          "joinedmember": 119,
          "remainmember": 80,
          "downtime": "100",
          "publishtime": "1464579823632",
          "perprice": "1",
          "isshow": "0",
          "caipiaotype": "100",
          "wuser": "{ \"buycount\": 119,\"bingocode\": \"10000069\", \"nickname\": \"抽奖小王子\",\"mid\": 100000, \"areaip\": \"局域网,10.1.1.51\", \"portrait\":\"/upload/igame/images/portrait/2016-03-23/8c714e38-e5a9-4117-81e1-4e3a162727f2.jpg\" }",
          "buyInfo": {
              "oid": 2,
              "buycount": 2,
              "buycodes": "10000021, 10000024"
          },
          "images": [
              "http://dummyimage.com/640x400/339966/333&text=Banner1",
              "http://dummyimage.com/640x400/337ab7/333&text=Baner2",
              "http://dummyimage.com/640x400/ffcc33/333&text=Banner3"
          ],
          "content": "<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc259892e35.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc2598ac0d4.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc2598a3d73.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc2598b07d3.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc2598af7ab.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc2598ad690.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc2598c7a1a.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc25b18582d.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc259904e93.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc25993e6b3.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc25994a2b1.jpg\"><\/p>\n<p><img src=\"http:\/\/bs.baidu.com\/dulife\/56cc25995eb24.jpg\"><\/p>"
      }
    })

    import Appheader from '../common/Header.vue';
    import Loading from '../../components/Loading.vue'
    import Swiper from 'swiper';

    export default {
          data() {
           return{
              list            : [],
              loading         : true,
              showAside       : false,         //用于 aside
              bottom          : 'bottom',      //用于 aside
              showBottomAside : false,         //用于 asideaside 方向
              asideBottomTit  : 'right-title', //用于 aside
           }
          },
          ready(){
          },
          route:{
            data(){
               var self = this;
               self.getAjaxData();
            },
            activate(transition){
              transition.next();
            }
          },
          methods:{

            /**
             * 请求列表数据
             * @return {[type]} [description]
             */
            getAjaxData(){
                  let self = this;
                  self.$http.get('detail.json').then(function (response) {
                      let data = response.data;
                      if (data.retcode == 1) {
                          self.list = data.data;
                          self.list.wuser = JSON.parse(data.data.wuser)
                      }
                      self.loading = false;
                      self.$nextTick(() =>{
                        // DOM 现在更新了，调用轮播组件。
                        self.swipe();
                      })
                  }, function (response) {
                      // error callback
                  });
            },

            /**
             * 轮播组件
             * @return {[type]} [description]
             */
            swipe(){
              const swiperView = new Swiper('.goodSwiper', {
                  autoplay : 3000,
                  speed:600,
                  autoplayDisableOnInteraction : false,
                  loop : true,
                  pagination: '.swiper-pagination',
                  paginationClickable: true,
              });
            },

            /**
             * 计算开奖进度
             * @return {[type]} [description]
             */
            progress(){
                let self = this;
                let totalprogress = 0,
                    remainmember = self.list.remainmember,
                    totalmember = self.list.totalmember;

                totalprogress   = Math.round(remainmember/totalmember*100)+'%';
                return  totalprogress;
            }

          },
          components:{
             Appheader,
             Loading
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
       -webkit-animation-duration:1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    .goodSwiper {
        width:100%;
        .swiper-slide {
            img{
              width: 100%;
              height: 200px;
            }
        }
    }


    .detailItem{ }

    .topInfo{
        background:#fff;
        padding:15px;

        .title{
          .status{padding:3px 5px;border-radius:3px;font-size: 14px;}
          .st1{border:.5px solid #ff6666;color:#ff6666;}
          .st2{border:.5px solid #ff6666;color:#ff6666;}
          .st3{border:.5px solid #ff6666;color:#ff6666;}
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
            margin-bottom:70px;


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

    .bottomInfo2{
        position: fixed;
        bottom:0;
        left:0;
        z-index: 99;
        width: 100%;
        padding:10px 15px;
        background:#fff;


        a{font-size: 14px;padding:5px 0;}
        p:nth-child(2){margin:0 15px;}

        .iconBox{
            width: 40px;

            .icon{
                font-size:30px;
            }
        }

    }

    .bottomInfo{
        position: fixed;
        // bottom:0;
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
            >a{ font-size: 14px;border-radius:3px;padding:5px 20px;}
        }
    }

    .dcontent{
      overflow: hidden;
      font-size: 14px;
      margin:5px auto;

        .d-num{}
        .d-txt{
            >span{display: inline-block;float:left;width: 50%}
            .total{}
            .remain{text-align:right;}
        }

        .progress {
            display: block;
            overflow: hidden;
            width: 100%;
            height: 6px;
            border-radius: 3px;
            background: #ddd;
            margin: 5px auto;

            .ongoing {
                display: block;
                width: 50%;
                height: 6px;
                background: #ff6666;
            }
        }
    }



</style>
