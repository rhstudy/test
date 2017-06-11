$(function() {
	/* 令首页列表的高度等于宽度，且当尺寸改变时高度也随宽度改变 */
	function getLi() {
		var width = $("#nav li").width();
		$("#nav li").height(width);
	}
	getLi();
	/* resize()方法 */
	$(window).resize(function() {
		getLi();
	});
});