window.onload=function(){
	

		//获取后台数据
		if(window.XMLHttpRequest){
			var ajax=new XMLHttpRequest();
		}else{
			var ajax=ActiveXObject("Microsoft.HTTP")
		};
		ajax.open("get","json/page4-2.json",true);
		ajax.send();
		
		ajax.onreadystatechange=function(){
			if(ajax.readyState==4&&ajax.status==200){
				var msg=JSON.parse(ajax.responseText);
				console.log(msg);
				
				var v1=new Vue({
					el:"#sec2",
					data:{list:"",}
				});
				v1.list=msg;
				console.log(v1.list)
			}//成功函数
		}//onreadystatechange
		
		
		
		
		


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}//window.onload
