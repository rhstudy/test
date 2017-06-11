$(function(){
	var nav_li = $("#header-banner-ol li");
	var img_li = $("#header-banner-ul li");
	var currentIndex = 0;
	var timer;


	nav_li.on("click",function(){
		var index = $(this).index();
		img_li.eq(index).fadeIn().siblings().fadeOut();
		nav_li.eq(index).find("a").addClass("hover").parent().siblings().find("a").removeClass("hover");
		currentIndex = index;
	});

	function auto() {
		currentIndex++;
		if (currentIndex == img_li.size()) {
			currentIndex = 0;
		}
		img_li.eq(currentIndex).fadeIn().siblings().fadeOut();
		nav_li.eq(currentIndex).find("a").addClass("hover").parent().siblings().find("a").removeClass("hover");
	}

	$(".public-header-banner").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(auto, 1500);
	});

	$('.public-header-banner').hover().trigger('mouseleave');

	$(window).scroll( function() {
		if ($(window).scrollTop() > $(window).height()) {
			$("#nav").slideDown("slow");
			$("#bottom_top").slideDown("slow");
		} else if($(window).scrollTop() < 300){
			$("#nav").slideUp("slow");
			$("#bottom_top").slideUp("slow");
		}
	} );

	$("#bottom_top").click(function(e) {
		e.preventDefault(); //组织默认事件
		$(document.documentElement).animate({
			"scrollTop": "0px"
		}, 1000); //文档页面距离上面为0，用1000毫秒的时间滚到上面，不会显得太生硬
		$(document.body).animate({
			"scrollTop": "0px"
		}, 1000); //body距离上面为0
	});
		



});