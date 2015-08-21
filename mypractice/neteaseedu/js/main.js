//ajax部分

window.onload=function(){func_hot();func_cls10();}

function func_hot(){
    var xml = new XMLHttpRequest();
    var url = 'http://study.163.com/webDev/hotcouresByCategory.htm';
    var method = 'get';
    xml.open(method,url);
    xml.onreadystatechange = function(){
        if(xml.readyState == 4 && xml.status == 200){
            var h = xml.responseText;
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
            var h = xml.responseText;
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
var flag1 = true; 

var banner1 = document.getElementById('banner1');
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
    flag1 = false;
    if(cnt == 3)cnt = 0;
}

if(flag1)autoplay();

var timer = setInterval(autoplay,5000);

function clearTimer(){
    clearInterval(timer);
    removeClass(banner1,'fade');
}

function bannerMouseOut(){
    timer = setInterval(autoplay,5000);
    addClass(banner1,'fade');
}

//几个工具函数

function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

function css(obj, attr, value) {
    switch (arguments.length) {
        case 2:
            if (typeof arguments[1] == "object") {    //批量设置属性
                for (var i in attr) obj.style[i] = attr[i]
            }
            else {    // 读取属性值
                return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
            }
            break;
        case 3:
            //设置属性
            obj.style[attr] = value;
            break;
        default:
            return "";
    }
}
