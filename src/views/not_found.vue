<template>
  <div>
    <div class="app-container">
    	<div class="not_found">
         <h1>404</h1>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
        data() {
         return{
           title:'404',
         }
        },
        route:{
          activate:function(transition){
          	document.title = this.title;
            this.$root.$set('header',this.title);
            transition.next();
          }
        },

    }
</script>


<style lang="sass">
   .not_found{
   	  display:table;
   	  height: 150px;
   	  width: 100%;

   	  h1{
   	  	display:table-cell;
   	  	vertical-align: middle;
   	  	text-align: center;
   	  }
   }
	
</style>