window.onload=function(){
	
//大图旋转
var sec1=document.getElementsByClassName("sec1")[0];
var sec1ul=sec1.getElementsByTagName("ul")[0];
console.log(sec1ul)
//sec1ul.style.animation="x90 3s linear";

	var deg=90;
	
	function lunbo(){
		sec1ul.style.animation="x"+deg+" 3s ease 0s 1 both";
		deg+=90;
		if(deg==450){
			deg=90;
		}
	}
	lunbo();
	var time=setInterval(lunbo,6000);
	sec1.onmouseover=function(){
		console.log("ennter");
		alert(111111111111)
		clearInterval(time);
		//------切换效果-------------
	var btn1=sec1.getElementsByClassName("btn1")[0];
	var btn2=sec1.getElementsByClassName("btn2")[0];
	btn1.onclick=function(){
		sec1ul.style.animation="x"+(deg-90)+" 3s ease both";
		deg+=90;
		if(deg==450){deg=90};
	}
	btn2.onclick=function(){
		sec1ul.style.animation="x"+(deg-90)+" 3s ease reverse both";
		deg-=90;
		if(deg==0){deg=360}
	}
	//------切换效果-------------
	
		
	}//mouseover
	sec1.onmouseout=function(){
		console.log("leave");
		time=setInterval(lunbo,6000);
	}
	//大图旋转
	


	//===========sec4切换===js方法==========================================
	var lis=document.querySelectorAll(".wrap4>ul li");
	console.log(lis.length)//5
	for(var i=0;i<lis.length-1;i++){
		lis[i].index=i;//添加index属性
		lis[i].onmouseover=function(){
			var ind=this.index
			for(var j=0;j<lis.length-1;j++){
				lis[j].style.background="#5D5B62";
				lis[j].style.height="80px";
				lis[j].style.borderBottom="1px solid white";
				lis[j].style.lineHeight="80px";
//				lis[j].style.transition="all 0s 0.3s linear";
			}
			
			this.style.background="#009FE9";
			this.style.height="150px";
			this.style.borderBottom=0;
			this.style.lineHeight="150px";
//			this.style.transition="all 0s 0.3s linear";
			//sec4后台调取数据写在每一个mouseover事件中
			if(window.XMLHttpRequest){//创建ajax对象
				var ajax=new XMLHttpRequest();
			}else{
				var ajax=new ActiveXObject("Microsoft.HTTP");
			}
			ajax.open("get","json/page1.json",true);
			ajax.send();
			ajax.onreadystatechange=function(){
				
				if(ajax.readyState==4&&ajax.status==200){
					// console.log(ajax.responseText)//返回纯文本
					var msg=JSON.parse(ajax.responseText)//将纯文本转化为json格式
					console.log(ind)

					// 解析数据
					var str='<h3>'+msg[ind].tit+'</h3><p>'+msg[ind].p+'</p><ul><li><img src="'+msg[ind].img[0]+'"/><span>'+msg[ind].span[0]+'</span></li><li><img src="'+msg[ind].img[1]+'"/><span>'+msg[ind].span[1]+'</span></li><li><img src="'+msg[ind].img[2]+'"/><span>'+msg[ind].span[2]+'</span></li></ul><a href="page2.html">了解详情</a>';
					document.querySelector(".wrap4>div").innerHTML=str;
					if(msg[ind].img[2]==""){//如果当前img中的第3个元素为空时，删除对应li标签
						document.querySelector(".wrap4>div ul li:last-of-type").remove();
					}
				}else{}//失败函数
			}//onreadystatechange事件
			
			

		}//mouseover
		
			
	}//for循环
	//===========sec4切换====js方法================================
	
// 	//===========sec4切换====jquery方法==========
	
	// var lis=$(".wrap4>ul li");
	// console.log(lis.length)//5
	// for(var i=0;i<lis.length-1;i++){
		
	// 	lis.eq(i).mouseover(function(){
	// 		for(var j=0;j<lis.length-1;j++){
	// 			lis.eq(j).css({"background":"#5D5B62","height":"80px","border-bottom":"1px solid white","line-height":"80px"})
	// 		}
	// 		var ind=$(this).index();//获取对应lis的索引
	// 		$(this).css({"background":"#009FE9","height":"150px","border-bottom":"0","line-height":"150px"})
	// 		$.ajax({
	// 			type:"get",
	// 			url:"json/page1.json",
	// 			dataType:"json",
	// 			async:true,
	// 			success:suc,
	// 			error:function(){}
	// 		});//ajax掉用
			
	// 		function suc(msg){
	// 			console.log(msg[ind].img.length);
	// 			var str='<h3>'+msg[ind].tit+'</h3><p>'+msg[ind].p+'</p><ul><li><img src="'+msg[ind].img[0]+'"/><span>'+msg[ind].span[0]+'</span></li><li><img src="'+msg[ind].img[1]+'"/><span>'+msg[ind].span[1]+'</span></li><li><img src="'+msg[ind].img[2]+'"/><span>'+msg[ind].span[2]+'</span></li></ul><a href="#">了解详情</a>';//
	// 			$(".wrap4>div").html(str);

	// 			if(msg[ind].img[2]==""){//如果当前调取的json对象中，img的第三个元素为空时，删除对应li标签
	// 			$(".wrap4>div ul li:last-of-type").remove();
	// 			}
	// 		};//suc
			
	// 	});//mouseover
	// }//for循环
	//===========sec4切换====jquery方法==========
	
//--------------------导航模块儿----------------------------	

//js原生获取后台数据！！！！！！！！！
//if(window.XMLHttpRequest){
//	var ajax2=new XMLHttpRequest();
//}else{
//	var ajax2=ActiveXObject("Microsoft.HTTP")
//};
//ajax2.open("get","json/page1-2.json",true);
//ajax2.send();
//ajax2.onreadystatechange=function(){
//	if(ajax2.readyState==4&&ajax2.status==200){
//		var msg=JSON.parse(ajax2.responseText)//转化为json字符串
//		console.log(msg);
//		
//		
//		//将vue实例放进来
//		var v1=new Vue({
//		el:"#header",
//		components:{
//			"nav1":{
//				template:"#s",
//				data:function(){
//					return {msg}
//				},
//			},
//		},
//
//	});
	//成功函数
//}//onreadystatechange



//jquery方法获取后台数据
$.ajax({
	method:"get",
	url:"json/page1-2.json",
	async:true,
	data:{},
	dataType:"json",
	success:suc,
	error:function(){}
});

function suc(msg){
	console.log(msg)
	
	//放入vue实例
		var v1=new Vue({
		el:"#header",
		components:{
			"nav1":{
				template:"#s",
				data:function(){
					return {msg}
				},
			},
		},
	});//vue
}//suc

//--------------------导航模块儿----------------------------	





	
}//window.onload()
