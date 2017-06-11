window.onload = function() {
	var mon = document.getElementById('month');
	var btn = document.getElementById('show');
	var oDiv = document.getElementById('days');

	var mon1 = document.getElementById('month1');
	var btn1 = document.getElementById('show1');
	var oDiv1 = document.getElementById('look');

	btn.onclick = function() {

		switch (parseInt(mon.value)) {
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				oDiv.innerHTML = '31';
				break;
			case 4:
			case 6:
			case 9:
			case 11:
				oDiv.innerHTML = '30';
				break;
			case 2:
				oDiv.innerHTML = '28';
				break;
			default:
				oDiv.innerHTML = 'Please input true month!';

		}
	}


	btn1.onclick = function() {
		var monc = mon1.value;
		switch (true) {
			case monc == 3 || monc == 4 || monc == 5:
				oDiv1.innerHTML = '春天';
				break;
			case monc == 6 || monc == 7 || monc == 8:
				oDiv1.innerHTML = '夏天';
				break;
			case monc == 9 || monc == 10 || monc == 11:
				oDiv1.innerHTML = '秋天';
				break;
			case monc == 12 || monc == 1 || monc == 2:
				oDiv1.innerHTML = '冬天';
				break;
			default:
				oDiv1.innerHTML = 'Please input true month!';
		}
	}
}
