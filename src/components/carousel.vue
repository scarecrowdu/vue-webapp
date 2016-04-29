<template>
    <div class="swiper-container appSwiper" :style="{height: height}">
        <div class="swiper-wrapper">
        	<slot></slot>
        </div>
        <div class="swiper-pagination" :class="classpage"  v-if="showpage" ></div>
    </div>
</template>

<script>
    import Swiper from 'swiper';

	export default{
		ready(){
			let _this = this
			_this.$nextTick(() =>{
			   _this.renderSwiper();
			});
		},
		methods:{
		   /*渲染swiper组件*/
           renderSwiper(){
           	const _this = this
			this.swiper = new Swiper(_this.$el, {
				direction:_this.direction,
				autoplay: _this.autoplay,
				speed: _this.speed,
				loop: _this.loop,
				autoplayDisableOnInteraction: _this.autoplayDisableOnInteraction,
				pagination: '.swiper-pagination',
				paginationClickable: true
			});
           }
		},
		props: {
			/*滑动方向，可设置水平(horizontal)或垂直(vertical)*/
			direction: {
               type:String,
               default:'horizontal'
			},
			/*自动切换*/
			autoplay: {
               type:Number,
               default:3000
			},
		    /*滑动速度*/
			speed: {
               type:Number,
               default:300
			},
			/*循环切换*/
			loop:{
				type:Boolean,
				default:true
			},
			/*重新启动autoplay,默认为false：启动*/
			autoplayDisableOnInteraction: {
               type:Boolean,
               default:false
			},
			/*显示分页容器*/
			showpage: {
				type:Boolean,
				default:true
			},
			/*分页样式*/
			classpage: String,
			/*高度*/
			height: {
		      type: String,
		      default: "200px"
		    }
		},
		watch: {
		}
	}
</script>

<style lang="sass">
    /* scoped */
	/*轮播图 --- start*/
    .appSwiper {
        width:100%;
        
        .swiper-slide {
            text-align: center;
            background: #fff;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;

            a{display: block;}
            img{width: 100%;}
        }
    }
</style>