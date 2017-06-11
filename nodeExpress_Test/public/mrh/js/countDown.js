window.onload = function() {
	var show = document.getElementById('show');
	var timer = null;

	function getTime() {
		var time1 = new Date();
		var time2 = new Date(2017, 0, 1);
		var time = time2 - time1;
		//		var days = Math.floor(time / 1000 / 60 / 60 / 24),
		//			hours = Math.floor((time - days * 24 * 60 * 60 * 1000) / 1000 / 60 / 60),
		//			minutes = Math.floor((time - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000) / 1000 / 60),
		//			seconds = Math.floor((time - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000 - minutes * 60 * 1000) / 1000);

		var days = Math.floor(time / 1000 / 60 / 60 / 24),
			hours = Math.floor(time / 1000 / 60 / 60 % 24),
			minutes = Math.floor(time / 1000 / 60 % 60),
			seconds = Math.floor(time / 1000 % 60);

		show.innerHTML = days + " 天 " + hours + " 小时 " + minutes + " 分 " + seconds + " 秒 ";
	}
	timer = setInterval(getTime, 1000);
}
