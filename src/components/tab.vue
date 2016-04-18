<template>
	<div class="tab-panel" :class="{hide:!show}" v-show="show" :index="index" :transition="transiton" >
	{{$index}}
		<slot name="tab-panel"></slot>
	</div>
</template>

<script>
	module.exports = {
		data:function(){
			return {
				show:false,
				index:0
			}
		},
		props: {
			header: {
				type: String
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		computed:{
			show:function(){
				return this.$parent.activeIndex === this.index;
			},
			transiton:function() {
        		return this.$parent.effect;
      		}
		},
		created:function(){
			this.$parent.renderData.push({
				header: this.header,
				disabled: this.disabled
			});
			//因为这里每次index都是0，所以要在ready的时候设置一下它的index
			this.index = this.$parent.renderData.length - 1;
		}
	}
</script>

<style>

</style>