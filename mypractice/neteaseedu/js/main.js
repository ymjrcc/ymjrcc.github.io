var bannerimg = ["img/banner1.jpg", "img/banner2.jpg", "img/banner3.jpg"];
var aarr = ["http://open.163.com/", "http://study.163.com/", "http://www.icourse163.org/"];
var cnt = 0; 

var span1 = document.getElementById('span1');
var span2 = document.getElementById('span2');
var span3 = document.getElementById('span3');

function autoplay(){
    document.getElementById('banner1').src = bannerimg[cnt];
    document.getElementById('a1').href = aarr[cnt];
    if(cnt==0){
        span1.style.backgroundColor = '#333';
        span2.style.backgroundColor = '#fff';
        span3.style.backgroundColor = '#fff';
    }
    else if(cnt==1){
        span1.style.backgroundColor = '#fff';
        span2.style.backgroundColor = '#333';
        span3.style.backgroundColor = '#fff';
    }
    else if(cnt==2){
        span1.style.backgroundColor = '#fff';
        span2.style.backgroundColor = '#fff';
        span3.style.backgroundColor = '#333';
    }

    cnt++;
    if(cnt == 3)cnt = 0;
}

var timer = setInterval(autoplay,5000);

function clearTimer(){
    clearInterval(timer);
}

function btnMouseOut(){
    timer = setInterval(autoplay,5000);
}
