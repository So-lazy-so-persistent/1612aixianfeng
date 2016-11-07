require.config({
	paths:{
		'jquery':"lib/jquery",
		'backbone':'lib/backbone',
		'css':"lib/css",
		'text':'lib/text',
		'md5':'lib/md5',
		'underscore':"lib/underscore",
		'baidu':"lib/baiduTemplate"
	},
	shim:{
		'baidu':{
			export:'baiduTemplate'
		}
	}
});

require([
	'jquery',
	'backbone',
	'./router.js'
],
function($,backbone){

	Backbone.history.start();
})