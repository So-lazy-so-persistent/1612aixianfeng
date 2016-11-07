define([
	'jquery',
	'text!./mine.html',
	'css!./mine.css'
],function($,html){
	function render(){
		$("#container").html(html);
		getDate();
		bindEvent();
	}
	//事件
	function bindEvent(){
		$(".mineBox .three").on("click",".our",function(){
			if($(this).text() == "积分商城"){
				window.location.href = "modules/market/market.html";
			}
		})
		$(".mineBox .one").on("click",function(){
			window.location.href = "modules/myOrder/myOrder.html";
		})
		$(".mineBox .three").on("click",".our",function(){
			if($(this).text() == "收货地址"){
				window.location.href = "modules/address/myAddress.html";
			}
		})


		
	}
	//ajax请求数据
	function getDate(){

	}
	return{
		render:render
	}
})