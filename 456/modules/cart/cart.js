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
		for(var item in localStorage){
			if(item != 'jfVersion'&&item!='undefined'&&item!='length'&&item!='spans'){
				var obj = JSON.parse(JSON.parse(localStorage[item]).data);
				var num = JSON.parse(localStorage[item]).number;
				var str = '<div class="list">'+
							'<div class="choose"></div>'+
							'<div class="photo" style="background:url('+obj.img+') no-repeat;background-size: 100%;"></div>'+
							'<div class="how">'+
								'<h4>'+obj.name+'</h4><p>￥'+obj.price+'<span class="jia">＋</span>'+
								'<span style="border:0;color: black" class="numm">'+num+'</span><span class="jian">－</span></p>'+
							'</div>'+
						'</div>'+
						'<textarea style="display:none">'+JSON.stringify(obj)+'</textarea>'
				$(".listDiv")[0].innerHTML+= str;
				$(".allMoney").html("obj.price")
			}
		}
		$(".cartBox .list p").on("click",".jia",function(e){
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
			$(".toAdd").html(parseInt($(".toAdd").html())+1)
			$(this).siblings(".numm").html(parseInt($(this).siblings(".numm").html())+1)
		})
		$(".cartBox .list p").on("click",".jian",function(e){
			$(".toAdd").html(parseInt($(".toAdd").html())-1)
			$(this).siblings(".numm").html(parseInt($(this).siblings(".numm").html())-1)
			if($(this).siblings(".numm").html() == 0){
				$(this).parent().parent().parent(".list").remove();
			}
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

			
		})

	}
	//ajax请求数据
	function getDate(){

	}
	return{
		render:render
	}
})