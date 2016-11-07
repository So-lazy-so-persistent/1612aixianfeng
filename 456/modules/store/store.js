define([
	'jquery',
	'text!./store.html',
	'baidu',
	'css!./store.css'
],function($,html){
	function render(){
		$("#container").html(html);
		getData();
		bindEvent();
	}

	//ajax请求数据
	function getData(){
		$.get("http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=热销榜",{name:"four"},function(data){
			if(typeof data==="string"){
				data  =JSON.parse(data);
			}
			document.querySelector(".list_bottom").innerHTML = baidu.template("storeList",data);
			addd();
		});
	}

	//事件
	function bindEvent(){
		$(".sousuo").on("click",function(){
				window.location.href = "modules/select/select.html";
		})
		$(".storeBox .left").on("click","ul>li",function(){
			$(this).children().addClass("spanAdd").end().siblings().children().removeClass("spanAdd")
		})


		$(".storeBox .hot").on("click",function(){
			$.get("http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=热销榜",{name:"four"},function(data){
				if(typeof data==="string"){
					data  =JSON.parse(data);
				}
				document.querySelector(".list_bottom").innerHTML = baidu.template("storeList",data);
				addd();
			});
		})

		$(".storeBox .day").on("click",function(){
			$.get("http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=天天特价",{name:"four"},function(data){
				if(typeof data==="string"){
					data  =JSON.parse(data);
				}
				document.querySelector(".list_bottom").innerHTML = baidu.template("storeList",data);
				addd();
			});
		})

		$(".storeBox .good").on("click",function(){
			$.get("http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=优选水果",{name:"four"},function(data){
				if(typeof data==="string"){
					data  =JSON.parse(data);
				}
				document.querySelector(".list_bottom").innerHTML = baidu.template("storeList",data);
				addd();
			});
		})
		$(".storeBox .mlik").on("click",function(){
			$.get("http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=牛奶面包",{name:"four"},function(data){
				if(typeof data==="string"){
					data  =JSON.parse(data);
				}
				document.querySelector(".list_bottom").innerHTML = baidu.template("storeList",data);
				addd();
			});
		})

		



	}


	function addd(){


		$(".storeBox .list_one").on("click",".add",function(){
			// console.log(1);
			// alert(1);
			var oldDiv = $(this).parent().parent().siblings(".list_one_img ");
			var oldImg = $(this).parent().parent().siblings(".list_one_img ").css("backgroundImage");
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
	
	
	return{
		render:render
	}
})