define([
	'jquery',
	'text!./order.html',
	'baidu',
	'css!./order.css'
],function($,html){
	function render(){
		$("#container").html(html);
		getData();
		bindEvent();
	}
	//事件
	function bindEvent(){
		$(".orderBox nav").on("click","ul>li",function(){
			$(this).children().addClass("bottomSpan").end().siblings().children().removeClass("bottomSpan")
		})
	}
	//ajax请求数据
	function getData(){
		$.get("http://www.vrserver.applinzi.com/aixianfeng/apiyuding.php",{name:"five"},function(data){
			if(typeof data==="string"){
				data  =JSON.parse(data);
			}
			document.querySelector(".two").innerHTML = baidu.template("orderList",data);
		});
	}
	return{
		render:render
	}
})