'use strict';

window.onload=function(){
	var oImg = document.getElementsByTagName('img')[0];
	var oLeft = document.getElementById('lt');
	var oRight = document.getElementById('rt');
	var count = 0;
	var timer = null;
	oLeft.onmouseover=function(){
		timer = setInterval(function(){
			count++;
			if(count==77){
				count=0;
			}
			oImg.src='img/'+count+'.jpg';
		},30);
	};
	oLeft.onmouseout=function(){
		clearInterval(timer);
	};
	oRight.onmouseover=function(){
		timer = setInterval(function(){
			count--;
			if(count<0){
				count=76;
			}
			oImg.src='img/'+count+'.jpg';
		},30);
	};
	oRight.onmouseout=function(){
		clearInterval(timer);
	};
};