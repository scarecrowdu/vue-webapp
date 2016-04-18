<template>
<div class="tab">
	<ul class="tab-nav">
		<li v-for="(index,item) in renderData">
			<a href="#"
			@click.prevent.stop = "handleTablistClick($event,index,this)"
			:class="{
				active:$index === activeIndex,
				disabled:item.disabled
			}"
			>{{item.header}}</a>
		</li>
	</ul>
	<slot name="tab-content"></slot>
</div>
</template>

<script>
	module.exports = {
		props: {
			effect: {
				type: String,
				default: 'fadein'
			}
		},
		data:function(){
			return {
				renderData:[],
				activeIndex: 0
			}
		},
		methods:{
			handleTablistClick:function(e,index,el){

				if (!this.renderData[index].disabled) this.activeIndex = index
			}
		},
		ready:function(){

		}
	}
</script>

<style>

.tab .active{
	color:#fff;
	background:#369;
}

.tab .tab-content{
	position:relative;
}
.tab .tab-panel{
	padding-top: 1px;
}
.tab .tab-panel.hide{
	position: absolute;
	top:0;
}




</style>