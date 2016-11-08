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
			addd();
		});
	}
	return{
		render:render
	}
})

function addd(){
	$(".orderBox .main1").on("click",".h",function(e){
		$(".toAdd").css("display","block");

		var parentLi = $(this).closest(".main1");
		var json = parentLi.find('textarea').val();
		var id = parentLi.attr('id');
		var value = localStorage.getItem(id);
		if(value){
                localStorage.setItem(id,JSON.stringify({
                     data:json,
                     number:JSON.parse(value).number+1
                 }));
           }else{
                localStorage.setItem(id,JSON.stringify({
                     data:json,
                     number:1
                }))
         }   
		$(".toAdd").html(parseInt($(".toAdd").html())+1)
		var oldDiv = $(this).parent().siblings(".photo ");
		var oldImg = $(this).parent().siblings(".photo ").css("backgroundImage");
		var newImg = oldDiv.clone().appendTo(document.body);
		newImg.css({
			'background-image':oldImg,
			'background-size': '88%',
			'z-index':8,
			'border-radius': '50%',
	      	'position': 'absolute',
	     	'top': oldDiv.offset().top+ 'px',
	     	'left': oldDiv.offset().left + 'px',
	     	'width': oldDiv.width() + 'px',
	     	'height': oldDiv.height() + 'px'
		})
		newImg.animate({
			top: $('.footer4').offset().top,
		    left: $('.footer4').offset().left +$('.footer4').width() / 3,
		    width: 20,
		    height: 20
		},1500,function(){
			newImg.remove();
		})
	})
}