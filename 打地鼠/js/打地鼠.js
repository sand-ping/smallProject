//jquery中直接通过$符号来调用选择器
var mouses=$('img')
function show(){
	var n=parseInt(Math.random()*16);
	var mouse=mouses.get(n);
	//再通过$选中当前的标签，调用其中的方法
//	$(mouse).addClass('show').removeClass('hide');
	$(mouse).addClass('show').removeClass('hide');
	function hide(){
		$(mouse).addClass('hide').removeClass('show');
	}
	setTimeout(hide,2000);
	
}
function play(){
	show();
	show();
	show();show();
}
setInterval(play,2000);
//当点击触发的
//$('img').click(function(){
//	
//})
$('img').on('click',function(){
	$(this).addClass('hide').removeClass('show');
	score++;
	$('#score').text('得分：' + score);
	$('audio').get(1).play();
});
$('body').on('mousedown',function(){
	//.css设置选中元素的css样式，和.style类似
	$('body').css('cursor','url(image/cursor-down.png),auto');
}).on('mouseup',function(){
	$('body').css('cursor','url(image/cursor.png),auto');
})
