
<template>
    <header class="app-header" :style="{background:headerBg,color:titleColor}" :class="{ 'header-table': titleBg}">
      <p class="h-left">
      	<slot name="left"></slot>
      </p>
      <h1 class="app-title">{{title}}</h1>
      <p class="h-right">
      	<slot name="right"></slot>
      </p>
    </header>
</template>

<script>
    export default {
        data() {
         return{
           isB :true,
         }
        },
        props:{
          title:String,
          titleColor:String,
          headerBg:String,
          titleBg:Boolean
        }
    }
</script>

<style lang="sass">

    body .header-table{
      background-color: #eee;
      color:#333;
    }
   .app-header{
      position: relative;
      padding: 0 10px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      height: 45px;
      line-height: 45px;
      background:#ff6666;
      color:#fff;

      .h-left,.h-right{
        position: absolute;
        top:0;
        z-index: 100;
        width: 60px;
        text-align: center;
      }

      .h-left{
        left: 0;
      }

      .h-right{
        right: 0;
      }

      .app-title{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding:0 60px;
        text-align: center;
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

      }
   }
</style>