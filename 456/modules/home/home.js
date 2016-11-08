define([
	'text!./home.html',
	'css!./home.css',
	'baidu',
	'css!./swiper-3.3.1.min.css'
],function(html){
	function render(){
		$("#container").html(html);
		getData();
		bindEvent();
	}

	//ajax请求数据
	function getData(){
		$.get("http://www.vrserver.applinzi.com/aixianfeng/apihome.php",{name:"one"},function(data){
			if(typeof data==="string"){
				data  =JSON.parse(data);
			}

			document.querySelector(".fenglei").innerHTML = baidu.template("homeimg",data);
			document.querySelector(".swiper-wrapper").innerHTML = baidu.template("homeswiper",data);

			var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: true,

			    updateOnImagesReady:true,
				autoplay: 3000,//可选选项，自动滑动			    
			    // 如果需要分页器
			    pagination: '.swiper-pagination',			    
			    // 如果需要前进后退按钮
			    nextButton: '.swiper-button-next',
			    prevButton: '.swiper-button-prev',			    
			    // 如果需要滚动条
			    scrollbar: '.swiper-scrollbar',
			  })        				
		});

		
		$.get("http://www.vrserver.applinzi.com/aixianfeng/apihomehot.php",{name:"two"},function(data){
			if(typeof data==="string"){
				data  =JSON.parse(data);
			}
			document.querySelector(".listlist").innerHTML = baidu.template("homeList",data);
			addddd();
		});


	}


	//事件
	function bindEvent(){
		$(".fenglei").on("click","ul>li",function(){
			if($(this).text() == "疯狂秒杀"){
				window.location.href = "modules/crazy/crazy.html";
			}
		})
		$(".sousuo").on("click",function(){
				window.location.href = "modules/select/select.html";
		})
		$(".homeBox .list_one").on("click",".add",function(){
			$(".toAdd").css("display","block");
			$(".toAdd").html(parseInt($(".toAdd").html())+1)
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


	function addddd(){
		
		$(".homeBox .listlist li").on("click",".add",function(e){
			$(".toAdd").css("display","block");
			$(".toAdd").html(parseInt($(".toAdd").html())+1)
			$(this).siblings(".homeBox .num").html(parseInt($(this).siblings(".homeBox .num").html())+1)
			$(this).siblings(".homeBox .rem").css("display","block");
			$(this).siblings(".homeBox .num").css("display","block");
			if($(".toAdd").html == 0){
				$(".toAdd").css("display","none");
			}
			var parentLi = $(this).closest("li");
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
			var oldDiv = $(this).parent().parent().siblings(".list_two_img ");
			var oldImg = $(this).parent().parent().siblings(".list_two_img ").css("backgroundImage");
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
		$(".homeBox .listlist li").on("click",".rem",function(e){


            var parentLi = $(this).closest("li");
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
			$(this).siblings(".homeBox .num").html(parseInt($(this).siblings(".homeBox .num").html())-1);
			if($(this).siblings(".homeBox .num").html() == 0){
				$(this).css("display","none");
				$(this).siblings(".homeBox .num").css("display","none");
				$(this).siblings(".homeBox .num").html(0);
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











/*宋航 21:18:21
//当前界面的加号和减号的操作
function bindEvent() {
//实现购物车的添加显示
$(".right_list").on("click", ".right_list_li_p1_s5", function() {
    //实现页面的添加span的出现
    // var num = 1;
    $(this).siblings(".right_list_li_p1_s6").css("visibility", "visible");
    $(this).siblings(".right_list_li_p1_s7").css("visibility", "visible");
    $(this).siblings(".right_list_li_p1_s7").html(parseInt($(this).prev(".right_list_li_p1_s7").html()) + 1);
    //对加入到购物车进行控制
    $(".footer_l4 span").html(parseInt($(".footer_l4 span").html()) + 1);
    var goToCart = {};
    var box = $(this).parent().siblings('.right_list_div1');
    var boxUrl = $(this).parent().siblings('.right_list_div1').css("backgroundImage");
    var newBox = box.clone().appendTo(document.body);
    newBox.css({
      'background-image': boxUrl,
      'z-index': 10,
      'border-radius': '50%',
      'position': 'absolute',
      'top': box.offset().top + 'px',
      'left': box.offset().left + 'px',
      'width': box.width() + 'px',
      'height': box.height() + 'px'
    });
    newBox.animate({
      top: $('.footer_l4').offset().top,
      left: $('.footer_l4').offset().left + $('.footer_l4').width() / 2,
      width: 20,
      height: 32
    },400,
    function(){
      newBox.remove();
    });
  });

  /*goToCart.img =img.prop('src');
  goToCart.tit = $(this).parent().parent().children('.productName').html();
  goToCart.price = "￥"+$(this).parent().parent().find('.mp').html();
  goToCart.num = 1;*/



