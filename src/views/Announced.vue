<template>
  <div class="indiana">

        <app-header title="最新揭晓"></app-header>

        <section class="announced-container">
            <ul class="floatBox">
                <li v-for="item in lists" >
                  <a href="#">
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
                            <span class="time">{{item.downtime}}</span>
                        </div>

                        <div class="msg" v-if="item.caipiaotype == 0">
                            <span class="btn greens">正在揭晓</span>
                            <span class="time" id="{{item.id}}" ->{{item.downtime }}</span>
                        </div>
                      </div>
                    </a>
                </li>
                <!--  <li>
                  <a href="#">
                     <img src="../assets/images/logo.png">
                     <div class="info">
                        <p class="title">小米电视</p>
                        <p class="issue">期号：123456789101</p>
                        <p class="state">
                          <span class="txt">获得者：小林</span>
                          <span class="txt">参与人数：20</span>
                        </p>
                        <p class="msg">
                          <span class="txt">幸运号码：1026262266</span>
                          <span class="txt">揭晓时间：今天12：00</span>
                        </p>
                     </div>
                    </a>
                </li>
                <li>
                  <a href="#">
                     <img src="../assets/images/logo.png">
                     <div class="info">
                        <p class="title">小米电视</p>
                        <p class="issue">期号：123456789101</p>
                        <p class="state">
                          <span class="txt">获得者：小林</span>
                          <span class="txt">参与人数：20</span>
                        </p>
                        <p class="msg">
                          <span class="match">计算中，请稍等...</span>
                        </p>
                     </div>
                    </a>
                </li>
                 <li>
                  <a href="#">
                     <img src="../assets/images/logo.png">
                     <div class="info">
                        <p class="title">小米电视</p>
                        <p class="issue">期号：123456789101</p>
                        <p class="state">即将揭晓</p>
                        <p class="msg">15:15:0</p>
                     </div>
                    </a>
                </li>
                 <li>
                  <a href="#">
                     <img src="../assets/images/logo.png">
                     <div class="info">
                        <p class="title">小米电视</p>
                        <p class="issue">期号：123456789101</p>
                       <p class="state">
                          <span class="txt">获得者：小林</span>
                          <span class="txt">参与人数：20</span>
                        </p>
                        <p class="msg">
                          <span class="txt">获得者：小林</span>
                          <span class="txt">参与人数：20</span>
                          <span class="txt">幸运号码：1026262266</span>
                          <span class="txt">揭晓时间：今天12：00</span>
                        </p>
                     </div>
                    </a>
                </li> -->
            </ul>
        </section>

       <!-- <app-loading  :show="loading.show" :title="loading.showTxt" ></app-loading> -->

   </div>
</template>

<script>
    import Header from './common/Header.vue';
    import Loading from '../components/Loading.vue';
    
    export default {
        data() {
         return{
           title:'最新揭晓',
           lists:[],
           loading:{
                show:true,
                showTxt:'二维码识别中'
            }

         }
        },
        components:{
           appHeader:Header,
           appLoading:Loading
        },
        route:{
          data (transition) {
            var _self = this;
            _self.getAjaxData(transition);
          },
          deactivate (transition){
             var _self = this;
              // _self.$root.$set('loadshow',true);
             $(window).off('scroll');
             transition.next();
          }
        },
        ready(){
        },
        methods:{
            /*请求数据*/
            getAjaxData:function(transition){
                var _self = this;
                $.ajax({
                    type: "GET",
                    url:'../../src/data/list.json',
                    data:{},
                    dataType:"json",
                    success :function(json){
                        // _self.$root.$set('loadshow',false);
                        if(json.retcode==1){
                            let jsonData = json.data.rows;
                            for (var i = 0; i < jsonData.length; i++) {
                                jsonData[i].imgwh = window.innerWidth/2-20;
                            }
                            if (_self.page === 1) {
                               _self.lists = jsonData
                            }else{
                                _self.lists = _self.lists.concat(jsonData);
                            }
                            // transition.next(function(){
                                // setTimeout(function(){
                                //    _self.shoplist = _self.shoplist.concat(json.data.rows);
                                // },300)
                               
                            // });
                        }
                    }
                });
            }
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
        }

        .btn{
          position: relative;
          display: inline-block;
          border-style: solid;
          border-width: 1px;
          // border-color: #000;
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