
define(function (require, exports, module){
	var move=require('move').move;
	
	exports.tab=function (){
		var oPlay=document.getElementById('play');
		var aBtn=oPlay.getElementsByTagName('ol')[0].children;
		var oUl=oPlay.getElementsByTagName('ul')[0];
		var nLiH=oUl.children[0].offsetHeight;
		
		for (var i=0; i<aBtn.length; i++)
		{
			(function (index){
				aBtn[i].onmouseover=function (){
					for (var i=0; i<aBtn.length; i++)
					{
						aBtn[i].className='';
					}
					this.className='active';
					
					// oUl.style.top=-nLiH*index+'px';
					move(oUl, {top:-nLiH*index});
				};
			})(i);
		}
		
	};
});









