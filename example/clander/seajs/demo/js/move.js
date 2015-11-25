
define(function (require, exports, module){
	
	var getStyle=require('base').getStyle;
	var Tween=require('tween').Tween;
	
	exports.move=function (obj, json, options){
		options=options || {};
		var duration=options.duration || 1000;
		var easing=options.easing || Tween.Linear;
		
		// start+dis*n/count
		var start={};
		var dis={};
		for (var name in json)
		{
			start[name]=parseFloat(getStyle(obj, name));
			dis[name]=parseFloat(json[name])-start[name];
		}
		
		var count=Math.floor(duration/30);
		var n=0;
		
		clearInterval(obj.timer);
		obj.timer=setInterval(function (){
			n++;
			
			for (var name in json)
			{
				var cur=easing(duration*n/count, start[name], dis[name], duration);
				
				if (name == 'opacity')
				{
					obj.style[name]=cur;
				}
				else
				{
					obj.style[name]=cur+'px';
				}
			}
			
			if (n == count)
			{
				clearInterval(obj.timer);
				options.complete && options.complete(obj);
			}
		}, 30);
	};
});