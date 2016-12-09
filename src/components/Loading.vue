<template>
  <div v-show="show"  class="loading app-content">

    <div class="load-box">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
      <div>{{title}}</div>
    </div>

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
		z-index: 10001;
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

    .load-box{
      position: absolute;
      top:50%;
      left:50%;
      width: 100%;
      transform: translate(-50%,-50%);
      text-align: center;
      color:#fff;
      font-size: 12px;
    }
	}

.spinner {
  width: 60px;
  height: 60px;

  position: relative;
  margin:10px auto;
}
.double-bounce1{background-color: #FF6666;}
.double-bounce2 {background-color: #FF6666;}
.double-bounce1, .double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: bounce 2.0s infinite ease-in-out;
  animation: bounce 2.0s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes bounce {
  0%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>
