<template>
  <div class="graphic"  >
     {{{list}}}
  </div>
</template>

<script>
	export default {
        data() {
         return{
           list:[]
         }
        },
        route:{
        	 data(){
               var self = this;
               self.getAjaxData();               
            }
        },
        methods:{

            //请求数据
            getAjaxData(){
                  let self = this;

                  self.$http.get('../../src/data/detail.json').then(function (response) {

                      let data = response.data;
                      if (data.retcode == 1) {
                          self.list = data.data.content; 
                      }
                  }, function (response) {
                      // error callback
                  });
            }
          }

    }
</script>


<style lang="sass">
.graphic{
  img{
    max-width:100%;
  }
}
</style>