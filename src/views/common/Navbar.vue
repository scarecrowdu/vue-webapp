
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
        z-index: 9999;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        transform: translateZ(0);
        background: #fff;

        &:before {
          content: " ";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 1px;
          border-top: 1px solid #d9d9d9;
          color: #d9d9d9;
          transform-origin: 0 0;
          transform: scaleY(.5);
        }


        .tab-bar{
          padding-top: 2px;
          width: 100%;
          height: 55px;
          text-align: center;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          justify-content: space-between;

              a{
                color: #5D656B;
                flex: 1;
                text-align: center;
                box-sizing: border-box;
                display: block;
                font-size: 14px;

                .icon{
                  font-size: 18px;
                  margin-bottom: 5px;
                  display: block;
                }
              }
        }
	}
	.custom-active{color: #ff6666 !important;}
</style>