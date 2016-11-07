// 创建xhr对象
function createXhr(){
if(typeof XMLHttpRequest != "undefined"){
	return new XMLHttpRequest();
}else if(typeof ActiveXObject !="undefined"){
	var strList = ["MSXML.XMLHttp.6.0", "MSXML.XMLHttp.3.0", "MSXML.XMLHttp"],
		tem = "";
		for(var n in strList){
			try{
				new ActiveXObject(strList[n]);
				var tmp = strList[n];
				break;
			}catch(e){
				console.log(e);
			}
		}
		if(tmp = ""){
			console.log("您的浏览器目前不支持ajax请求！");
		}else{
			return new ActiveXObject(tmp);
		}
	}else{
		console.log("您的浏览器目前不支持ajax请求！");
	}
}

/*
	封装请求函数
		type:get/post
		url:请求路径
		isSyn:true异步/false同步
		data:上送参数
		callback:回调函数
*/
function sendRequest(type, url, isSyn, data, callback){
	var xhr = createXhr();
	xhr.onreadystatechange = function(){
		if(xhr.status == "200" || xhr.status == "304"){
			if(xhr.readyState == "4"){
				callback && callback(JSON.parse(xhr.responseText));
			}
		}
	}
	if (type == "get") {
		//?key1=value1&key2=value2
		url += "?";
		for (var n in data) {
			url += (n + "=" + data[n] + "&");
		}
		url = url.substr(0, url.length - 1)
	} else {
		data = JSON.stringify(data)
	}
	xhr.open(type, url, isSyn);
	xhr.send(type == "get" ? null : data);
}

