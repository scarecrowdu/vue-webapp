
export default function(router) {
    router.map({
		'/':{
			name:'home',
			component:function(resolve){
				require(['./views/Home.vue'],resolve)
			}
		},
		'/announced':{
			name:'announced',
			component:function(resolve){
				require(['./views/Announced.vue'],resolve)
			}
		},

		'/cart':{
			name:'cart',
			component:function(resolve){
				require(['./views/Cart.vue'],resolve)
			}
		},

		'/me':{
			name:'me',
			component:function(resolve){
				require(['./views/Me.vue'],resolve)
			}
		},
		
		// not found handler
	    '*': {
	        component:function(resolve){
			    require(['./views/error/not_found.vue'],resolve)
			}
	    }
	});



	// window.routeList=[];
	// router.beforeEach(function(transition){
	// 	console.log('before---------------');
	// 	//可以通过在路由中的自定义字段来验证用户是否需要登陆
	// 	// if(transition.to.auth){
	// 	// 	console.log('通过配置路由中自定义的字段验证是否需要登陆');
	// 	// }

	// 	// //如果是中止，这里可以判断用户登录
	// 	// //if(transition.to.path === '/forbidden'){
	// 	if(transition.to.name == 'forbidden'){
	// 		router.app.authenticating = true
	// 		setTimeout(function(){
	// 			router.app.authenticating = false
	// 			alert('此路由在全局中设置为中止');
	// 			transition.abort();
	// 		},1500);
	// 	}

	// 	if(routeList.length > 1 && transition.to.name==routeList[routeList.length-2]['name']){
	// 		router.app.effect='back';
	// 		routeList.splice(routeList.length-1,1);
	// 		console.log(routeList);
	// 	} else {
	// 		router.app.effect='fade';
	// 		routeList.push({
	// 			name : transition.to.name,
	// 			path : transition.to.path,
	// 			query : transition.to.query,
	// 			params : transition.to.params,
	// 			timer: +new Date
	// 		});
	// 	}

	// 	//setTimeout(function(){
	// 		transition.next();
	// 	//},1000);
	// });


	//全局放一个routlist

	window.routeList = [];
	router.beforeEach(function(transition){
	    if(routeList.length > 1 && transition.to.name==routeList[routeList.length-2]){
	        router.app.effect='prev';//返回
	        routeList.splice(routeList.length-1,1);
	        setTimeout(function(){
	            //这里加上延迟是要在afterEach之后在执行
	          transition.next()
	        },15);
	        return;
	    }
	    router.app.effect='next';//前进
	    routeList.push(transition.to.name);
	    transition.next();
	});

	router.afterEach(function(transition){
	    //这里必须要加上， 此钩子函数会在beforeEach之后马上执行,没有这句会导致
	    //当你浏览顺序为，首页->页面二->页面三
	    //此时点击页面二正常返回，然后再次选择页面三，本应该是前进，结果还是返回。
	    router.app.effect='next';//重置前进
	});



	//可以记录访问路径
	router.afterEach(function(transition){
		console.log('-----------------after');
		for (var i = 0; i < routeList.length; i++) {
			console.log(routeList[i].name);
		};
	});


}