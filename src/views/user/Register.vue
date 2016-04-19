<template>
  <div class="register ">

     <app-header title="注册" :title-bg="true">
        <a href="javascript:history.back();" slot="left" ><i class="icon">&#xe60b;</i></a>
    </app-header>


    <div class="weui_cells">
        <div class="weui_cell">
          <p class="weui_cell_hd">
             <label class="weui_label" >手机号：</label>
          </p>
          <p class="weui_cell_bd weui_cell_primary">
            <input class="weui_input" placeholder="请输入11位手机号" type="text">
          </p>
        </div>
        <div class="weui_cell">
          <p class="weui_cell_hd">
             <label class="weui_label" >验证码：</label>
          </p>
          <p class="weui_cell_bd weui_cell_primary">
            <input class="weui_input" placeholder="请输入验证码" type="text">
          </p>
          <p class="weui_cell_ft">获取验证码</p>
        </div>
        <div class="weui_cell">
          <p class="weui_cell_hd">
             <label class="weui_label" >设置密码：</label>
          </p>
          <p class="weui_cell_bd weui_cell_primary">
            <input class="weui_input" placeholder="6-15位字符，不能输入特殊字符" type="text">
          </p>
        </div>
        <div class="weui_cell">
          <p class="weui_cell_hd">
             <label class="weui_label" >确认密码：</label>
          </p>
          <p class="weui_cell_bd weui_cell_primary">
            <input class="weui_input" placeholder="请输入确认密码" type="text">
          </p>
        </div>
    </div>

    <div>
       *注册代表已阅读并同意<a>积分购服务协议</a>
    </div>

    <div class="ubtn-group">
        <p class="weui_btn weui_btn_warn" id="logBtn">注册</p>
    </div>
      
  </div>
</template>

<script>

    import Header from '../common/Header.vue';
    
    export default {
        data() {
         return{
           title:'注册',
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

<style lang="sass">
 .register{
   .weui_cell{
    padding: 15px;
   }
   .weui_label{
     width: 5em;
   }
 }
</style>