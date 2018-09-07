function UrlSearch(st){
	var name,value; 
			var str=decodeURI(location.href); //取得解码后的地址栏     带http
			console.log(str)
			var num=str.indexOf("?")
			console.log(num)
			var str2=str.substr(num+1);//截取？之后的内容
			console.log(str2)
			
			var arr=str2.split("&"); //各个参数放到数组里  后台里各个参数之间是用&链接的
			console.log(arr)
			
			for(var i=0;i<arr.length;i++){
				num=arr[i].indexOf("=");
				if(num>0){
					name=arr[i].substring(0,num);
					value=arr[i].substr(num+1);//截取=之后的内容
					this[name]=value;
					console.log(name,"--------",st);
					if(name==st){
						console.log(value);
						return value;
					}
				}
			}//for循环
}//UrlSearch

var msg=JSON.parse(unescape(UrlSearch('pro')));//写入参数  参数就是在a标签里=与？之间的字串，相当于给传来的数据加一个名字  固定模板
console.log(msg)
//console.log(msg.tit);
//console.log(msg.news);


//-------------------解析传来的数据



var str='<div class="wrap2"><p><span>新闻详情</span></p><div><p>'+msg.tit+'</p><ul><li><span>'+msg.time+'</span></li><li><img src="img/page4-2/28.png" alt=""/><span>'+msg.count+'</span></li></ul></div><ul><li><a href="">'+msg.news[0]+'</a></li><li><a href="">'+msg.news[1]+'</a></li><li><a href="">'+msg.news[2]+'</a></li><li><a href="">'+msg.news[3]+'</a></li><li><a href="">'+msg.news[4]+'</a></li><li><a href="">'+msg.news[5]+'</a></li><li><a href="">'+msg.news[6]+'</a></li></ul><div><ul><li>分享到：</li><li><a href=""><img src="img/page4-2/22.png" alt="" /></a></li><li><a href=""><img src="img/page4-2/23.png" alt="" /></a></li><li><a href=""><img src="img/page4-2/24.png" alt="" /></a></li><li><a href=""><img src="img/page4-2/25.png" alt="" /></a></li><li><a href=""><img src="img/page4-2/26.png" alt="" /></a></li><li><a href=""><img src="img/page4-2/27.png" alt="" /></a></li></ul></div></div>'

var sec2=document.getElementById("sec2");
sec2.innerHTML=str;







