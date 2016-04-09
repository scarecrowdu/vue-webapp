
<template>
    <nav class="app-nav">
      <div class="tab-bar">
      	 <a class="bar-item" v-link="{ name: 'home', exact: true }">
      	 	  <i class="icon">&#xe600;</i>
              <p>首页</p>
      	 </a>
         <a class="bar-item" v-link="{ path: '/announced' }">
             <i class="icon">&#xe603;</i>
             <p>最新揭晓</p>
         </a>
         <a class="bar-item" v-link="{ name: 'cart', exact: true }">
             <i class="icon">&#xe602;</i>
             <p>清单</p>
         </a>
         <a class="bar-item" v-link="{ path: '/me' }">
             <i class="icon">&#xe601;</i>
             <p>我的</p>
         </a>
      </div>
    </nav>
</template>

<style lang="sass">
	/*导航烂*/
	.app-nav{
        z-index: 99999;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 55px;
        width: 100%;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        background: #fff;
        border-top: 1px solid #E7E7E7;


        .tab-bar{
          padding-top: 2px;
          width: 100%;
          text-align: center;
          display: -webkit-box;
          display: -moz-box;
          display: -o-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          justify-content: space-between;

              a{
                color: #5D656B;
                -webkit-box-flex: 1;
                -moz-box-flex: 1;
                -webkit-flex: 1;
                -ms-flex: 1;
                flex: 1;
                text-align: center;
                box-sizing: border-box;
                display: block;
                font-size: 14px;

                .icon{
                  font-size: 18px;
                }
              }
        }
	}
	.custom-active{color: #ff6666 !important;}
</style>