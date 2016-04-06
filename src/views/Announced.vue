<template>
  <div>

    <app-header>
       <p slot="title">最新揭晓</p>
    </app-header>

    <div class="app-container">
       <section class="announced-container">
          <ul class="floatBox">
              <li>
                <a href="#">
                   <img src="../assets/images/logo.png">
                   <div class="info">
                      <p class="title">小米电视</p>
                      <p class="issue">期号：123456789101</p>
                      <p class="state">
                        <span class="btn">即将揭晓</span>
                      </p>
                      <p class="msg">
                          <span class="time">15:15:0</span>
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
                        <span class="txt">幸运号码：1026262266</span>
                        <span class="txt">揭晓时间：今天12：00</span>
                      </p>
                   </div>
                  </a>
              </li>
          </ul>
       </section>
    </div>
  </div>
</template>

<script>

    import Header from './common/Header.vue';
    
    export default {
        data() {
         return{
           title:'最新揭晓',
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

    }
</script>


<style lang="sass" scoped>
  .app-view {
    bottom: 55px;
  }
 body{
  background: #f8f8f8;
 }

.floatBox{
    margin: 0 10px;

    >li:nth-child(odd){
      a{
        margin-right: 5px;
      }
    }

    >li:nth-child(even){
      a{
        margin-left: 5px;
      }
    }

    >li{
      width: 50%;
      -webkit-box-sizing: border-box;
      -ms-box-sizing: border-box;
      -o-box-sizing: border-box;
      box-sizing: border-box;
      float: left;
      

      a{
        display: block;
        color: #333;
        background: #fff;
        padding: 10px;
        margin-top: 10px;
      }

     img{
      width: 100%;
     }

     .info{
       background: #fff;

      .title{
        font-weight: 600;

      }
      .issue{
        font-size: 12px;
      }
      .state{
        height: 30px;

        .txt{
          display: block;
          font-size: 12px;
          line-height: 1.2;
        }

        .btn{
          position: relative;
          display: inline-block;
          border-style: solid;
          border-width: 1px;
          border-color: #000;
          width: 65px;
          font-size: 12px;
          text-align: center;
          border-radius: 3px;

        }

      }
      .msg{
        height: 30px;
        .time{
          display: block;
          font-weight: 600;
          font-size: 18px;
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