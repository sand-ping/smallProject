//有一个特例，当body设置颜色后，html这个父标签会继承它
var body=document.getElementsByTagName('body')[0];
//通过设置body的style属性中的不同样式，来改变标签中的属性，和css没有区别
body.style.backgroundColor='#333333';
body.style.overflow='hidden';
//body.style.margin='100px';
//body.className设置元素类名
//之前我们定义方法的时候，方法都是小写的，这里大写代表一个构造函数
//构造函数中大小写都可以，不过建议用大写开头
var width=document.documentElement.clientWidth;
var height=document.documentElement.clientHeight;
function Flake(){
	//相当于在页面上创建了一个img标签，再用变量来存储它
	var flake=document.createElement('img');
	//向标签添加src属性
	flake.src='imgs/flake.png';
	//随机调整雪花大小
	flake.style.width=(30*Math.random()+20)+'px';
//	flake.style.transform='scale('+(Math.random()+0.2)+')';
    flake.style.position='absolute';
    flake.style.left='100px';
    flake.style.top='100px';
    //随机设置位置
    var left=width*Math.random();
    var top=height*Math.random();
    flake.style.left=left+'px';
    flake.style.top=top+'px';
	//向body中添加子元素，这个子元素是我们自己定义的
	document.body.appendChild(flake);
	console.dir(document);
	//这个方法用来改变一次雪花的位置
	function down(){
		left=left+4*Math.random();
		top=top+2*Math.random();
		if(left>width){
			left=-60;
		}
		     
		if(top>height)
		{
			top=-60;
		}
		     
		flake.style.left=left+'px';
        flake.style.top=top+'px';
	}
	setInterval(down,50);
}
for(var i=0;i<50;i++)
{
	new Flake();
}





























