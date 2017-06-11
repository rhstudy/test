//标题划过特效
$("#car-search-1 a").on("mouseover", function() {

		$(this).addClass("car-search-on").siblings().removeClass("car-search-on");
	})
	//返回顶部
$(window).scroll(function() {

	if ($(window).scrollTop() > 600) {
		$("#car-yuan").show();
	} else {
		$("#car-yuan").hide();
	}
})
$("#car-yuan").click(function() {
	$(document.body).animate({
		scrollTop: 0
	}, 1000);
})
$(window).scroll(function() {

	if ($(window).scrollTop() > 600) {
		$("#car-top").show();
	} else {
		$("#car-top").hide();
	}
})

var timer = null;
var k = 0;
var len = $(".car-lb-ul li").length;
function auto() {
	k++;
	if (k > len - 1) {
		k = 0;
	}
	$(".car-lb-ul").animate({
		"marginLeft": -1423  + "px"
	}, 3500, function() {
		$(".car-lb-ul li").first().appendTo(".car-lb-ul");
		$(".car-lb-ul").css("marginLeft", "0px");
		var num = $(".car-lb-ul li").first().attr("title");	
		$(".car-lb-an").eq(num).addClass("car-lb-on").siblings().removeClass("car-lb-on");
	});
}
$(".car-lb-an").on("click", function() {
	var index = $(this).index();
	k = index;
	$(".car-lb-ul").animate({
		"marginLeft": -1423 * k + "px"
	}, 1500);
	$(this).addClass("car-lb-on").siblings().removeClass("car-lb-on");
})
function lb() {
	timer = setInterval(auto, 1500);
}
lb();