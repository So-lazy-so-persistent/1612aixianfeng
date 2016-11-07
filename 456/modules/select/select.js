//单击跳转回主页
$(".leftLeft").on("click",function(){	
	window.location.href = "../../index.html";

});
//单击清空历史记录
$(".clear").on("click",function(){	
	$(".search2").children("span").remove();

});
//动态添加历史记录
$(".sssss").on("click",function(){
	window.location.href = "../../modules/product/searchProduct.html";
	if($(".headerInput").val() != ""){
		localStorage.setItem("spans","$('.headerInput').val()" );
		localStorage.getItem("spans");
	$(".search2").append("<span>"+$(".headerInput").val()+"</span>");
	$(".headerInput").val('');
	}
});