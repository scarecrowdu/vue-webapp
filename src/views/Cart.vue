<template>
  <div class="cart ">

    <!-- 头部 -->
    <appheader title="清单">
       <p slot="right" v-on:click="isedit = !isedit">
           <span v-show="!isedit">编辑</span>
           <span v-show="isedit">取消</span>
       </p>
    </appheader>


    <!-- 清单无数据 -->
    <section class="cartNull" style="display:none" >
        <div class="cart-msg">
          <i class="cart-icon icon">&#xe602;</i>
          <p>空空如也~</p>
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
                        <img src="../assets/images/logo.png">
                        <p class="title nowrap">小米电视小米电视小米电视小米电视</p>
                        <p class="progress"><i class="ongoing"></i></p>
                     </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="like-item">
                        <img src="../assets/images/logo.png">
                        <p class="title nowrap">小米电视小米电视小米电视小米电视</p>
                        <p class="progress"><i class="ongoing"></i></p>
                     </div>
                    </div>
            </div>
        </div>
    </section>

    <!-- 清单主内容 -->
    <section class="catContainer" v-if="!loading">
        <div class="cartBox">
          <div class="cartItem ui-border-t" v-for="item in ishopList">
             <div class="checklist" v-show="isedit">
               <span class="check" :class="{checked:item.checked}" @click="chk($index)" ></span>
             </div>
             <div class="imglist ui-border">
                <img :src="item.shopimg" >
             </div>
             <div class="prtlist">
                <p class="gname nowrap-multi">{{item.shopname}}</p>
                <div class="info">
                  <p>总需：{{item.totalmember}}人次</p>
                  <p>剩余：<span>{{item.remainmember}}</span>人次</p>
                </div>
                <div class="num">
                  <p>参与人次</p>
                  <div class="edit-quantity">
                    <p class="btn-minus" @touchstart="minusNum($index)"><a class="btn minus icon">&#xe60d;</a></p>
                    <p class="btn-input"><input type="tel" v-model="item.buycount | numFormat" v-on:keyup="inpNum($index)" number></p>
                    <p class="btn-plus" @touchstart="plusNum($index)" ><a class="btn plus icon">&#xe60c;</a></p>
                  </div>
                </div>
             </div>
          </div>
        </div>
        <div class="cartEdit " >
            <div class="chk" v-show="isedit">
                <span class="check" :class="{checked:checkedAll}" @click="chkAll()" ></span>
                <span>全选</span>
            </div>
            <div class="info" >
                <p v-show="!isedit">总计<span>{{totalQuantity}}</span>积分</p>
            </div>
            <div class="btn" v-show="!isedit">
               <a class="weui_btn weui_btn_warn">结算</a>
            </div>
            <div class="btn" v-show="isedit">
               <a class="weui_btn weui_btn_warn" v-show="isedit" v-on:click="delCart()">删除</a>
            </div>
        </div>
    </section>

    <!-- Loading -->
    <loading :show="loading"></loading>

  </div>
</template>

