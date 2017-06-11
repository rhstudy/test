/* 信息框弹出提示 */
function contact() {
	$("#contact").on("tap", function() {
		alert("Your message!");
	});
}
contact();

/* 返回顶部按钮 */
function scrollTop() {
	var content = document.getElementById("content");
	$("#scrollTop").on("tap", function() {
		content.scrollTop = 0;
	});
}
scrollTop();

/* 返回上级 */
function returnHistory(){
	$("#returnHistory").on("tap",function(){
		history.back(-1);
	});
}
returnHistory();
