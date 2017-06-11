/* 可拖拽弹性盒子 */
// function boxSet() {
// 	var mainScroll = new iScroll('content',{});
// }
// boxSet();

function contact(){
	$("#contact").on("tap",function(){
		alert("Your message!");
	});
}
contact();

/* 手风琴样式的使用 */
function showHide() {
	$(".p4SetLi a").on("tap", function() {
		if ($(this).siblings("ol").css("display") == "none") {
			$(this).siblings("ol").css("display", "block");
		} else {
			$(this).siblings("ol").css("display", "none");
		}
		$(this).parent().siblings().find("ol").css("display", "none");
	});
}
showHide();

/* 选项卡的使用 */
function showTab() {
	$("#p5SetTabsHeader li").on("tap", function() {
		var index = $(this).index();
		$(this).find("a").addClass("tabActive").parent().siblings().find("a").removeClass("tabActive");
		$(".contenTabs").eq(index).css("display", "block").siblings(".contenTabs").css("display", "none");
	});
}
showTab();

/* 返回顶部按钮 */
function scrollTop() {
	var content = document.getElementById("content");
	$("#scrollTop").on("tap", function() {
		content.scrollTop = 0;
	});
}
scrollTop();

function setHeight() {
	$(".imgLeft").height($(".imgLeft").width());
}
setHeight();


/* Blog的日历添加 */

var dayOffset = 0;

$("#content div").on("tap", ".item-icon p", function() {
	if ($(this).html() == "-") {
		$(this).html("+").parents(".item").find(".grayDialog").slideUp();
	} else {
		$(this).html("-").parents(".item").find(".grayDialog").slideDown();
	}
});

function getNewDate(dayOffset) {
	var today = new Date();
	var newDate = new Date(today.getTime() + (dayOffset * 24 * 60 * 60 * 1000));
	return newDate;
}

function getDate(dayOffset) {
	var date = getNewDate(dayOffset);
	var dateNum = date.getDate();
	if (dateNum < 10) {
		return "0" + dateNum;
	}
	return dateNum;
}

function getMonth(dayOffset) {
	var monthEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var date = getNewDate(dayOffset);
	var monthNum = date.getMonth();
	return monthEn[monthNum];
}

function addItem(dayOffset) {
	var itemStr = '';
	itemStr = '<div class="item">' +
		'<div class="item-date">' +
		'<p class="date">' + getDate(dayOffset) + '</p>' +
		'<p class="month">' + getMonth(dayOffset) + '</p>' +
		'</div>' +
		'<div class="item-content">' +
		'<span>Posted blog category</span>' +
		'<br/>' +
		'<span>25 Comments</span>' +
		'<br/>' +
		'<span>+read more</span>' +
		'<div class="grayDialog">' +
		'<p>Lorem ipsum dolor sit amet,consectetur adipisicing elit</p>' +
		'</div>' +
		'</div>' +
		'<div class="item-icon">' +
		'<p>-</p>' +
		'</div>' +
		'</div>';
	if ($(".item").size()) {
		$(".item").last().after(itemStr);
	} else {
		$("#p1Set").after(itemStr);
	}
}

$("#addItem").on("tap", function() {
	addItem(dayOffset--);
	$(".item").last().hide().slideDown("slow");
});

/* portfolio的点击大图功能 */
function showImg() {
	/* 点击a标签，打开大图 */
	$("#p1Set dl dt div a").on("tap", function() {
		var $that = $(this).parent().parents("dl").find("img");
		/* 获取a标签所在的dt的index值 */
		var indexImg = $(this).parents("dt").index();
		//console.log(indexImg);
		var imgLength = $(this).parent().parents("dl").find("img").size();
		//console.log(imgLength);
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
			if (indexImg > imgLength - 1) {
				indexImg = imgLength - 1;
			}
			$(this).attr("src", $($that.parent().find("img").get(indexImg)).attr("src"));
		});
		/* 向右滑动 */
		$("#large").on("swipeRight", "img", function() {
			indexImg--;
			if (indexImg < 0) {
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

/* Photo */
function setPhotoHeight() {
	$(".containerPhoto tr td").height($(".containerPhoto tr td").width());
	$(".containerPhoto1 tr td").height($(".containerPhoto1 tr td").width());
	$(".containerPhoto2 tr td").height($(".containerPhoto2 tr td").width());
	$(".containerPhoto3 tr td").height($(".containerPhoto3 tr td").width());
}
setPhotoHeight();