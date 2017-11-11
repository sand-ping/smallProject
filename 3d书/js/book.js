function turn(n){
	var div=document.getElementsByTagName('div')[n-1];
	//getAttribute获取当前属性
	var isTurn=div.getAttribute('data-isTurn');
	if(isTurn==0){
		if(n==1){
			div.style.transform='rotateY(-'+(190-10*n)+'deg)';
		    div.setAttribute('data-isTurn',1);
		}else{
			var prev=document.getElementsByTagName('div')[n-2].getAttribute('data-isTurn');
			if(prev==1){
				div.style.transform='rotateY(-'+(190-10*n)+'deg)';
				div.setAttribute('data-isTurn',1);
			}
		}
		
	}
	else if(isTurn==1){
		if(n==5)
		{
			div.style.transform='rotateY(-5deg)';
		    div.setAttribute('data-isTurn',0)
		}else{
			var after=document.getElementsByTagName('div')[n].getAttribute('data-isTurn');
			if(after==0){
				div.style.transform='rotateY(-'+(10*(5-n))+'deg)';
				div.setAttribute('data-isTurn',0);
			}
		}
		
	}
	
}































