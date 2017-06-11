window.onload = function() {
	var box = document.getElementById('all');
	var oDiv = document.getElementById('img');
	var img = oDiv.getElementsByTagName('li');
	var oOl = document.getElementById('number');
	var oLi = oOl.getElementsByTagName('li');
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var num = 0;
	var timer = null;

	function toLeft() {
		for (var i = 0; i < img.length; i++) {
			img[i].style.display = 'none';
			oLi[i].style.backgroundColor = '';
		}
		num--;
		if (num < 0) {
			num = img.length - 1;
		}
		img[num].style.display = 'block';
		oLi[num].style.backgroundColor = '#ADD8E6';
	}

	function toRight() {
		for (var i = 0; i < img.length; i++) {
			img[i].style.display = 'none';
			oLi[i].style.backgroundColor = '';
		}
		num++;
		if (num > img.length - 1) {
			num = 0;
		}
		img[num].style.display = 'block';
		oLi[num].style.backgroundColor = '#ADD8E6';
	}

	for (var i = 0; i < oLi.length; i++) {
		oLi[i].index = i;

		oLi[i].onmouseover = function() {
			for (var j = 0; j < img.length; j++) {
				img[j].style.display = 'none';
				oLi[j].style.backgroundColor = '';
			}
			img[this.index].style.display = 'block';
			oLi[this.index].style.backgroundColor = '#ADD8E6';
			num = this.index;
		}
	}

	left.onclick = function() {
		toLeft();
	}

	right.onclick = function() {
		toRight();
	}

	timer = setInterval(toRight, 1000);

	box.onmouseover = function() {
		clearInterval(timer);
	}
	box.onmouseout = function() {
		timer = setInterval(toRight, 1000);
	}
}
