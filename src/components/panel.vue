<style lang="sass">
.toggle-transition{
	-webkit-transition: height .3s ease;
	transition: height .3s ease;
	overflow: hidden;
}
.toggle-enter,
.toggle-leave{
	height : 0!important;
}
</style>
<template>
<div class="panel">
	<header class="panel-hd" @click="toggle">
		<slot name="header">{{title}}</slot>
	</header>
	<div class="panel-bd" v-el:panel v-show="show" transition="toggle" >
		<div class="panel-ct">
			<slot name='content'></slot>
		</div>
	</div>
</div>
</template>
<script>
export default {
	data() {
		return {
			height : ''
		}
	},
	props : {
		type : {
			type : String,
			default : 'normal' // normal || fold
		},
		show : {
			type : Boolean,
			default : true,
		},
		title : {
			type : String
		}
	},
	ready() {
		this.init()
	},
	methods : {
		toggle() {
			if (this.type !== 'normal') {
				this.show = !this.show
				//send event for accordion
				this.$dispatch('toggle', this)
			}
		},
		init() {
			if (this.type === 'normal') {
				this.show = true
			} else {
				let target = this.$els.panel

				target.style.display = 'block'
				target.style.height = target.getBoundingClientRect().height + 'px'

				if (!this.show) target.style.display = 'none'
			}
		}
	}
}
</script>