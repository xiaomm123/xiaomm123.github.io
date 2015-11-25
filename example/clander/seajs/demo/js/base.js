
define(function (require, exports, module){
	
	module.exports={
		getStyle:function (obj, sName){
			return (obj.currentStyle || getComputedStyle(obj, false))[sName];
		}
	};
});