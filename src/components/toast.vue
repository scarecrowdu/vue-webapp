<template>
<div id="toast">
	<div class="mask_transparent" v-show="show"></div>
	<div class="toast" transition="toast" v-show="show">
		<slot name="content"></slot>
	</div>
</div>
</template>
<script>
	export default{
		data(){
			return {
				show : false
			}
		},
		props: ['toast'],
		watch:{
			//当给toast设置内容的时候就显示，如果没有定义时间，那么2.5秒后渐隐
			'toast.content':function(val,oldVal){
				const _this = this;
				if(val){
					clearTimeout(this.timeout)
					_this.show = true;
					this.timeout = setTimeout(() => {
						_this.show = false;
						setTimeout(function(){
							_this.toast.content = '';
							delete _this.toast.timer ;
						},310);//这里的300是动画的延迟，故意多设置10毫秒
					},_this.toast.timer || 2000);
				}else{
					_this.show = false;
				}
			}
		}
	}
</script>

<style>
.mask_transparent {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.toast{
	position: absolute;
	top:50%;
	left:50%;
	background: rgba(40, 40, 40, 0.75);
	transform:translateX(-50%) translateY(-50%);
	color:#fff;
    text-align: center;
    border-radius:6px;
    padding:10px;
    opacity:1;
    transition:opacity .3s linear;
    z-index: 10000;
}


.toast-leave{
	opacity:0;
}

</style>