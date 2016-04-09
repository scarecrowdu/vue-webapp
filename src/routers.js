
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
			},
			subRoutes: {
	            '/msg': {
	                component: require('./views/center/Personal.vue')
	            },
	            '/register': {
	                component: require('./views/user/Register.vue')
	            },
	            '/PhoneBind': {
	                component: require('./views/user/PhoneBind.vue')
	            }
            }
		},
		'/user':{
			name:'user',
			component:function(resolve){
				require(['./views/user/User.vue'],resolve)
			},
			subRoutes: {
	            '/login': {
	                component: require('./views/user/Login.vue')
	            },
	            '/register': {
	                component: require('./views/user/Register.vue')
	            },
	            '/PhoneBind': {
	                component: require('./views/user/PhoneBind.vue')
	            }
            }
		},
		
		// not found handler
	    '*': {
	        component:function(resolve){
			    require(['./views/error/not_found.vue'],resolve)
			}
	    }
	});



	//全局放一个routlist
	window.routeList = [];
	router.beforeEach(function(transition){
		console.log('-----before-----');

	    if(routeList.length > 1 && transition.to.name==routeList[routeList.length-2]['name']){
	        router.app.effect='prev';//返回
	        routeList.splice(routeList.length-1,1);
	        setTimeout(function(){
	            //这里加上延迟是要在afterEach之后在执行
	          transition.next()
	        },150);
	        // return;
	    } else {
	    	router.app.effect='next';//前进
		    routeList.push({
				name : transition.to.name,
				path : transition.to.path,
				query : transition.to.query,
				params : transition.to.params,
				timer: +new Date
			});

			transition.next();
	    }

	    
		//使底部菜单栏在一级路由切换时一直保持显示
		//在二级页时隐藏
	    var toPath = transition.to.path;
	    if(toPath.replace(/[^/]/g,"").length>1){
	        router.app.isIndex = false;
	    }else{
	        router.app.isIndex = true;
	    }   
	});
    
    //可以记录访问路径
	router.afterEach(function(transition){
	    //这里必须要加上， 此钩子函数会在beforeEach之后马上执行,没有这句会导致
	    //当你浏览顺序为，首页->页面二->页面三
	    //此时点击页面二正常返回，然后再次选择页面三，本应该是前进，结果还是返回。
	    router.app.effect='next';//重置前进
	    console.log('-----after-----');
		for (var i = 0; i < routeList.length; i++) {
			console.log(routeList[i].name);
		};
	});

}