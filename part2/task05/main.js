var numsArray=new Array();
function resortHander(){
	var len=numsArray.length;
	numsArray.sort(function(a,b){
		return Number(a)>Number(b);
	});
	var list=document.getElementById("list").children;
	for(var i=0;i<len;i++){
		list[i].style.height=numsArray[i];
	}
}


function createLi(num){
	var li=document.createElement("li");
	li.style.height=num;
	li.style.width=20;
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
		numsArray.unshift(Number(nums[i]));
	}
}

function youru(){
	var nums=getData();
	var list=document.getElementById("list");
	for(var i=0,len=nums.length;i<len;i++)
	{
		var li=createLi(nums[i]);
		list.insertBefore(li,list.lastChild);
		numsArray.push(Number(nums[i]));
	}
}

function zuochu(){
	var list=document.getElementById("list");
	var num=list.removeChild(list.children[0]).style.height.split('p')[0];
	numsArray.shift();
	alert(num);
}

function youchu(){
	var list=document.getElementById("list");
	var num=list.removeChild(list.children[list.children.length-1]).style.height.split('p')[0];
	numsArray.pop();
	alert(num);
}

(function(){
	var zr=document.getElementById("zr");
	var yr=document.getElementById("yr");
	var zc=document.getElementById("zc");
	var yc=document.getElementById("yc");
	var resort=document.getElementById("resort");
	zr.onclick=zuoru;
	yr.onclick=youru;
	zc.onclick=zuochu;
	yc.onclick=youchu;
	resort.onclick=resortHander;
})();