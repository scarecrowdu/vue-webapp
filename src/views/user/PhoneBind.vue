<template>
  <div class="login ">

    <app-header title="手机绑定" :title-bg="true">
      <a href="javascript:history.back();" slot="left" ><i class="icon">&#xe60b;</i></a>
    </app-header>

     <p>*为了更方便通知您领奖，请先绑定手机</p>
     <div class="weui_cells">
        <div class="weui_cell">
          <p class="weui_cell_hd">
             <label class="weui_label" style="width: 4.5em;">账号：</label>
          </p>
          <p class="weui_cell_bd weui_cell_primary">
            <input class="weui_input" placeholder="请输入账号\手机号" type="text">
          </p>
        </div>
        <div class="weui_cell">
          <p class="weui_cell_hd">
             <label class="weui_label" style="width: 4.5em;">密码：</label>
          </p>
          <p class="weui_cell_bd weui_cell_primary">
            <input class="weui_input" placeholder="请输入密码" type="text">
          </p>
          <p class="weui_cell_ft">忘记密码</p>
        </div>
    </div>

    <div class="ubtn-group">
        <p class="weui_btn weui_btn_warn" id="logBtn">绑定手机</p>
    </div>
      
  </div>
</template>

<script>

    import Header from '../common/Header.vue';
    
    export default {
        data() {
         return{
           title:'清单',
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

</style>