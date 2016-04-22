<template>
  <div class="aside_components_mask" v-if="show" transition="modal" @click.stop="show=false"></div>
  <div class="aside"
    :style="{width : width ? width+'px' : ''}"
    :class="placement"
    v-if="show"
    :transition="slideTransition"> <!--这里 相当于 v-bind:transition="slideTransition"  -->
    <div class="aside-dialog">
      <div class="aside-content">
        <div class="aside-header">
          <button  class="close" @click='close'><span>&times;</span></button>  在aside中定义的close事件
          <h4 class="aside-title">{{header}}</h4>
      <!--     <dl>
            <dt>props参数：</dt>
            <dt>width:{{width}} </dt>
            <dt>placement:{{placement}}</dt>
            <dt>header:{{header}}</dt>
          </dl> -->
        </div>
        <div class="aside-body">
          <slot name="body">
            default body
          </slot>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  module.exports = {
    props: {
      show: {
        type: Boolean,
        require: true
      },
      placement: {
        type:String
      },
      header: {
        type: String,
        default:''
      },
      width: {
        type:Number
      }
    },
    computed:{
      slideTransition:function(){
        console.log('slide' + this.placement);
        return 'slide' + this.placement;
      }
    },
    methods:{
      close:function(item,index){
        this.show = false
      }
    },
    ready:function(){
      //测试，如果在父元素绑定一个el，在这里在绑定事件
      //document.body.addEventListener('click',this.hideWrap,false);
    },
    destroyed:function(){
      // document.body.removeEventListener('click',this.hideWrap,false);
      // console.log('组件销毁');
    }
  }
</script>

<style>
  .aside_components_mask{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,.5);
    transition: opacity .3s ease;
  }
  .aside-open {
    transition: transform 0.3s;
  }
  .aside-open.has-push-right {
    transform: translateX(-300px);
  }
  .aside {
      position: fixed;
      top: 0;
      bottom: 0;
      z-index: 1049;
      overflow: auto;
      background: #fff;
  }
  .aside.left {
    left: 0;
    right: auto;
  }
  .aside.right {
    left: auto;
    right: 0;
  }
  .aside.top{
    top:0;
    bottom:auto;
  }
  .aside.bottom{
    bottom:0;
    top:auto;
  }
 
  .aside:focus {
      outline: 0
  }
  .aside .aside-dialog .aside-header {
      border-bottom: 1px solid #e5e5e5;
      min-height: 16.43px;
      padding: 6px 15px;
      background: #337ab7;
      color: #fff
  }
  .aside .aside-dialog .aside-header .close {
      margin-right: -8px;
      padding: 4px 8px;
      color: #fff;
      font-size: 25px;
      opacity: .8
  }
  .aside .aside-dialog .aside-body {
      position: relative;
      padding: 15px
  }
  .aside .aside-dialog .aside-footer {
      padding: 15px;
      text-align: right;
      border-top: 1px solid #e5e5e5
  }
  .aside .aside-dialog .aside-footer .btn+.btn {
      margin-left: 5px;
      margin-bottom: 0
  }
  .aside .aside-dialog .aside-footer .btn-group .btn+.btn {
      margin-left: -1px
  }
  .aside .aside-dialog .aside-footer .btn-block+.btn-block {
      margin-left: 0
  }
  .aside-backdrop {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1040;
      opacity: 0;
      transition: opacity .3s ease;
      background-color: #000
  }
  .aside-backdrop.in {
      opacity: .5;
  }
</style>