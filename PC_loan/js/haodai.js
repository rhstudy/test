$(window).scroll(function() {

	if ($(window).scrollTop() > $(window).height()) {
		$("#box").show();
		$("#gundong").show();
	} else {
		$("#box").hide();
		$("#gundong").hide();
	}
})
$("#box").click(function() {
	$(document.body).animate({
		scrollTop: 0
	}, 1000);
})


