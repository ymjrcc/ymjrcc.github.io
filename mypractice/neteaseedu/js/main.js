//课程列表ajax
window.onload=function(){func_hot();}
window.onload=function(){func_cls10();}

function func_hot(){
    var xml = new XMLHttpRequest();
    var url = 'http://study.163.com/webDev/hotcouresByCategory.htm';
    var method = 'get';
    xml.open(method,url);
    xml.onreadystatechange = function(){
        if(xml.readyState == 4 && xml.status == 200){
            var h = xml.responseTest;
            var i = eval(h);
            var img = document.getElementsByClassName('hot-img');
            var tit = document.getElementsByClassName('hot-title');
            var peo = document.getElementsByClassName('hot-people');
            for(var j = 0;j<10;j++){
                img[j].src = i[j]['smallPhotoUrl'];
                tit[j].innerHTML = i[j]['name'];
                peo[j].innerHTML = i[j]['learnnerCount'];
            }
        }
    }
    xml.send();
}

function func_cls10(){
    var xml = new XMLHttpRequest();
    var url = 'http://study.163.com/webDev/couresByCategory.htm?pageNo=1&psize=20&type=10';
    var method = 'get';
    xml.open(method,url);
    xml.onreadystatechange = function(){
        if(xml.readyState == 4 && xml.status == 200){
            var h = xml.responseTest;
            var i = JSON.parse(h);
            var img = document.getElementsByClassName('cls-img');
            var tit = document.getElementsByClassName('cls-title');
            var tea = document.getElementsByClassName('cls-teacher');
            var stu = document.getElementsByClassName('cls-students');
            var pri = document.getElementsByClassName('cls-price');
            for(var j = 0;j<i.list.length;j++){
                img[j].src = i.list[j].middlePhotoUrl;
                tit[j].innerHTML = i.list[j].description;
                tea[j].innerHTML = i.list[j].provider;
                stu[j].innerHTML = i.list[j].learnerCount;
                pri[j].innerHTML = i.list[j].price;
            }
        }
    }
    xml.send();
}





// 轮播图

var bannerimg = ["img/banner1.jpg", "img/banner2.jpg", "img/banner3.jpg"];
var aarr = ["http://open.163.com/", "http://study.163.com/", "http://www.icourse163.org/"];
var cnt = 0; 

var span1 = document.getElementById('span1').style.backgroundColor;
var span2 = document.getElementById('span2').style.backgroundColor;
var span3 = document.getElementById('span3').style.backgroundColor;

function autoplay(){
    document.getElementById('banner1').src = bannerimg[cnt];
    document.getElementById('a1').href = aarr[cnt];
    if(cnt==0){
        span1 = '#333';
        span2 = '#fff';
        span3 = '#fff';
    }
    else if(cnt==1){
        span1 = '#fff';
        span2 = '#333';
        span3 = '#fff';
    }
    else if(cnt==2){
        span1 = '#fff';
        span2 = '#fff';
        span3 = '#333';
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
