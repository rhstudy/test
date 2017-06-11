window.onload = function() {
	var oDiv = document.getElementById('all');
	var oLi = oDiv.getElementsByTagName('li');
	var oP = oDiv.getElementsByTagName('p')[0];
	var btn1 = document.getElementById('start');
	var btn2 = document.getElementById('stop');

	function num() {
		for (var i = 0; i < oLi.length; i++) {
			oLi[i].innerHTML = Math.ceil(Math.random() * 32);
		}
		oP.innerHTML = Math.ceil(Math.random() * 16);
	}

	function start() {
		timer = setInterval(num, 200);
	}

	btn1.onclick = function() {
		start();
		setTimeout(function qx() {
			clearInterval(timer);
			btn1.innerHTML = "时间到";
			btn1.disabled = true;
		}, 2000);
	}
	btn2.onclick = function() {
		clearInterval(timer);
		btn1.innerHTML = "开始";
		btn1.disabled = false;
	}
}
