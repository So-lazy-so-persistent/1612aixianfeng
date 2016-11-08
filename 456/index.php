<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wx7aed7486aac8fb71", "a0875fbd571a29356f27e5f2c408ac0a");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/common.css">
	<!-- <link rel="stylesheet" type="text/css" href="reset.css"> -->
</head>
<body>
<div id="container"></div>
<footer>
		<div><a href="#home">
			<div class="foot footer1"></div>
			<p>首页</p></a>
		</div>
		<div><a href="#store">
			<div class="foot footer2"></div>
			<p>闪送超市</p></a>
		</div>
		<div><a href="#order">
			<div class="foot footer3"></div>
			<p>新鲜预订</p></a>
		</div>
		<div><a href="#cart">
			<div class="foot footer4"></div>
			<p>购物车</p><span class="toAdd">0</span></a>
		</div>
		<div><a href="#mine">
			<div class="foot footer5"></div>
			<p>我的</p></a>
		</div>
	</footer>
<script src="lib/require.js" data-main="main"></script>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
/*var latitude =0;
var longitude = 0;
	function getPostion(){
		wx.openLocation({
		    latitude: 0, // 纬度，浮点数，范围为90 ~ -90
		    longitude: 0, // 经度，浮点数，范围为180 ~ -180。
		    name: '', // 位置名
		    address: '', // 地址详情说明
		    scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
		    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
		});
	}
	function getLocation(){
		wx.getLocation({
			type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
			success: function (res) {
			var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
	        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
	        var speed = res.speed; // 速度，以米/每秒计
	        var accuracy = res.accuracy; // 位置精度
			    }
		});
	}*/
	
	wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
     jsApiList: [
        'checkJsApi',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ]
  });
</script>
</body>
</html>