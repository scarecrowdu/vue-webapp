
<template>
    <nav class="app-nav">
      <div class=" weui_tabbar">
      	 <a class="weui_tabbar_item" v-link="{ name: 'home', exact: true }">
      	 	 <div class="weui_tabbar_icon">
      	 	    <i class="icon">&#xe600;</i>
             </div>
             <p class="weui_tabbar_label">首页</p>
      	 </a>
         <a class="weui_tabbar_item" v-link="{ path: '/announced' }">
             <div class="weui_tabbar_icon">
                <i class="icon">&#xe603;</i>
             </div>
             <p class="weui_tabbar_label">最新揭晓</p>
         </a>
         <a class="weui_tabbar_item" v-link="{ name: 'cart', exact: true }">
             <div class="weui_tabbar_icon">
                <i class="icon">&#xe602;</i>
             </div>
             <p class="weui_tabbar_label">清单</p>
         </a>
         <a class="weui_tabbar_item" v-link="{ path: '/me' }">
            <div class="weui_tabbar_icon">
                <i class="icon">&#xe601;</i>
             </div>
             <p class="weui_tabbar_label">我的</p>
         </a>
      </div>
    </nav>
</template>

<style lang="sass">
	/*导航烂*/
	.app-nav{
	  clear: both;
	  position: absolute;
	  bottom: 0;
	  left: 0;
	  width: 100%;

	  a{
	  	color: #333;
	  }

	  .icon{
	  	 font-size: 20px;
	  }

	}
	  
	.custom-active-class{
	  color: #ff6666 !important;

	  p{
	  	color: #ff6666 !important;
	  }
	}
</style>