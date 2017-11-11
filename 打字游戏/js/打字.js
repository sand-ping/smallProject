var errorCount=0;
var correctCount=0;
function showword() {
	var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	//生成0到1的数，包括0，不包括1
	var n = Math.random();
	var m = n * 26;
	var word = char.charAt(parseInt(m));
	document.getElementsByClassName('word')[0].innerText = word;
}
showword();

function check(event) {
	//event参数是当触发事件时默认传入的参数他里面包含一些事件的基本信息
	//调用他里面的key获取你按的键的字母

	//	console.log(event);
	var key = event.key.toUpperCase();
	var word = document.getElementsByClassName('word')[0].innerText;
	//用变量来储存标签的元素
	var wordBox=document.getElementsByClassName('word')[0];
	if(key == word) {
//    document.getElementsByClassName('word')[0].className='word';
//      document.getElementsByClassName('word')[0].className='word animated fadeIn';
		showword();
    document.getElementsByClassName('word')[0].className='word animated fadeIn';
	setTimeout(clearAnimate,2000);
	correctCount++;
	document.getElementsByClassName('correct')[0].innerText='正确次数:'+correctCount;
		
	} else {
     wordBox.className='word animated shake red';
     setTimeout(clearAnimate,2000);
     errorCount++;
     document.getElementsByClassName('error')[0].innerText='错误次数:'+errorCount;
	}
	var o=correctCount/(errorCount+correctCount)*100;
	o=parseInt(o*100);
	o=o/100;
	//或者toFixed();参数是写保留几位数
     document.getElementsByClassName('rate')[0].innerText='正确率:'+o+'%';
	function clearAnimate(){
		document.getElementsByClassName('word')[0].className='word';
	}


}