<template>
  <div class="login">

    <app-header title="添加地址" :title-bg="true" header-bg="#fff">
        <a href="javascript:history.back();" slot="left" ><i class="icon">&#xe60b;</i></a>
        <p slot="right" >保存</p>
    </app-header>

    <div class="weui_cells">
        <div class="weui_cell">
          <p class="weui_cell_hd">
             <label class="weui_label" style="width: 4.5em;">收货人</label>
          </p>
          <p class="weui_cell_bd weui_cell_primary">
            <input class="weui_input" placeholder="请输入收货人" type="text">
          </p>
        </div>
        <div class="weui_cell">
          <p class="weui_cell_hd">
             <label class="weui_label" style="width: 5em;">手机号码</label>
          </p>
          <p class="weui_cell_bd weui_cell_primary">
            <input class="weui_input" placeholder="请输入密码" type="text">
          </p>
        </div>
        <div class="weui_cell">
            <p class="weui_cell_hd">
             <label class="weui_label" style="width: 5em;">详细地址</label>
            </p>
            <div class="weui_cell_bd weui_cell_primary">
                <textarea class="weui_textarea" placeholder="请输入评论" rows="3"></textarea>
                <!-- <div class="weui_textarea_counter"><span>0</span>/200</div> -->
            </div>
        </div>
    </div>

    <div class="weui_cells weui_cells_form">
        <div class="weui_cell weui_cell_switch">
            <div class="weui_cell_hd weui_cell_primary">设置默认</div>
            <div class="weui_cell_ft">
                <input class="weui_switch" type="checkbox">
            </div>
        </div>
    </div>

    <div class="weui_cells" v-if="adsId != undefined">
        <div class="weui_cell" @click="delAddress(adsId)">删除地址</div>
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

    import Header from '../common/Header.vue'

    export default {
        data() {
         return{
           adsId:this.$route.query.adsId,
           title: '默认为北京',
    		   value: [],
    		   title2: '手动设定',
    		   value2: ['广东省', '深圳市', '南山区'],
    		   addressData: []
         }
        },
        components:{
           appHeader:Header
        },
        route:{
          data (transition) {
            var _self = this;
            // _self.getAjaxData();
            console.log(this.adsId);
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
            },

            /*删除*/
            delAddress:function(id){
                var _self = this;
                $.ajax({
                    type: "GET",
                    url:'../../src/data/address.json',
                    data:{ids:id},
                    dataType:"json",
                    success :function(json){

                    }
                });
            }

        }
    }
</script>

<style lang="sass">
/* @import '~vux/vux.css'; */
</style>
