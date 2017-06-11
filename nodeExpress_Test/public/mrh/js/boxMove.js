window.onload = function() {
	/*面向过程*/
	var con = document.getElementById('container');
	var box = document.getElementById('box');
	box.onmousedown = function(e) {
		var event1 = e || window.event;
		var disx = event1.clientX - box.offsetLeft;
		var disy = event1.clientY - box.offsetTop;

		document.onmousemove = function(e) {
			var event1 = e || window.event;
			var x = event1.clientX;
			var y = event1.clientY;

			var left = x - disx;
			var top = y - disy;
			if (left < 0) {
				left = 0;
			}
			if (top < 0) {
				top = 0;
			}
			if (left > con.clientWidth - box.offsetWidth) {
				left = con.clientWidth - box.offsetWidth;
			}
			if (top > con.clientHeight - box.offsetHeight) {
				top = con.clientHeight - box.offsetHeight;
			}

			box.style.left = left + 'px';
			box.style.top = top + 'px';
		}

		document.onmouseup = function() {
			document.onmousemove = null;
			document.onmouseup = null;
		}
	}


	/*面向对象*/
	// function Log(con, box) {
	// 	this.con = document.getElementById(con);
	// 	this.box = document.getElementById(box);
	// 	this.disx = null;
	// 	this.disy = null;
	// }
	// Log.prototype.msDown = function() {
	// 	var that = this;
	// 	this.box.onmousedown = function(e) {
	// 		var event1 = e || window.event;
	// 		that.disx = event1.clientX - that.box.offsetLeft;
	// 		that.disy = event1.clientY - that.box.offsetTop;
	//
	// 		document.onmousemove = function(e) {
	// 			that.msMove(e);
	// 		}
	//
	// 		document.onmouseup = function() {
	// 			that.msUp();
	// 		}
	// 	}
	// }
	//
	// Log.prototype.msMove = function(e) {
	// 	var event1 = e || window.event;
	// 	var left = event1.clientX - this.disx;
	// 	var top = event1.clientY - this.disy;
	//
	// 	if (left < 0) {
	// 		left = 0;
	// 	}
	// 	if (top < 0) {
	// 		top = 0;
	// 	}
	// 	if (left > this.con.clientWidth - this.box.offsetWidth) {
	// 		left = this.con.clientWidth - this.box.offsetWidth;
	// 	}
	// 	if (top > this.con.clientHeight - this.box.offsetHeight) {
	// 		top = this.con.clientHeight - this.box.offsetHeight;
	// 	}
	//
	// 	this.box.style.left = left + 'px';
	// 	this.box.style.top = top + 'px';
	// }
	//
	// Log.prototype.msUp = function() {
	// 	document.onmousemove = null;
	// 	document.onmouseup = null;
	// }
	// var log = new Log("container", "box");
	// log.msDown();

}
