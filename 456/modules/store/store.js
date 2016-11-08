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

		$(".storeBox .list_one").on("click",".add",function(e){
			$(".toAdd").css("display","block");
			$(".toAdd").html(parseInt($(".toAdd").html())+1);
			$(this).siblings(".storeBox .num").html(parseInt($(this).siblings(".storeBox .num").html())+1)
			$(this).siblings(".storeBox .rem").css("display","block");
			$(this).siblings(".storeBox .num").css("display","block");
			if($(".toAdd").html == 0){
				$(".toAdd").css("display","none");
			}
			var parentLi = $(this).closest(".list_one");
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

		$(".storeBox .list_one").on("click",".rem",function(e){
			var parentLi = $(this).closest(".list_one");
			var json = parentLi.find('textarea').val();
			var id = parentLi.attr('id');
			var value = localStorage.getItem(id);
			if(value){
                localStorage.setItem(id,JSON.stringify({
                     data:json,
                     number:JSON.parse(value).number-1
                }));
            }
         	if(JSON.parse(value).number - 1=="0"){
         		delete localStorage[id]       
            }
 
			$(".toAdd").html(parseInt($(".toAdd").html())-1);
			$(this).siblings(".storeBox .num").html(parseInt($(this).siblings(".storeBox .num").html())-1);
			if($(this).siblings(".storeBox .num").html() == 0){
				$(this).css("display","none");
				$(this).siblings(".storeBox .num").css("display","none");
				$(this).siblings(".storeBox .num").html(0);
			}
			if($(".toAdd").html() == 0){
				$(".toAdd").css("display","none");
			}
		})
	}
	
	
	return{
		render:render
	}
})