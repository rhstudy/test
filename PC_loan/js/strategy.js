$(function() {

	//  大于一屏时返回滚动圆显示，否则消失，点击时会回到顶部
	$(window).scroll(function() {
		var doc = $(document).scrollTop();
		var back = $("#scrollTop");
		if (doc > $(window).height()) {
			back.slideDown();
		} else {
			back.slideUp();
		}
	});
	$("#scrollTop").on("click", function() {
		$("body , html").animate({
			"scrollTop": 0
		}, "slow");
	});

	//	点击搜索按钮，弹出要搜索内容
	function searchName() {
		$("#searchBtn").on("click", function() {
			var searchContent;
			searchContent = $("#search input").val();
			alert("您要搜索的是：" + searchContent);
		});
	}
	searchName();

	//  点击中部导航条中的内容，背景及字体颜色变化
	function navSet() {
		$("#nav ul li a").on("mouseenter", function() {
			$(this).addClass("activeA");
			$("#nav ul li a").on("mouseout", function() {
				$(this).removeClass("activeA");
			});
		});
	}
	navSet();

	//  轮播
	function barSet() {
		$("#bar ol li").on("click", function() {
			var index = $(this).index();
			$("#bar ul li").eq(index).slideDown().siblings().slideUp();
			$(this).css("background-color", "#191919").siblings().css("background-color", "#262626");
		});
	}
	barSet();
});