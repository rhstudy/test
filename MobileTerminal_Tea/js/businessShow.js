window.onload = function() {
	var dayOffset = 0;

//	$("#content div").on("tap", ".item-icon p", function() {
//		if($(this).html() == "-") {
//			$(this).html("+").parents(".item").find(".grayDialog").slideUp();
//		} else {
//			$(this).html("-").parents(".item").find(".grayDialog").slideDown();
//		}
//	});
	// $("#content div").on("tap", ".item-icon p", function() {
	// 	if($(this).html() == "-") {
	// 		$(this).html("+").parents(".item").find(".grayDialog").slideUp();
	// 	} else {
	// 		$(this).html("-").parents(".item").find(".grayDialog").slideDown();
	// 	}
	// });

	function getNewDate(dayOffset) {
		var today = new Date();
		var newDate = new Date(today.getTime() + (dayOffset * 24 * 60 * 60 * 1000));
		return newDate;
	}

	function getDate(dayOffset) {
		var date = getNewDate(dayOffset);
		var dateNum = date.getDate();
		if(dateNum < 10) {
			return "0" + dateNum;
		}
		return dateNum;
	}

	function getMonth(dayOffset) {
		var monthEn = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
		var date = getNewDate(dayOffset);
		var monthNum = date.getMonth();
		return monthEn[monthNum];
	}

	var itemStr = '';
	itemStr = '<div class="item">' +
		'<div class="item-date">' +
		'<p class="date">' + getDate(dayOffset) + '</p>' +
		'<p class="month">' + getMonth(dayOffset) + '</p>' +
		'</div>' +
		'<div class="item-content">' +
		'<span>茶园名称：</span>' +
		'&nbsp;' +
		'<span id="teaGardenName">' +
		'祁红茶园' +
		'</span>' +
		'<br/>' +
		'<span>茶园产地：</span>' +
		'&nbsp;' +
		'<span id="teaPlantation">' +
		'安徽祁门' +
		'</span>' +
		'<br/>' +
		'<span>茶园设备：</span>' +
		'&nbsp;' +
		'<span id="teaPlant">' +
		'纯手工制造' +
		'</span>' +
		'<div class="grayDialog">' +
		'<p>祁红茶园<br /><br />产自安徽祁门<br /><br />纯手工制造</p>' +
		'</div>' +
		'</div>' +
		'<div class="item-icon">' +
		'<p>-</p>' +
		'</div>' +
		'</div>';

	// $("#aa").on("tap", function() {
	// 	$(".item").last().after(itemStr);
	// });
	
	var content = document.getElementById("content");
	var scrollTop = document.getElementById("scrollTop");
	scrollTop.addEventListener("tap",function(){
		content.scrollTop = 0;
	})
}