var timer=0;
function show(node){

	var node=document.getElementById(node.toString());
	 node.style.backgroundColor="#ffffff";
    setTimeout(function () {
        node.style.backgroundColor="#ff524a";
    },timer+=500);
    setTimeout(function () {
        node.style.backgroundColor="#ffffff";
    },timer+=500);
}

function preOrder(node){
	if(node>15)return;
	show(node);
	preOrder(node*2);
	preOrder(node*2+1);
}

function inOrder(node){
	if(node>15)return;
	inOrder(node*2);
	show(node);
	inOrder(node*2+1);
}

function backOrder(node){
	if(node>15)return;
	backOrder(node*2);
	backOrder(node*2+1);
	show(node);
}
function preHander(){
	timer=0;
	preOrder(1);
}
function ii(){
	timer=0;
	inOrder(1);
}
function backHander(){
	timer=0;
	backOrder(1);
}
(function(){
	var pre=document.getElementById("pre");
	var In=document.getElementById("In");
	var back=document.getElementById("back");
	pre.onclick=preHander;
	
	back.onclick=backHander;
	In.onclick=ii;
})()
