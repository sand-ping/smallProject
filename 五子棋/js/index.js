var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext('2d');
var logo = new Image();
var me=true;
var over=false;//是否结束
//棋盘上落子情况
var chessBoard=[];
for(var i=0;i<15;i++){
	chessBoard[i]=[];
	for(var j=0;j<15;j++){
		chessBoard[i][j]=0;
	}
}
//定义赢的可能性
var wins=[];
for(var i=0;i<15;i++){
	wins[i]=[];
	for(var j=0;j<15;j++){
		wins[i][j]=[];
	}
}
var count=0;
//横向可能性
for(var i=0;i<15;i++){
	for(var j=0;j<11;j++){
		for(var k=0;k<5;k++){
			wins[i][j+k][count]=true;
		}
		count++;
	}
}
for(var i=0;i<11;i++){
	for(var j=0;j<15;j++){
		for(var k=0;k<5;k++){
			wins[i+k][j][count]=true;
		}
		count++;
	}
}
for(var i=0;i<11;i++){
	for(var j=0;j<11;j++){
		for(var k=0;k<5;k++){
			wins[i+k][j+k][count]=true;
		}
		count++;
	}
}
for(var i=0;i<11;i++){
	for(var j=4;j<15;j++){
		for(var k=0;k<5;k++){
			wins[i+k][j-k][count]=true;
		}
		count++;
	}
}
//玩家和电脑赢的数组
var myWin=[];
var computerWin=[];
for(var i=0;i<count;i++){
	myWin[i]=0;
	computerWin[i]=0;
}

console.log(count);
logo.src = "imgs/chess1.png";
logo.onload = function() {
	context.drawImage(logo, 15, 100, 420, 250);
	drawChessBoard();
}
var drawChessBoard = function() {
	for(var i = 0; i < 15; i++) {
		context.moveTo(15 + i * 30, 15);
		context.lineTo(15 + i * 30, 435);
		context.strokeStyle = "#BFBFBF";
		context.stroke();
		context.moveTo(15, 15 + i * 30);
		context.lineTo(435, 15 + i * 30);
		context.stroke();
	}
}
var stepChess = function(x, y, me) {
	var gradient = context.createRadialGradient(15 + x * 30, 15 + y * 30, 0, 15 + x * 30, 15 + y * 30, 13);
	if(me) {
		gradient.addColorStop(0, "#636766");
		gradient.addColorStop(1, "#0A0A0A");
	} else {
		gradient.addColorStop(0, "#F9F9F9");
		gradient.addColorStop(1, "#D1D1D1");
	}
	context.fillStyle = gradient;
	context.beginPath();
	context.arc(15 + x * 30, 15 + y * 30, 13, 0, Math.PI * 2);
	context.closePath();
	context.fill();
}
myCanvas.onclick=function(e){
	if(over){
		return;
	}
	if(!me){
		return;
	}
	var x=e.offsetX;
	var y=e.offsetY;
	var i=Math.floor(x/30);
	var j=Math.floor(y/30);
	if(chessBoard[i][j]==0){
		stepChess(i,j,me);
		chessBoard[i][j]=1;
	    for(var k=0;k<count;k++){
	    	if(wins[i][j][k]){
	    		myWin[k]++;
	    		computerWin[k]=6;
	    		if(myWin[k]==5){
	    			console.log(myWin[k]);
	    			window.alert("您赢了");
	    			over=true;
	    		}
	    	}
	    }
	    if(!over){
	    	me=!me;
	    	computerAI();
	    }
	}
}
var computerAI=function(){
	var myScore=[];
	var computerScore=[];
	//最高分数
	var max=0;
	//最高分数点坐标
	var u=0,v=0;
	for(var i=0;i<15;i++){
		myScore[i]=[];
		computerScore[i]=[];
		for(var j=0;j<15;j++){
			myScore[i][j]=0;
			computerScore[i][j]=0;
		}
	}
	for(var i=0;i<15;i++){
		for(var j=0;j<15;j++){
			if(chessBoard[i][j]==0){
				for(var k=0;k<count;k++){
					if(wins[i][j][k]){
						if(myWin[k]==1){
							myScore[i][j]+=200;
						}else if(myWin[k]==2){
							myScore[i][j]+=400;
						}else if(myWin[k]==3){
							myScore[i][j]+=2000;
						}else if(myWin[k]==4){
							myScore[i][j]+=10000;
						}
						if(computerWin[k]==1){
							computerScore[i][j]+=220;
						}else if(computerWin[k]==2){
							computerScore[i][j]+=420;
						}else if(computerWin[k]==3){
							computerScore[i][j]+=2100;
						}else if(computerWin[k]==4){
							computerScore[i][j]+=20000;
						}
					}
					
				}
				if(myScore[i][j]>max){
					max=myScore[i][j];
					u=i;
					v=j;
				}else if(myScore[i][j]==max){
					if(computerScore[i][j]>myScore[u][v]){
						u=i;
						v=j;
					}
				}
				if(computerScore[i][j]>max){
					max=computerScore[i][j];
					u=i;
					v=j;
				}else if(computerScore[i][j]==max){
					if(computerScore[i][j]<myScore[u][v]){
						u=i;
						v=j;
					}
				}
			}
		}
	}
	stepChess(u,v,false);
	chessBoard[u][v]=2;
	for(var k=0;k<count;k++){
	    	if(wins[u][v][k]){
	    		computerWin[k]++;
	    		myWin[k]=6;
	    		if(computerWin[k]==5){
	    			window.alert("计算机赢了");
	    			over=true;
	    		}
	    	}
	    }
	    if(!over){
	    	me=!me;
	    }
}
