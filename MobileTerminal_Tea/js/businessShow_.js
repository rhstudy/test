window.onload = function() {
	var dayOffset = 0;

	$("#content div").on("tap", ".item-icon p", function() {
		if($(this).html() == "-") {
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
		'<span>茶叶名称：</span>' +
		'&nbsp;' +
		'<span id="teaGardenName">' +
		'红茶' +
		'</span>' +
		'<br/>' +
		'<span>茶叶产地：</span>' +
		'&nbsp;' +
		'<span id="teaPlantation">' +
		'安徽祁门' +
		'</span>' +
		'<div class="grayDialog">' +
		'<p>红茶<br /><br />祁门红茶，简称祁红，是中国传统功夫红茶的珍品，为历史名茶，出产于19世纪后期，是世界三大高香茶之一，有“茶中英豪”，“群芳最”，“王子茶”等美誉。祁门红茶依其品质高低分为1～7级，主要产于安徽省祁门县，与其毗邻的石台，东至，黟县及贵池等县也有少量生产，主要出口英国，荷兰，德国，日本，俄罗斯等几十个国家和地区，多年来一直是中国的国事礼茶。</p>' +
		'</div>' +
		'</div>' +
		'<div class="item-icon">' +
		'<p>-</p>' +
		'</div>' +
		'</div>';

	$("#bb").on("tap", function() {
		$(".item").last().after(itemStr);
	});
}