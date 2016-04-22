<template>

    <div class="indiana"> 

        <!-- 头部 -->
        <appheader title="最新揭晓"></appheader>

        <!-- 列表区 -->
        <section class="announced-container">
            <ul class="floatBox">
                <li v-for="item in lists" >
                  <a v-link="{name:'jDetail',query:{id:item.id}}">
                     <img v-lazy="item.cover" :style="{ width:item.imgwh +'px',height:item.imgwh +'px' }" >
                     <div class="info">
                        <p class="title">{{item.title}}</p>
                        <p class="issue">期号：{{item.periods}}</p>
                        
                        <!-- Caipiaotype: 开奖状态(0进行中;1倒计时;2已揭晓) -->

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

   </div>

</template>

<script>

    import appheader from './common/Header.vue';
    import loading from '../components/Loading.vue';
    
    export default {
        data() {
         return{
           lists:[]
         }
        },
        route:{

          data (transition) {
            var self = this;
            self.getAjaxData(transition);
          },
          deactivate (transition){
             var self = this;
             $(window).off('scroll');
             transition.next();
          }

        },
        ready(){
        },
        methods:{

            //请求数据
            getAjaxData:function(transition){
                var self = this;
                $.ajax({
                    type: "GET",
                    url:'../../src/data/list.json',
                    data:{},
                    dataType:"json",
                    success :function(json){
                        // self.$root.$set('loadshow',false);
                        let appW = document.querySelector("#app").style.width 
                        if(json.retcode==1){
                            let jsonData = json.data.rows;
                            for (var i = 0; i < jsonData.length; i++) {
                                jsonData[i].imgwh = appW/2-20;
                            }
                            if (self.page === 1) {
                               self.lists = jsonData
                            }else{
                                self.lists = self.lists.concat(jsonData);
                            }
                            // transition.next(function(){
                                // setTimeout(function(){
                                //    self.shoplist = self.shoplist.concat(json.data.rows);
                                // },300)
                               
                            // });
                        }
                    }
                });
            },

            //倒计时
            runtime(el,timer){

                let timestamp = timer;
                let isInter;
                function interval(){
                  if(timestamp<=0){
                    console.count();
                    $('#'+el).text("正在计算中，请稍等...");
                    return;
                  }

                  let hm = Math.floor(timestamp % 1000 /10);
                  let sec = Math.floor(timestamp / 1000 % 60);
                  let mini = Math.floor(timestamp / (60*1000));

                  hm = hm < 10 ? "0" + hm : hm;
                  sec = sec < 10 ? "0" + sec : sec;
                  mini = mini < 10 ? "0" + mini : mini;
                  let text = mini + ":" + sec + ":" + hm;

                  setTimeout(interval, 1);
                  $('#'+el).text(text);
                  timestamp--;
                }

                // isInter = setInterval(interval, 1000);
            }
        },
        components:{
           appheader,
           loading
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