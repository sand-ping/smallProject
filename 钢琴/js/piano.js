//使用getElementsByTagName获取到的节点集合是动态的
//使用querySelectorAll获取到的集合是一个静态的集合
var audios=document.querySelectorAll('audio');
var divs=document.querySelectorAll('div');
//console.log(divs);
function play(n){
	var audio=audios[n-1];
	//加载音频
	audio.load();
	//播放音频
	audio.play();
}
var prepush=['0','0','0','0','0','0','0','0','0'];
console.log(prepush);
window.onkeydown=function(event){
//	console.log(event.keyCode);
  var push=event.keyCode;
  if(event.keyCode>=49&&event.keyCode<=57)
  {
  	if(prepush[push-49]=='0')
  	{
  		var audio=audios[event.keyCode-49];
//	    var div=document.getElementsByTagName('div')[event.keyCode-49];
//	    div.style.className="xiaoguo";
	    audio.load;
	    audio.play();
//	    prepush[push-49]=1;
	    divs[event.keyCode-49].classList.add('active');
	    prepush[push-49]='1';
        console.log(prepush);
	    
  	}
  	
  	//取到当前对应的audio标签

  }
}
window.onkeyup=function(event){
	var push=event.keyCode;
	if(event.keyCode>=49&&event.keyCode<=57)
	{
		divs[event.keyCode-49].classList.remove('active');
		prepush[push-49]='0';
console.log(prepush);
		
	}
}
