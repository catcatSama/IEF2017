function createLi(num){
	var li=document.createElement("li");
	li.innerHTML=num;
	return li;
}

function getData(){
	var input=document.getElementById("input");
	var nums=input.value.split(' ');
	return nums;
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
	zr.onclick=zuoru;
	yr.onclick=youru;
	zc.onclick=zuochu;
	yc.onclick=youchu;
})();