<script>

    import Mock        from 'mockjs';
    // 生成商品列数据
    Mock.mock('cartlist.json', {
      retcode: 1,
      retmsg: '查询成功',
      data: {
        'total': 1,
        'records': 10,
        'page': 1,
        'ishopList|4': [{
            'id|+1': 1,
            'mid|+1': 1,
            'shopid|+1': 1,
            'sid|+1': 1,
            'productid': 100,
            'price': '@integer(60, 600)',
            'buycount': '@integer(60, 1000)',
            'standard': null,
            'totalmember': '@integer(600, 10000)',
            'remainmember': '@integer(600, 10000)',
            'period|+10': 100000001,
            'itemno': null,
            'providers': null,
            'shopname': '@title(20, 100)',
            'shopimg': '@image(200x200, #ff6666, Cart)'
        }]
      }
    })

    import appheader from './common/Header.vue';
    import Loading   from  '../components/Loading.vue';
    import Swiper    from 'swiper';

    export default {
        data() {
         return{
           loading       :  true,
           isedit        :  false,  //用于切换编辑
           checkedAll    :  false,  //用于全选
           ishopList     :  []      //清单数据
         }
        },
        route:{
          activate(transition){
            transition.next();
          },
          data(transition){
             var self = this;
             self.getAjaxData(transition);
          }
        },
        ready(){
            var swiper = new Swiper('#likeSwiper', {
                slidesPerView: 3,
                spaceBetween: 10
            });
        },
        methods:{

            /**
             * 请求当前用户购物车数据
             * @param  {[type]} transition [description]
             * @return {[type]}            [description]
             */
            getAjaxData(transition){
                let self = this;
                self.$http.get('cartlist.json').then(function (response) {
                    let data = response.data;
                    if(data.retcode == 1){
                          self.loading = false;
                          var list  = data.data.ishopList

                          for (var i = 0; i < list.length; i++) {
                              list[i].checked = false;
                          }
                          transition.next({ ishopList:list});
                      }

                }, function (response) {
                    // error callback
                });

            },

            /**
             * 判断单商品是否全选
             * @param  {[type]} item [description]
             * @return {[type]}      [description]
             */
            checked(item) {
                if(item.checked)
                    return true;
                else
                    return false;
            },

            /**
             * 选择商品
             * @param  {[type]} index [数组索引值]
             * @return {[type]}       [description]
             */
            chk(index) {
                this.ishopList[index].checked = !this.ishopList[index].checked;
                let r = this.ishopList.every(this.checked);
                if(r){
                    this.checkedAll = true;
                    console.log("all true");
                }else{
                    this.checkedAll = false;
                    console.log("not all true");
                }
            },

            /**
             * 全选商品按钮
             * @return {[type]} [description]
             */
            chkAll(){
                this.checkedAll = !this.checkedAll;

                for (let i = 0; i < this.ishopList.length; i++) {
                    if (this.checkedAll === true)
                       this.ishopList[i].checked = true;
                    else
                       this.ishopList[i].checked = false;
                }
            },

            /**
             * 当前商品添加数量
             * @param  {[type]} index [数组索引值]
             * @return {[type]}       [description]
             */
            plusNum(index){
                let item = this.ishopList[index];
                let limitNum = item.remainmember;
                let buyCount = item.buycount;

                if (index !== -1){
                    if (limitNum <= buyCount){
                        alert("超过了限制范围");
                        return
                    }else{
                       ++item.buycount;
                      this.updateCart(item.id,item.buycount)
                    }
                }
            },

            /**
             * 当前商品添加减少数量
             * @param  {[type]} index [数组索引值]
             * @return {[type]}       [description]
             */
            minusNum(index){
                if (index !== -1) {
                    let item = this.ishopList[index];
                    if(item.buycount > 1){
                       --item.buycount;
                       this.updateCart(item.id,item.buycount);
                    }
                }
            },

            /**
             * 当前商品输入限制判断
             * @param  {[type]} index [数组索引值]
             * @return {[type]}       [description]
             */
            inpNum(index){
                let item = this.ishopList[index];
                let limitNum = item.remainmember;
                let buyCount = item.buycount;

                if (index !== -1) {
                    if(isNaN(buyCount)){
                        item.buycount = 0;
                        return;
                    }else{
                        if (limitNum <= buyCount){
                           item.buycount = limitNum;
                        }
                        this.updateCart(item.id,item.buycount);
                    }
                }
            },

            /**
             * 计算总积分
             * @return {[type]} [description]
             */
            totalQuantity() {
                let total = 0;
                this.ishopList.forEach(function (item) {
                    total += parseInt(item.buycount);
                })
                return total;
            },

            /**
             * 删除商品
             * @return {[type]} [description]
             */
            delCart(){
                let idsArr = [];

                this.ishopList.forEach(function (item) {
                   if (item.checked)
                      idsArr.push(item.id)

                   return idsArr;
                })

                if(idsArr.length <= 0){
                   alert("请选择需要删除的商品")
                }else{}
            },

            // 更新清单数量
            updateCart(id,buycount){
                console.log(id, buycount);
            }
        },
        computed:{
             totalQuantity() {
                let total = 0;
                if (this.ishopList != 0) {
                   this.ishopList.forEach(function (item) {
                    total += parseInt(item.buycount);
                   })
                }
                return total;
            },

        },
        components:{
          appheader,
          Loading
        }
    }

