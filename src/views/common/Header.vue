
<template>
    <header class="app-header app-header-table">
      <p class="h-left">
      	<slot name="left"></slot>
      </p>
      <h1 class="app-title">
      	<slot name="title"></slot>
      </h1>
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
        }
    }
</script>

<style lang="sass">
   .app-header{
      position: relative;
      padding: 0 10px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      height: 45px;
      line-height: 45px;
      background:#ff6666;
      color:#fff;

      .h-left{
        float: left;
        text-align: center;
      }

      .h-right{
        float: right;
      }

      .app-title{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding:0 60px;
        text-align: center;
        font-size: 18px;

      }
   }
</style>