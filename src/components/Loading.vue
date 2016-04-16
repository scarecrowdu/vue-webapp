<template>
  <div v-show="show"  class="loading app-content">
      {{title}}
  </div>
</template>

<script>
export default {

  props:{
  	replace:true,
  	title:{
  		type:String,
  		default:"正在加载中"
  	},
  	show:{
  		type:Boolean,
  		default:true,
  	}
  }
}
</script>

<style lang="sass">
	.loading{
		z-index: 10000;
		overflow: hidden;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		color:#fff;
	}
</style>