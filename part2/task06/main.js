function createLi(num){
	var li=document.createElement("li");
	li.innerHTML=num;
	return li;
}

function getData(){
	var input=document.getElementById("input");
	var nums=input.value.split(/\s+/);
	return nums;
}

function searchHander(){
	var key=document.getElementById("key").value;
	var list=document.getElementById("list").children;
	for(var i=0,len=list.length;i<len;i++){
		var str=list[i].innerHTML;
		var index=str.search(key);
		if(index>=0){
			var ss=str.split(key);
			if(index==0){
				list[i].innerHTML="<span>"+key+"</span>"+ss[0];
			}
			else if(ss.length==1){
				list[i].innerHTML=ss[0]+"<span>"+key+"</span>";
			}
			else{
				list[i].innerHTML=ss[0]+"<span>"+key+"</span>"+ss[1];
			}
		}
	}
}



function zuoru(){
	var nums=getData();
	var list=document.getElementById("list");
	for(var i=0,len=nums.length;i<len;i++)
	{
		var li=createLi(nums[i]);
		list.insertBefore(li,list.firstChild);
	}
}

function youru(){
	var nums=getData();
	var list=document.getElementById("list");
	for(var i=0,len=nums.length;i<len;i++)
	{
		var li=createLi(nums[i]);
		list.insertBefore(li,list.lastChild);
	}
}

function zuochu(){
	var list=document.getElementById("list");
	var num=list.removeChild(list.firstChild).innerHTML;
	alert(num);
}

function youchu(){
	var list=document.getElementById("list");
	var num=list.removeChild(list.lastChild).innerHTML;
	alert(num);
}

(function(){
	var zr=document.getElementById("zr");
	var yr=document.getElementById("yr");
	var zc=document.getElementById("zc");
	var yc=document.getElementById("yc");
	var search=document.getElementById("search");
	zr.onclick=zuoru;
	yr.onclick=youru;
	zc.onclick=zuochu;
	yc.onclick=youchu;
	search.onclick=searchHander;
})();