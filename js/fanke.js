window.onload=function(){
var num=document.querySelector(".wrap p span");
var n=0;
console.log(num);
function jia(){
	num.innerHTML=n;
	n+=11532;
	if(n>=15000000){
		clearInterval(time);
		num.innerHTML="15,000,000";
	}
	
}//jia
var time=setInterval(jia,1);

//激活fullpage.js
$("#fullpage").fullpage({
	sectionColor:["","","","","","",""],
	navigation:true,
	navigationPosition:"left",//一定要有引号
	navigationTooltips:["page1","page2","page3","page4","page5","page6","page7"],
	showActiveTooltip:true,
});
	
	
}//window.onload
