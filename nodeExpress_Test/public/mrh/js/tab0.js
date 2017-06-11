window.onload = function() {
	var oHeader = document.getElementById('header');
	var oLi = oHeader.getElementsByTagName('li');
	var oC = document.getElementById('container');
	var oDiv = oC.getElementsByClassName('pic');
	var length = oLi.length;
	for (var i = 0; i < length; i++) {
		// 利用索引index
		oLi[i].index = i;
		oLi[i].onclick = function() {
			for (var i = 0; i < length; i++) {
				oLi[i].className = '';
				oDiv[i].style.display = 'none';
			}
			oDiv[this.index].style.display = 'block';
		}

		// (function(idx){
		// 	oLi[idx].onclick = function(){
		// 		for (var i = 0; i < length; i++){
		// 			oLi[i].className = '';
		// 			oDiv[i].style.display = 'none';
		// 		}
		// 		oDiv[idx].style.display = 'block';
		// 	}
		// })(i)
	}
}
