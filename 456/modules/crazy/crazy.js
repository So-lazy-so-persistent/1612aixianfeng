//单击跳转回主页
$(".headerLeft").on("click",function(){	
	window.location.href = "../../index.html";

})
//动态获取ajax数据
$.get("http://www.vrserver.applinzi.com/aixianfeng/apimiaosha.php",{name:"three"},function(data){
	if(typeof data==="string"){
		data  =JSON.parse(data);
	}
	console.log(data);
	document.querySelector(".main_wrap").innerHTML = baidu.template("crazyList",data);
});
//单击切换分类
$(".nav2").on("click",".abcd",function(){
	$(this).css({"backgroundColor":"#fdd000","color":"black"}).siblings().css({"backgroundColor":"#272c2a","color":"#fff"});
})
//单击刷新页面
$(".headerRight").on("click",function(){
 	window.location.reload();	
})