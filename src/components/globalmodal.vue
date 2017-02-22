<template>
		<div class="modal-mask" v-show="show" transition="modal" transition-mode="out-in">
			<div class="modal-wrapper" v-el:overlay @click.self.stop="show=false" >
				<div class="modal-container">
					<div class="modal-header">
						<!-- <span class="modal-close"  @click="show=false"></span> -->
						{{globalmodal.title}}
					</div>
					<div class="modal-body">
						 {{globalmodal.content}}
						 {{globalmodal.alert}}
					</div>
					<div class="modal-footer">
						 <button @click="confirmCallback">确定</button>
						 <button @click="cancelCallback" v-if="globalmodal.alert == false">取消</button>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	export default {
		data(){
			return {
				show:false
			}
		},
		props: {
			globalmodal: {
				type: Object
			},
			twoWay: true
		},
		watch:{
			'globalmodal.rd'(val){
				this.show = true;
			},
			'globalmodal.alert'(val){
				console.log("-----------"+val);
			}
		},
		methods:{
			/**
			 * 取消回调事件
			 * @return {[type]} [description]
			 */
			cancelCallback(){
				const cancelFn = this.globalmodal.cancelFn;
				if(typeof cancelFn === "function"){
					this.globalmodal.cancelFn();
				    this.globalmodal.cancelFn = function(){};
				}
				this.show = false;
			},
			/**
			 * 确认回调事件
			 * @return {[type]} [description]
			 */
			confirmCallback(){
				const confirmFn = this.globalmodal.cancelFn;
				if(typeof confirmFn === "function"){
					this.globalmodal.confirmFn();
					this.globalmodal.confirmFn = function(){};
				}
				this.show = false;
			}
		}
	}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 280px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header{
   padding: 10px 10px 0 10px;
   text-align: center;
}
.modal-header h3 {
  margin-top: 0;
  color: #333;
}

.modal-body {
  padding: 15px 10px;
}
.modal-footer{
	display: flex;
	position: relative;
}
.modal-footer:before {
	content: " ";
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 1px;
	border-top: 1px solid #d9d9d9;
	color: #d9d9d9;
	-webkit-transform-origin: 0 0;
	transform-origin: 0 0;
	-webkit-transform: scaleY(.5);
	transform: scaleY(.5);
	left: 0;
}
.modal-footer button{
	flex: 1;
	padding:13px 10px;
}
.modal-default-button {
  float: right;
}
.modal-enter, .modal-leave {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>