<template>
  <div class="login">

    <app-header title="我的红包" >
        <a href="javascript:history.back();" slot="left" ><i class="icon">&#xe60b;</i></a>
    </app-header>


     <div :line-width=2 active-color='#ff6666'>
       <div :selected="demo1 === '可使用'" @click="demo1 = '可使用'">可使用</div>
       <div :selected="demo1 === '已使用/过期'" @click="demo1 = '已使用/过期'">已使用/过期</div>
    </div>

    <section class="redNull dataNull" style="display:none">
        <div class="msg">
          <i class="icon-font icon">&#xe602;</i>
          <p>您还没红包</p>
          <div class="btn-gruop">
              <a class="go-indiana">立即积分夺宝</a>
          </div>
        </div>

        <div class="likeContainer">
            <p class="titleB">猜你喜欢</p>
            <div class="swiper-container" id="likeSwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="like-item">
                        <img src="http://pic.pedaily.cn/201503/20150324100853205320.jpg">
                        <p class="title nowrap">小米电视小米电视小米电视小米电视</p>
                        <p class="progress"><i class="ongoing"></i></p>
                     </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="like-item">
                        <img src="http://img1.gtimg.com/ninja/0/ninja141074803812010.jpg">
                        <p class="title nowrap">小米电视小米电视小米电视小米电视</p>
                        <p class="progress"><i class="ongoing"></i></p>
                     </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="like-item">
                        <img src="http://img1.qq.com/tech/pics/6241/6241197.jpg">
                        <p class="title nowrap">小米电视小米电视小米电视小米电视</p>
                        <p class="progress"><i class="ongoing"></i></p>
                     </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="like-item">
                        <img src="../../assets/images/logo.png">
                        <p class="title nowrap">小米电视小米电视小米电视小米电视</p>
                        <p class="progress"><i class="ongoing"></i></p>
                     </div>
                    </div>
            </div>
        </div>
    </section>



    <section class="redContainer">
        <div class="redItem">
            <div class="list">
                <div class="img">
                   <p class="price">20</p>
                   <p class="txt">满50减20</p>
                </div>
                <div class="content">
                    <h3>全场通用</h3>
                    <p>余额：<span>20</span></p>
                    <p>有效期：2016-4-18</p>
                    <p>(该红包不支持虚拟商品使用)</p>
                    <span>已使用</span>
                </div>
            </div>
            <div class="list">
                <div class="img">
                   <p class="price">20</p>
                   <p class="txt">满50减20</p>
                </div>
                <div class="content">
                    <h3>全场通用</h3>
                    <p>余额：<span>20</span></p>
                    <p>有效期：2016-4-18</p>
                    <p>(该红包不支持虚拟商品使用)</p>
                    <span>已使用</span>
                </div>
            </div>

        </div>
    </section>

  </div>
</template>

<script>
    import Header from '../common/Header.vue';
    import Swiper from 'swiper';


    export default {
        data() {
         return{
           title:'我的红包',
           demo1: '可使用',
         }
        },
        components:{
           appHeader:Header,
        },
        route:{
          activate:function(transition){
            transition.next();
          }
        },

        ready(){
            var swiper = new Swiper('#likeSwiper', {
                slidesPerView: 3,
                spaceBetween: 10
            });

            let sildeW = $(".swiper-slide").width();
            $(".swiper-slide").find('img').css({'width':sildeW,'height':sildeW})
        },
        methods:{
        	greet:function() {
        		console.log(1)
        	}
        }
    }
</script>

<style lang="sass">

.dataNull{
    .msg{
     width: 100%;
     text-align: center;
     margin-top: 30px;

     .btn-gruop{
        margin-top: 10px;
        a{
          display: block;
          background:#ff6666;
          width: 120px;
          height: 45px;
          line-height: 45px;
          margin: 0 auto;
          border-radius:3px;
          color:#fff;
        }
     }
     >p{
        margin-top: -30px;
     }
     .icon-font{
       font-size: 120px;
       color:#ddd;
     }
  }
}

.likeContainer{
    position: absolute;
    bottom:55px;
    left: 0;
    width: 100%;
    background: #fff;

    .titleB{
        padding:10px;
        font-size:14px;
    }

    #likeSwiper{
        padding:0 10px;

        .swiper-slide{}
        .like-item{

           img{width:100%;height:80px;}
           .title{font-size:12px;}
           .progress {
                display: block;
                overflow: hidden;
                width: 100%;
                height: 6px;
                border-radius: 3px;
                background: #ddd;
                margin: 5px auto;
            }
            .ongoing {
                display: block;
                width: 50%;
                height: 6px;
                background: #ff6666;
            }
       }

    }
}

.redItem{
    .list{
        margin-bottom: 5px;
        background: #fff;
        padding:15px;
        display: -webkit-box;
        display: -moz-box;
        display: -o-box;
        display: -ms-flexbox;
        display: flex;

        .img{
           position: relative;
           width: 90px;
           height: 100px;
           background:url("../../assets/images/red.png");
           background-size: cover;
           text-align: center;
           font-size: 13px;
           .price{
              margin-top: 40px;
              font-size: 16px;
              color:yellow;
           }
           .txt{
             color:red;
           }
        }

        .content{
            -moz-box-flex: 1;
            -webkit-box-flex: 1;
            -o-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            font-size: 14px;
            margin-left: 10px;
            position: relative;
            >p{font-size: 13px;}
            >span{
                position: absolute;
                top:0;
                right:0;
            }
        }

   }
}

</style>
