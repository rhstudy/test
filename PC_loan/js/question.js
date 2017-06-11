$(function() {
	//返回顶部
	var wHeight = $(window).height(); //获取当前页面的高度
	$(window).scroll(function() { //当滚动发生变化时发生触发事件
		if ($(window).scrollTop() > wHeight) { //滚动的距离 大于 页面的高度
			$("#bottom_top").show(); //返回顶部div显示
		} else {
			$("#bottom_top").hide();
		}
	})

	$("#bottom_top").click(function(e) {
		e.preventDefault(); //组织默认事件
		$(document.documentElement).animate({
			"scrollTop": "0px"
		}, 1000); //文档页面距离上面为0，用1000毫秒的时间滚到上面，不会显得太生硬
		$(document.body).animate({
			"scrollTop": "0px"
		}, 1000); //body距离上面为0
	})


})