define(['backbone'],function(){
	
	var Router =Backbone.Router.extend({
		routes:{
			"home":"homeFun",
			"store":"storeFun",
			"order":"orderFun",
			"cart":"cartFun",
			"mine":"mineFun",
			"*actions":"defaultAction"
		},
		homeFun:function(){
			require(['modules/home/home.js','modules/home/swiper-3.3.1.min.js',],function(home){
				home.render()
			})
		},
		storeFun:function(){
			require(['modules/store/store.js'],function(store){
				store.render()
			})
		},
		orderFun:function(){
			require(['modules/order/order.js'],function(order){
				order.render()
			})
		},	
		cartFun:function(){
			require(['modules/cart/cart.js'],function(cart){
				cart.render()
			})
		},
		mineFun:function(){
			require(['modules/mine/mine.js'],function(mine){
				mine.render()
			})
		},
		defaultAction:function(){
			location.hash = 'home';
		}
	});
	var router = new Router();
})