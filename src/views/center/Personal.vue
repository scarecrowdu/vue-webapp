<template>
  <div class="login">

    <appheader title="个人资料">
        <a href="javascript:history.back();" slot="left" ><i class="icon">&#xe60b;</i></a>
    </appheader>


     <div class="weui_cells">
        <div class="weui_cell">
          <p class="weui_cell_hd">
             <label class="weui_label" style="width: 4.5em;">message</label>
          </p>
          <p class="weui_cell_bd weui_cell_primary">
            <input class="weui_input" placeholder="I'm placeholder" type="text">
          </p>
        </div>
        <div class="weui_cell">
          <p class="weui_cell_hd">
             <label class="weui_label" style="width: 4.5em;">ID</label>
          </p>
          <p class="weui_cell_bd weui_cell_primary">
            <input class="weui_input" placeholder="I'm placeholder" type="text">
          </p>
        </div>
        <div class="weui_cell">
          <p class="weui_cell_hd">
             <label class="weui_label" style="width: 4.5em;">账号</label>
          </p>
          <p class="weui_cell_bd weui_cell_primary">
            <input class="weui_input" placeholder="I'm placeholder" type="text">
          </p>
        </div>
        <div class="weui_cell">
          <p class="weui_cell_hd">
             <label class="weui_label" style="width: 4.5em;">昵称</label>
          </p>
          <p class="weui_cell_bd weui_cell_primary">
            <input class="weui_input" placeholder="I'm placeholder" type="text">
          </p>
        </div>
        <div class="weui_cell">
          <p class="weui_cell_hd">
             <label class="weui_label" style="width: 4.5em;">手机号码</label>
          </p>
          <p class="weui_cell_bd weui_cell_primary">
            <input class="weui_input" placeholder="I'm placeholder" type="text">
          </p>
        </div>
        <a class="weui_cell" v-link="{ path: '/center/addressList' }">
          <p class="weui_cell_hd">
             <label class="weui_label" style="width: 4.5em;">地址管理</label>
          </p>
          <p class="weui_cell_bd weui_cell_primary">

          </p>
           <div class="weui_cell_ft with_arrow"></div>
        </a>

    </div>

  </div>
</template>

<script>

    import Appheader from '../common/Header.vue';

    export default {
        data() {
         return{
           title:'个人资料',
           isIndex:true,
           titleColor:'red'
         }
        },
        components:{
           Appheader
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
