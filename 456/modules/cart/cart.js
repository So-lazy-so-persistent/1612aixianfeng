define([
	'jquery',
	'text!./cart.html',
	'css!./cart.css'
],function($,html){
	function render(){
		$("#container").html(html);
		getDate();
		bindEvent();
	}
	//事件
	function bindEvent(){

	}
	//ajax请求数据
	function getDate(){

	}
	return{
		render:render
	}
})