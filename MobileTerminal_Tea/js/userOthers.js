/* 信息框弹出提示 */
function contact() {
	$("#contact").on("tap", function() {
		alert("Your message!");
	});
}
contact();

/* 返回顶部按钮 */
function scrollTop() {
	var content = document.getElementById("content");
	$("#scrollTop").on("tap", function() {
		content.scrollTop = 0;
	});
}
scrollTop();

/* 图片为正方形 */
function setHeight() {
	$(".imgLeft").height($(".imgLeft").width());
}
setHeight();

/* 点击大图功能 */
function showImg() {
	/* 点击a标签，打开大图 */
	$("#p1Set dl dt div a").on("tap", function() {
		var $that = $(this).parent().parents("dl").find("img");
		/* 获取a标签所在的dt的index值 */
		var indexImg = $(this).parents("dt").index();
		var imgLength = $(this).parent().parents("dl").find("img").size();
		/* 点击a标签生成蒙版，再次点击蒙版消失 */
		$("#large").css("display", "block");
		$("#large").on("tap", function() {
			$("#large").css("display", "none");
		});
		/* 获取a标签所在的dt内的img标签的src属性，并将其放在新写的img标签中 */
		var imgStr = "<img src = '" + $(this).parents("dt").find(".imgLeft").attr("src") + "' />";
		//console.log(imgStr);
		/* 将新写的img标签加载在蒙版上 */
		$("#large").show().append($(imgStr));
		/* 向左滑动 */
		$("#large").on("swipeLeft", "img", function() {
			indexImg++;
			if(indexImg > imgLength - 1) {
				indexImg = imgLength - 1;
			}
			$(this).attr("src", $($that.parent().find("img").get(indexImg)).attr("src"));
		});
		/* 向右滑动 */
		$("#large").on("swipeRight", "img", function() {
			indexImg--;
			if(indexImg < 0) {
				indexImg = 0;
			}
			$(this).attr("src", $($that.parent().find("img").get(indexImg)).attr("src"));
		})
		$("#large").on("tap", function() {
			$("#large").hide().empty();
		});
	});
}
showImg();

/* 选项卡功能 */
function showTab() {
	$("#tabsHeader li").on("tap", function() {
		var index = $(this).index();
		$(this).find("a").addClass("tabActive").parent().siblings().find("a").removeClass("tabActive");
		$(".contenTabs").eq(index).css("display", "block").siblings(".contenTabs").css("display", "none");
	});
}
showTab();

$("#returnSubmit").on("tap", function() {
	window.location.href = "../index.html";

});