<template>
	<div id="app" v-cloak :class="{'change-page':changePage}">

		<!-- 路由 -->
		<div class="wrap">
			<router-view class="v" :transition="effect" keep-alive></router-view>
			<!-- :transition="effect" keep-alive -->
		</div>

		<!-- 导航 -->
		<navbar v-if="isIndex"></navbar>

		<!-- loading -->
		<loading :show="loadshow"></loading>

		<!-- toast -->
		<toast v-ref:toast :toast.sync="toast">
			<div slot="content">{{toast.content}}</div>
		</toast>

	</div>
</template>

<script>

	import Navbar from './views/common/Navbar.vue';
	import Loading from './components/Loading.vue';
	import Toast from './components/toast.vue';

	export default {
		data() {
			return {
				effect: 'next',        //用于切换过渡动画
				isIndex: true,          //用于navbar导航
				changePage: false,         //用于过渡设置样式
				loadshow: false,         //用于全局loading
				toast: { content: '' }    //toast

			}
		},
		route: {
			deactivate(transition) {
				this.toast.content = '';
				transition.next();
			}
		},
		components: {
			Navbar,
			Loading,
			Toast
		}
	}
</script>

<style>
	[v-cloak] { 
		display: none;
	}
</style>