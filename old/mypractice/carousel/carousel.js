;(function($){

	var Carousel = function(poster){
		var self = this;
		//保存单个旋转木马对象
		this.poster = poster;
		this.posterItemMain = poster.find('.poster-list');
		this.nextBtn = poster.find(".poster-next-btn");
		this.prevBtn = poster.find(".poster-prev-btn");	
		this.posterItems = poster.find('.poster-item');
		if(this.posterItems.size()%2==0){
			this.posterItemMain.append(this.posterItems.eq(0).clone());
			this.posterItems = this.posterItemMain.children();
		}
		this.posterFirstItem = this.posterItems.first();
		this.posterLastItem = this.posterItems.last();
		this.rotateFlag = true;
		//默认配置参数
		this.setting = {
			"width":1000,    //幻灯片宽度
			"height":270,    //幻灯片高度
			"posterWidth":640,    //幻灯片第一帧宽度
			"posterHeight":270,   //幻灯片第一帧高度
			"scale":0.9,		  //记录显示比例关系
			"speed":500,
			"autoPlay":true,
			"delay":2500,
			"verticalAlign":"middle"  //top,middle,bottom
		}
		//用extend方法修改更新配置参数
		$.extend(this.setting,this.getSetting());

		//设置配置参数值
		this.setSettingValue();

		this.setPosterPos();

		//左旋按钮
		this.nextBtn.click(function(){
			if(self.rotateFlag){
				self.rotateFlag = false;
				self.carouselRotate("left");
			}
			
		});

		//右旋按钮
		this.prevBtn.click(function(){
			if(self.rotateFlag){
				self.rotateFlag = false;
				self.carouselRotate("right");
			}
			
		});

		//是否自动播放
		if(this.setting.autoPlay){
			this.autoPlay();
			this.poster.hover(function(){
				window.clearInterval(self.timer);
			},function(){
				self.autoPlay();
			});
		};

	};

	Carousel.prototype={

		//自动播放
		autoPlay:function(){
			var self = this;
			this.timer = window.setInterval(function(){
				self.nextBtn.click();
			},this.setting.delay);
		},

		//旋转动画
		carouselRotate:function(dir){
			var _this_ = this;
			var zIndexArr = [];

			//向左
			if(dir === "left"){
				this.posterItems.each(function(){
					var self = $(this),
						prev = self.prev().get(0)?self.prev():_this_.posterLastItem,
						width = prev.width(),
						height = prev.height(),
						zIndex = prev.css("zIndex"),
						opacity = prev.css("opacity"),
						left = prev.css("left"),
						top = prev.css("top");
					zIndexArr.push(zIndex);

						self.animate({
							width:width,
							height:height,
							//zIndex:zIndex,
							opacity:opacity,
							left:left,
							top:top
						},
						_this_.setting.speed,
						function(){
							_this_.rotateFlag = true;
						});
				});
				this.posterItems.each(function(i){
					$(this).css("zIndex",zIndexArr[i]);
				});
			}

			//向右
			else if(dir === "right"){
				this.posterItems.each(function(){
					var self = $(this),
						next = self.next().get(0)?self.next():_this_.posterFirstItem,
						width = next.width(),
						height = next.height(),
						zIndex = next.css("zIndex"),
						opacity = next.css("opacity"),
						left = next.css("left"),
						top = next.css("top");
					zIndexArr.push(zIndex);
						
						self.animate({
							width:width,
							height:height,
							//zIndex:zIndex,
							opacity:opacity,
							left:left,
							top:top
						},
						_this_.setting.speed,
						function(){
							_this_.rotateFlag = true;
						});
				});
				this.posterItems.each(function(i){
					$(this).css("zIndex",zIndexArr[i]);
				});				
			}
		},

		//设置剩余帧的位置关系
		setPosterPos:function(){
			var self = this;
			var sliceItems = this.posterItems.slice(1),
				sliceSize = sliceItems.size()/2,
				rightSlice = sliceItems.slice(0,sliceSize),
				level = Math.floor(this.posterItems.size()/2),
				leftSlice = sliceItems.slice(sliceSize);

			//设置右边帧的位置关系
			var rw = this.setting.posterWidth,
				rh = this.setting.posterHeight,
				gap = (this.setting.width - this.setting.posterWidth)/2/level;
			
			var firstLeft = ((this.setting.width - this.setting.posterWidth)/2);
			var fixOffsetLeft = firstLeft + rw;

			rightSlice.each(function(i){
				level--;
				rw = rw*self.setting.scale;
				rh = rh*self.setting.scale;

				var j = i;
				$(this).css({
					zIndex: level,
					width: rw,
					height: rh,
					opacity: 1/(++j),
					left: fixOffsetLeft+(++i)*gap-rw,
					top: self.setVertucalAlign(rh)

				});
			})

			//设置左边的位置关系
			var lw = rightSlice.last().width(),
				lh = rightSlice.last().height(),
				oloop = Math.floor(this.posterItems.size()/2);

			leftSlice.each(function(i){
				
				$(this).css({
					zIndex: i,
					width: lw,
					height: lh,
					opacity: 1/oloop,
					left: i*gap,
					top: self.setVertucalAlign(lh)				
				});
			lw = lw/self.setting.scale;
			lh = lh/self.setting.scale;
			oloop--;
			});
		},

		//设置垂直对齐关系
		setVertucalAlign:function(height){
			var verticalType = this.setting.verticalAlign,
				top = 0;
			if(verticalType === "middle"){
				top = (this.setting.height-height)/2;
			}
			else if(verticalType === "top"){
				top = 0;
			}
			else if(verticalType === "bottom"){
				top = this.setting.height-height
			}
			else{
				top = (this.setting.height-height)/2;
			}
			return top;
		},

		//设置配置参数值去控制基本宽度高度
		setSettingValue:function(){
			this.poster.css({
				width:this.setting.width,
				height:this.setting.height
			});
			this.posterItemMain.css({
				width:this.setting.width,
				height:this.setting.height				
			});

			//计算切换按钮的宽度高度
			var w = (this.setting.width - this.setting.posterWidth)/2;
			this.nextBtn.css({
				width:w,
				height:this.setting.height,
				zIndex:Math.ceil(this.posterItems.size()/2)
			});
			this.prevBtn.css({
				width:w,
				height:this.setting.height,
				zIndex:Math.ceil(this.posterItems.size()/2)
			});
			this.posterFirstItem.css({
				width:this.setting.posterWidth,
				height:this.setting.posterHeight,
				left:w,
				zIndex:Math.floor(this.posterItems.size()/2)
			});


		},

		//获取人工配置参数
		getSetting : function(){
			var setting = this.poster.attr('data-setting');
			if(setting&&setting!=''){
				return $.parseJSON(setting);
			}		
			else return {};
		}

	};
	Carousel.init = function(posters){
		var _this_ = this;
		posters.each(function(){
			new _this_($(this));
		});
	};
	window['Carousel']=Carousel;

})(jQuery);


$(function(){
	Carousel.init($('.js_poster'))
});