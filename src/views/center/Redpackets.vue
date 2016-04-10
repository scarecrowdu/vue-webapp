<template>
  <div class="login app-content">

    <app-header title="我的红包" :title-bg="true" header-bg="#fff">
        <a href="javascript:history.back();" slot="left" ><i class="icon">&#xe60b;</i></a>
    </app-header>


     <tab :line-width=2 active-color='#fc378c'>
       <tab-item :selected="demo1 === '可使用'" @click="demo1 = '可使用'">可使用</tab-item>
       <tab-item :selected="demo1 === '已使用/过期'" @click="demo1 = '已使用/过期'">已使用/过期</tab-item>
    </tab>
    
  

        
  </div>
</template>

<script>
    import { Tab, TabItem, Sticky, Divider } from 'vux'
    import Header from '../common/Header.vue';

    
    export default {
        data() {
         return{
           title:'我的红包',
           demo1: '可使用',
         }
        },
        components:{
           appHeader:Header,
		    Tab,
		    TabItem,
		    Sticky,
		    Divider
        },
        route:{
          activate:function(transition){
            document.title = this.title;
            this.$root.$set('header',this.title);
            transition.next();

          }
        },
        methods:{
        	greet:function(argument) {
        		console.log(1)
        	}
        }
    }
</script>
<style>
@import '~vux/vux.css';
</style>
