<template>

  <div class="page" transition="page" >
      
      <div class="user-header">

        <div class="u-top">
            <div class="u-icon">
               <i class="icon">&#xe60a;</i>
            </div>

            <div class="u-icon">
               <i class="icon">&#xe609;</i>
            </div>
        </div>

        <div class="u-middle">
                <div class="img"><img src="../assets/images/logo.png"></div>
                <div class="content">
                  <p><a>登陆</a><span></span><a> 注册</a></p>
                </div>
        </div>

        <div class="u-bottom">
            <div class="content">
                <p>余额:<strong>200</strong>积分</p>
            </div>
            <div class="btn">
              <a href="">充值</a>
            </div>
        </div>
      </div> 

      <div class="weui_cells">
        <a class="weui_cell" href="#">
          <div class="weui_cell_hd">
            <span class="icon c-icon danger">&#xe606;</span>
          </div>
          <div class="weui_cell_bd weui_cell_primary">
            <p>全部参与记录</p>
          </div>
          <div class="weui_cell_ft with_arrow"></div>
        </a>
        <a class="weui_cell" href="#">
          <div class="weui_cell_hd">
            <span class="icon c-icon warning">&#xe604;</span>
          </div>
          <div class="weui_cell_bd weui_cell_primary">
            <p>中奖记录</p>
          </div>
          <div class="weui_cell_ft with_arrow"></div>
        </a>
        <a class="weui_cell" href="#">
          <div class="weui_cell_hd">
            <span class="icon c-icon danger">&#xe605;</span>
          </div>
          <div class="weui_cell_bd weui_cell_primary">
            <p>红包</p>
          </div>
          <div class="weui_cell_ft with_arrow"></div>
        </a>
        <a class="weui_cell" href="#">
          <div class="weui_cell_hd">
            <span class="icon c-icon primary">&#xe608;</span>
          </div>
          <div class="weui_cell_bd weui_cell_primary">
            <p>充值记录</p>
          </div>
          <div class="weui_cell_ft with_arrow"></div>
        </a>
      </div>

  </div>
</template>

<script>
    // import Flexbox from '../components/flexbox'
    export default {
        data() {
         return{
           title:'个人中心',
           // effect: 'page',
         }
        },
        components: {
          // Flexbox
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


<style lang="sass">


.page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: #f8f8f8;
}
  /* 变量 */
  $color-primary: #27c4fe;
  $color-danger: #ff6666;
  $color-warning: #fead11;
  $color-success: #4cd964;
  .primary{ color: $color-primary; }
  .danger{ color: $color-danger; }
  .warning{ color: $color-warning; }
  .weui_cell{ color: #333; }
  .weui_cells{ font-size: 14px; }
  .weui_cell_ft.with_arrow:after {
    content: " ";
    display: inline-block;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #c8c8cd;
    border-style: solid;
    position: relative;
    top: -2px;
    top: -1px;
    margin-left: .3em;
  }
  .c-icon { font-size: 20px;padding-right: 8px;}
  .user-header+.weui_cells {
      margin-top: 0;
  }
  .user-header{
    position: relative;
    width: 100%;
    height: 200px;
    background: -webkit-gradient(linear, 0 0,60% 80%, from(#fff), to( #ff6666));
     
     .u-top{
      position: absolute;
      left: 0;
      top:0;
      width: 100%;
      height: 50px;
      line-height: 50px;
      -ms-box-sizing: border-box;
      -o-box-sizing: border-box;
      box-sizing: border-box;
      padding:5px 20px;
    }
    .u-middle{
      position: absolute;
      left: 0;
      top:45%;
      width: 100%;
      text-align: center;
      transform: translate(0,-50%);
    }
    .u-bottom{
      position: absolute;
      left: 0;
      bottom:0;
      width: 100%;
      height: 45px;
      line-height: 45px;
      background: rgba(0,0,0, .5);
      -ms-box-sizing: border-box;
      -o-box-sizing: border-box;
      box-sizing: border-box;
      padding:0 15px;
    }
  }
  .u-bottom{
     .content{
        float: left;
        width: 70%;
        color:#fff;
        strong{
          display: inline-block;
          margin: 0 5px;
          font-size: 18px;
          color:#ff6666;
        }
     }
     .btn{
        float: right;
        width: 30%;
        >a{
          float: right;
          display: block;
          width: 60px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: #ff6666;
          background: #fff;
          border-radius:3px;
          margin-top: 8px;
        }
     }
  }
  .u-top{
    .u-icon{
      float: left;
      width: 50%;
      .icon{
        font-size: 20px;
        color: #fff;
      }
    }
    .u-icon:nth-child(2){
      text-align:right;
    }
  }
  .u-middle{
     
     .img{
      img{
        width: 80px;
        height: 80px;
        overflow: hidden;
        border-radius: 100%;
        background: #fff;
      }
     }
     .content{
        margin: 10px 0;
       a{
        display: inline-block;
        color: #fff;
        font-weight: 600;
       }
       span{
        position: relative;
        margin: 0 10px;
         
         &:before{
            content:"";
            display: inline-block;
            position: absolute;
            top:-4px;
            width: 2px;
            height: 15px;
            margin-top: 5px;
            background: #fff;
         }
       }
     }
  }
  
</style>
