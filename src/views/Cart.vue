<template>
  <div class="cart app-content">

    <app-header title="清单"></app-header>
       
    <div class="cart-msg">
      <i class="cart-icon icon">&#xe602;</i>
      <p>空空如也~</p>
      <div class="btn-gruop">
          <a class="go-indiana">立即积分夺宝</a>
      </div>
    </div>

    
    <div class="cartBox">
      <div class="cartItem ui-border-t" v-for="item in ishopList">
         <div class="checklist">
           <input type="checkbox" class="check"  v-model="item.finished" >
         </div>
         <div class="imglist ui-border">
            <img src="{{item.shopimg}}">
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
                <p class="btn-minus" @click="minusNum(item.id)" ><a class="btn minus icon">&#xe60d;</a></p> 
                <p class="btn-input"><input type="tel" v-model="item.buycount" v-on:keyup="inpNum(item.id)" number></p>
                <p class="btn-plus" @click="plusNum(item.id)" ><a class="btn plus icon">&#xe60c;</a></p>
              </div>

            </div>
         </div>
      </div>
    </div>
    <span>Checked names: {{ list | json }}</span>
    <div class="cartEdit">
        <div class="chk">
            <input type="checkbox" class="check" v-model="" value="2asdsd211">
            <span>全选</span>
        </div>
        <div class="info">
            总计<span>10</span>积分
        </div>
        <div class="btn">
           <a class="weui_btn weui_btn_warn">结算</a>
        </div>
    </div>

  </div>
</template>

<script>

    var cartData = {
        "retcode": 1,
        "retmsg": "查看清单成功",
        "data": {
            "ishopList": [
                {
                    "id": 1,
                    "mid": 1,
                    "shopid": 1,
                    "sid": 1,
                    "shopname": "Xoopar XP61044 章鱼吸盘式移动电源 4000毫安",
                    "shopimg": "http://pic.pedaily.cn/201503/20150324100853205320.jpg",
                    "productid": 100,
                    "price": 1,
                    "buycount": 666,
                    "standard": null,
                    "totalmember": 119,
                    "remainmember": 119,
                    "period": 100000001,
                    "itemno": null,
                    "providers": null
                },
                {
                    "id": 2,
                    "mid": 1,
                    "shopid": 2,
                    "sid": 1,
                    "shopname": "章鱼吸盘式移动电源 4000毫安Xoopar XP61044 ",
                    "shopimg": "http://img1.gtimg.com/ninja/0/ninja141074803812010.jpg",
                    "productid": 200,
                    "price": 1,
                    "buycount": 10,
                    "standard": null,
                    "totalmember": 319,
                    "remainmember": 219,
                    "period": 100000001,
                    "itemno": null,
                    "providers": null
                },
                {
                    "id": 3,
                    "mid": 1,
                    "shopid": 3,
                    "sid": 1,
                    "shopname": "Xoopa 章鱼吸盘式移动电源 4000毫安",
                    "shopimg": "http://img1.qq.com/tech/pics/6241/6241197.jpg",
                    "productid": 300,
                    "price": 1,
                    "buycount": 1,
                    "standard": null,
                    "totalmember": 1119,
                    "remainmember": 1000,
                    "period": 100000001,
                    "itemno": null,
                    "providers": null
                }
            ]
        }
    }


    import Header from './common/Header.vue';
    
    export default {
        data() {
         return{
           title:'清单',
           list: [],
           ishopList:cartData.data.ishopList
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
        methods:{

            selectAll: function() {
              this.ishopList  = this.ishopList.map(function(item){
                item.finished = true
                return item;
              })
            },

            //找一个元素的索引
            findIndex:function (id) {
                let index = -1;

                this.ishopList.forEach(function (item, key) {
                    if (item.id === id) {
                        index = key;
                        return;
                    }
                });

                return index;
            },

            // 添加一个数量
            plusNum:function(id){
                let index = this.findIndex(id);

                if (index !== -1) {
                    ++this.ishopList[index].buycount;
                }
            },

            // 减少一个数量
            minusNum:function(id){
                let index = this.findIndex(id);

                if (index !== -1) {
                    var item = this.ishopList[index];
                    if(item.buycount > 1){
                       --item.buycount;
                    }  
                } 
            },

            // inpNum:function(id){
            //     let index = this.findIndex(id);

            //     if (index !== -1) {
            //         var item = this.ishopList[index];
            //         var num  = item.buycount;


            //         if(isNaN(item.buycount)){
            //             item.buycount = 0;
            //             return;
            //         }
                    
            //     } 
            // }
        },
        computed: {
            inpNum: function () {
                let index = this.findIndex(id);
                if (index !== -1) {
                    var item = this.ishopList[index];
                    var num  = item.buycount;

                    if(isNaN(item.buycount)){
                        item.buycount = 0;
                        return;
                    }
                        
                } 
            }
        }

    }
</script>

<style lang="sass">

  .cart{
    background:#eee;

  }
  .cart-msg{
     width: 100%;
     text-align: center;
     margin-top: 30px;
     display: none;

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

  .cartBox{
    clear: both;
    overflow: hidden;

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
            border: 1px solid #ddd;
            border-radius:3px;
            overflow: hidden;

            >p{display: inline-block;float:left;}

            .btn-input {
                width: 42%;
                cursor: pointer;
                border-left: 1px solid #ddd;
                border-right: 1px solid #ddd;

                input{
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
                }
            }

            .btn-minus,.btn-plus{ width:29%;cursor: pointer; }

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
    position: absolute;
    bottom:55px;
    left:0;
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
        a{padding: 0 20px;}
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
    font-family: "weui";
    font-style: normal;
    font-weight: normal;
    speak: none;
    display: inline-block;
    vertical-align: middle;
    text-decoration: inherit;
    display: inline-block;
    content: "\EA01";
    font-size: 22px;
  }
}

.check:checked{

  &:after{
    content: "\EA06";
    color:#ff6666;
  }
}


   
</style>