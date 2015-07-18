var arr = ["images/banner1.jpg","images/banner2.jpg","images/banner3.jpg","images/banner4.jpg"];

var cnt = 0;

function autoplay(){
	if(arr.length == cnt) cnt = 0;
	if(cnt==1||cnt==2||cnt==3){
		$('#span'+(cnt+1)).addClass('red');
		$('#span'+cnt).removeClass('red');		
	}
	else if(cnt==0){
		$('#span1').addClass('red');
		$('#span4').removeClass('red');
	}
	document.getElementById('banner1').src = arr[cnt];

	cnt++;
}

var timer = setInterval(autoplay,2000);

function clearTimer(){
	clearInterval(timer);
}

//鼠标悬停时指定播放的图片
function showBannerById(num){
	
	$('#span1').removeClass('red');
	$('#span2').removeClass('red');
	$('#span3').removeClass('red');
	$('#span4').removeClass('red');

	clearTimer();
	var index = parseInt(num);
	document.getElementById('banner1').src = arr[index-1];
	cnt = index;
}

//鼠标离开时恢复动画
function btnMouseOut(){
	timer = setInterval(autoplay,2000);
}