</script>

<style lang="sass">

  .cart-msg{
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
     .cart-icon{
       font-size: 120px;
       color:#ddd;
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
            // padding: 10px;

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

  .cartBox{
    clear: both;
    overflow: hidden;
    margin-bottom: 130px;

    .cartItem{
        padding:10px;
    }
  }

  .cartItem{
    width: 100%;
    text-align: center;
    display: -webkit-box;
    display: -moz-box;
    display: -o-box;
    display: -ms-flexbox;
    display: flex;
    background-color: #fff;

    .checklist{
      width: 30px;
      margin-top: 25px;
      text-align: center;


    }
    .imglist{
      width: 100px;
      height: 100px;
      padding:2px;
      margin-left:10px;
      margin-right: 10px;


      img{width: 100%;height: 100%;}

    }
    .prtlist{
      -moz-box-flex: 1;
      -webkit-box-flex: 1;
      -o-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      text-align: left;

      .gname{ font-size: 14px; line-height:normal; }

      .info{
        font-size: 0;
        >p{
          display: inline-block;
          width: 50%;
          font-size:13px;
        }
      }

      .num{
        display: -webkit-box;
        display: -moz-box;
        display: -o-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        font-size:13px;
        margin-top: 5px;

        >p{
          margin-right: 5px;
        }
        >div{
            -moz-box-flex: 1;
            -webkit-box-flex: 1;
            -o-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            font-size:13px;
        }

        .edit-quantity{
            max-width:150px;
            border: 1px solid #ddd;
            border-radius:3px;
            overflow: hidden;

            >p{display: inline-block;float:left;}

            .btn-input {
                width: 40%;
                cursor: pointer;
                border-left: 1px solid #ddd;
                border-right: 1px solid #ddd;

                input{
                    webkit-box-sizing: border-box;
                    -ms-box-sizing: border-box;
                    -o-box-sizing: border-box;
                    box-sizing: border-box;
                    width: 100%;
                    border: none;
                    background-color: transparent;
                    color: inherit;
                    font-family: inherit;
                    font-style: inherit;
                    font-weight: inherit;
                    text-align: center;
                    height: 35px;
                    line-height: 35px;
                    padding:5px;
                }
            }

            .btn-minus,.btn-plus{ width:30%;cursor: pointer; }

            .btn {
                display: block;
                height: 35px;
                position: relative;
                text-align: center;
                line-height: 35px;

            }
        }
      }
    }
  }

  .cartEdit{
      position: fixed;
      bottom:55px;
      left:0;
      z-index: 1000;
      width: 100%;
      padding:10px;
      box-sizing:border-box;
      -moz-box-sizing:border-box;
      -webkit-box-sizing:border-box;
      background: #fff;
      display: -webkit-box;
      display: -moz-box;
      display: -o-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;

      .info{
          -moz-box-flex: 1;
          -webkit-box-flex: 1;
          -o-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
          text-align:right;
          margin-right: 10px;
      }
      .btn{
          a{padding: 0 30px;}
      }
  }

  .check{
    color: #999;
    border-radius: 0;
    width: auto;
    height: auto;
    border: none;
    background: 0 0;
    box-sizing: border-box;
    padding: 0;
    -webkit-appearance: none;
    outline: 0;

    &:after{
      font-family: "iconfont";
      font-style: normal;
      font-weight: normal;
      speak: none;
      display: inline-block;
      vertical-align: middle;
      text-decoration: inherit;
      display: inline-block;
      content: "\e607";
      font-size: 22px;
    }
  }

  .checked{

    &:after{
      content: "\e60f";
      color:#ff6666;
    }
  }

</style>
