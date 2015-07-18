var arr = ["images/banner1.jpg","images/banner2.jpg","images/banner3.jpg","images/banner4.jpg"];

var cnt = 0;

function autoplay(){
	if(arr.length == cnt) cnt = 0;
	document.getElementById('banner1').src = arr[cnt];

	cnt++;
}

var timer = setInterval(autoplay,2000);

function clearTimer(){
	clearInterval(timer);
}

//鼠标悬停时指定播放的图片
function showBannerById(num){
	clearTimer();
	var index = parseInt(num);
	document.getElementById('banner1').src = arr[index-1];
	cnt = index;
}

//鼠标离开时恢复动画
function btnMouseOut(){
	timer = setInterval(autoplay,2000);
}
