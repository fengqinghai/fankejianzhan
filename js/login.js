window.onload=function(){
//====sec2  微信头像转换
var a1=document.getElementById("a1");
console.log(a1)
var img1=a1.getElementsByTagName("img")[0];

console.log(img1)
a1.onmouseover=function(){
	img1.setAttribute("src","img/login/24.png")
}
a1.onmouseout=function(){
	img1.setAttribute("src","img/login/23.png")
}
//====sec2  微信头像转换
}//onload
