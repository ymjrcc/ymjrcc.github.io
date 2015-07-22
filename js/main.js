requirejs.config({
	paths:{
		jquery:'jquery-1.8.0'
	}
});

requirejs(['jquery'],function($){

	//点击按钮返回顶部
	$('#backtop').on('click',move);

	//微信二维码出现后，再点击微信按钮，二维码消失
	$('#weixin1').on('click',hidewx);

	//鼠标离开微信按钮后恢复
	$('#weixin1').on('mouseleave',displaywx);

	//监听滚动
	$(window).on('scroll',function(){
		checkposition($(window).height());
	});

	//检测是否隐藏返回顶部按钮
	checkposition($(window).height());

	function move(){
		$('html,body').animate({
			scrollTop:0
		},800);
	}

	function hidewx(){
		$('#weixin2').addClass('hideweixin');
	}

	function displaywx(){
		$('#weixin2').removeClass('hideweixin');
	}

	function checkposition(pos){
		if($(window).scrollTop()>pos){
			$('#backtop').fadeIn('slow');
		}
		else {
			$('#backtop').fadeOut('slow');
		}
	}

});