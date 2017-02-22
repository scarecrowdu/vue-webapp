<template>

    <div class="indiana">

        <!-- 头部 -->
        <appheader title="最新揭晓"></appheader>

        <!-- 列表区 -->
        <section class="announced-container" v-if="!loading">
            <ul class="floatBox">
                <li v-for="item in lists" >
                  <a v-link="{name:'goods',query:{id:item.id}}">
                     <img :src="item.cover" :style="{ width:item.imgwh +'px',height:item.imgwh +'px' }" >
                     <div class="info">
                        <p class="title nowrap">{{item.title}}</p>
                        <p class="issue">期号：{{item.periods}}</p>
                        <div class="msg" v-if="item.caipiaotype == 2">
                            <span class="txt" v-for="(key, val) in item.wuser | jsonFormat" >
                                <label v-if="key == 'nickname'">获得者：</label>
                                <label v-if="key == 'buycount'">参与人次：</label>
                                <label v-if="key == 'bingocode'">幸运号码：</label>
                                {{val}}
                            </span>
                            <span class="txt">揭晓时间：{{item.publishtime | timeago }}</span>
                        </div>

                        <div class="msg" v-if="item.caipiaotype == 1">
                            <span class="btn reds">即将揭晓</span>
                            <span class="time" id="{{item.id}}">{{runtime(item.id,item.downtime)}}</span>
                        </div>

                        <div class="msg" v-if="item.caipiaotype == 0">
                            <span class="btn greens">正在揭晓</span>
                            <span class="time" id="{{item.id}}" ->{{item.downtime }}</span>
                        </div>
                      </div>
                    </a>
                </li>

            </ul>
        </section>

        <!-- Loading -->
        <loading :show="loading"></loading>

   </div>

</template>

<script>
    import Mock        from 'mockjs';
    // 生成商品列数据
    Mock.mock('reslist.json', {
      retcode: 1,
      retmsg: '查询成功',
      data: {
        'total': 1,
        'records': 10,
        'page': 1,
        'rows|10': [{
            'id|+1': 1,
            'caipiaotype':'@natural(1, 3)',
            'periods|+1':'11000002',
            'downtime':'@natural(14592352, 64592352)',
            'publishtime|+10':'1460448164569',
            'title': '@csentence(6, 10)',
            'cover': '@image(200x200, #ff6666, Hello)',
            "wuser": "{\"nickname\":\"抽奖小王子\",\"buycount\":1199,\"bingocode\":\"10001167\"}"
        }]
      }
    })

    import appheader from './common/Header.vue';
    import Loading      from  '../components/Loading.vue';

    export default {
        data() {
         return{
           lists       :   [],
           page        :   1,        //当前页数
           scroll      :   true,     //用于判断是否滚动
           loading     :   true
         }
        },
        route:{

          data (transition) {
            var self = this;

            self.getAjaxData(transition);
            //滚动加载
            $(window).on('scroll', (transition) => {
                self.getScrollData(transition);
            });
          },
          deactivate (transition){
             var self = this;
             self.lists = [];
             self.page = 1;
             $(window).off('scroll');
             transition.next();
          }

        },
        ready(){
        },
        methods:{

            //请求数据
            getAjaxData:function(transition){
                let self = this;
                self.$http.get('reslist.json').then(function (response) {
                    self.loading = false;
                    let data = response.data;
                    self.loadshow = true;
                    if(data.retcode == 1){
                          let jsonData = data.data.rows;
                          if (self.page === 1) {
                             self.lists = jsonData
                          }else{
                              self.lists = self.lists.concat(jsonData);
                          }
                      }

                }, function (response) {
                    // error callback
                });




            },

             //滚动加载数据
            getScrollData (transition){
                let self = this;
                if(self.scroll){

                    let totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
                    if ($(document).height() <= totalheight + 200) {
                         self.scroll = false;
                         self.page++;


                         if(self.page <= 3){
                              // console.log(self.page);
                           self.getAjaxData(transition)
                         }
                    }
                }
            },

            //倒计时
            runtime(el,timer){

            //     let timestamp = timer;
            //     let isInter;

            //     function interval(){
            //       if(timestamp<=0){
            //         console.count();
            //         clearInterval(isInter);
            //         $('#'+el).text("正在计算中，请稍等...");
            //         return;
            //       }

            //       let hm = Math.floor(timestamp % 1000 /10);
            //       let sec = Math.floor(timestamp / 1000 % 60);
            //       let mini = Math.floor(timestamp / (60*1000));

            //       hm = hm < 10 ? "0" + hm : hm;
            //       sec = sec < 10 ? "0" + sec : sec;
            //       mini = mini < 10 ? "0" + mini : mini;
            //       let text = mini + ":" + sec + ":" + hm;

            //       setTimeout(interval, 1);
            //       $('#'+el).text(text);
            //       timestamp--;
            //     }

            //     isInter = setInterval(interval, 1000);
            }
        },
        components:{
           appheader,
           Loading
        }
    }
</script>


<style lang="sass" >

.indiana{
    bottom:55px;
}

.floatBox{
    >li:nth-child(even){
      &:after {
          content: " ";
          position: absolute;
          left: 0;
          top: 0;
          width: 1px;
          height: 100%;
          border-right: 1px solid #d9d9d9;
          color: #d9d9d9;
          -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
          -webkit-transform: scaleX(.5);
          transform: scaleX(.5);
          left: 0;
      }
    }
    >li{
      position: relative;
      width: 50%;
      -webkit-box-sizing: border-box;
      -ms-box-sizing: border-box;
      -o-box-sizing: border-box;
      box-sizing: border-box;
      float: left;


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

      a{
        display: block;
        color: #333;
        background: #fff;
        padding: 10px;
      }
     img{
      width: 100%;min-height:125px;
     }
     .info{
       background: #fff;
       min-height: 93px;

      .title{
        font-size: 14px;line-height: 1.4;
      }
      .issue{
        font-size: 12px;
      }

      .msg{
        height:60px;
        .time{
          display: block;
          font-weight: 600;
          font-size: 18px;
          margin-top: 5px;
        }

        .btn{
          position: relative;
          display: inline-block;
          border-style: solid;
          border-width: 1px;
          width: 65px;
          padding:2px 0;
          font-size: 12px;
          text-align: center;
          border-radius: 3px;
        }

        .btn.reds{
           color:#ff6666;
           border-color:#ff6666;
        }
        .btn.greens{
           color:#39b939;
           border-color:#39b939;
        }

        .match{
          display: block;
          font-weight: 600;
          line-height: 25px;
        }
        .txt{
          display:block;
          font-size: 12px;
          line-height: 1.2;
        }
      }
     }
    }
}

</style>
