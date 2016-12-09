<template>
  <div class="adsList">

    <app-header title="地址管理" :title-bg="true" header-bg="#fff">
        <a href="javascript:history.back();" slot="left" ><i class="icon">&#xe60b;</i></a>
        <a v-link="{ path: '/center/addressEdit' }" slot="right" >添加</a>
    </app-header>


    <div class="ads-list">
        <a class="adsItem" v-link="{ name:'addressEdit', query:{adsId:item.aid} }" v-for="item in lists">
           <div class="adsheader">
             <p class="name">{{item.name}}</p>
             <p class="mobile">{{item.mobile}}</p>
           </div>
           <div class="adsinfo">
             <p class="msg"><label v-if="item.isdefault == 1">[默认]</label>{{item.province}}{{item.city}}{{item.address}}</p>
           </div>
        </a>
    </div>
  </div>
</template>

<script>
    import Mock        from 'mockjs'
    // 生成商品列数据
    Mock.mock('address.json', {
      retcode: 1,
      retmsg: '查询成功',
      data: {
        'total': 1,
        'records': 10,
        'page': 1,
        'addressList|3': [{
            'aid|+1': 1,
            'aid|+1': 88801,
            'name':'@name()',
            'country': 1,
            'province': 1,
            'city': 1,
            'district': 1,
            'address':'@county(true)',
            'zipcode|+100':518000,
            'tel+19090':"075525252522",
            'mobile+19090':12452154822,
            'isdefault': 0,
        }]
      }
    })
    import Header from '../common/Header.vue';
    export default {
        data() {
         return{
           title:'地址管理',
           isIndex:true,
           lists:[]
         }
        },
        components:{
           appHeader:Header
        },
        route:{
          data (transition) {
            var _self = this;
            _self.getAjaxData();

          },
          deactivate (transition){
               transition.next();
            }
        },
        methods:{
            /*请求数据*/
            getAjaxData:function(){
              let self = this;
              self.$http.get('address.json').then(function (response) {
                  let data = response.data;
                  if(data.retcode == 1){
                        self.lists = data.data.addressList;
                    }

              }, function (response) {
                  // error callback
              });
            }
        }
    }
</script>

<style lang="sass">
.ads-list{
  overflow: hidden;
  font-size: 14px;

  .adsItem{
    display: block;
    background:#fff;
    padding:10px 15px;
    margin-top: 10px;

    .adsheader{
      clear: both;
      overflow: hidden;

      p{ width: 50%;float: left;text-align: left;}
    }

    .adsinfo{
      clear: both;
      overflow: hidden;
      margin-top:10px;
      text-align: left;
      label{
        display: inline-block;
        color: red;
        margin-right:5px;
      }
    }
  }

}
</style>
