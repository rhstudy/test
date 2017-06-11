window.onload = function() {
	var oDiv = document.getElementById('all');
	var oLi = oDiv.getElementsByTagName('a');
	var oOl = document.getElementsByTagName('ol');
	var oActive = document.getElementsByClassName('active');
	var length = oLi.length;
	var len = oActive.length;
	for (var i = 0; i < length; i++) {
		oLi[i].index = i;
		oLi[i].onclick = function() {
			for (var i = 0; i < length; i++) {
				oOl[i].style.display = 'none';
			}
			oOl[this.index].style.display = 'block';
		}
	}
	for (var i = 0; i < len; i++) {
		oActive[i].index = i;
		oActive[i].onmouseover = function() {
			for (var i = 0; i < len; i++) {
				oActive[i].style.backgroundColor = '';
			}
			oActive[this.index].style.backgroundColor = 'lightpink';
		}
	}
}


// $(function(){
// 	$("#ul a").click(function(){
// 		$(this).siblings("ol").css("display","block").end().parent().siblings().find("ol").css("display","none");
// 	})
// 	$(".active").mouseover(function(){
// 		$(this).css("background-color","lightpink").siblings().css("background-color","");
// 	})
// });
