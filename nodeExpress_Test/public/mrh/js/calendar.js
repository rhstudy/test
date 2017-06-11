window.onload = function() {
	var year = document.getElementById('year');
	var month = document.getElementById('month');
	var days = document.getElementById('days');
	var week = document.getElementById('week');
	var times = document.getElementById('times');
	var timer = null;

	function show() {
		var dat = new Date();
		var y = dat.getFullYear(),
			m = dat.getMonth() + 1,
			d = dat.getDate(),
			w = dat.getDay(),
			hours = dat.getHours(),
			minutes = dat.getMinutes(),
			seconds = dat.getSeconds();
		m < 10 ? m = "0" + m : m = m;
		d < 10 ? d = "0" + d : d = d;
		switch (w) {
			case 0:
				w = "星期日";
				break;
			case 1:
				w = "星期一";
				break;
			case 2:
				w = "星期二";
				break;
			case 3:
				w = "星期三";
				break;
			case 4:
				w = "星期四";
				break;
			case 5:
				w = "星期五";
				break;
			case 6:
				w = "星期六";
				break;
		}
		year.innerHTML = y + "年";
		month.innerHTML = m + "月";
		days.innerHTML = d + "日";
		week.innerHTML = w;
		times.innerHTML = hours + "时 - " + minutes + "分 - " + seconds + "秒";
	}

	timer = setInterval(show, 1000);
}
