/* 信息框弹出提示 */
function contact() {
	$("#contact").on("tap", function() {
		alert("Your message!");
	});
}
contact();

/* 手风琴样式的使用 */
function showHide() {
	$(".p4SetLi a").on("tap", function() {
		if($(this).siblings("ol").css("display") == "none") {
			$(this).siblings("ol").css("display", "block");
		} else {
			$(this).siblings("ol").css("display", "none");
		}
		$(this).parent().siblings().find("ol").css("display", "none");
	});
}
showHide();

/* 返回顶部按钮 */
function scrollTop() {
	var content = document.getElementById("content");
	$("#scrollTop").on("tap", function() {
		content.scrollTop = 0;
	});
}
scrollTop();

/* 会员设置 */
function setMember() {
	$("#ordinaryUser").on("tap", function() {
		$("#setMember").css("display", "block");

		$("#setToMember").on("tap", function() {
			
			var setMemberName = document.getElementsByName("setMemberName");
			var checkVal;
			for(var i in setMemberName){
				if(setMemberName[i].checked){
					checkVal = setMemberName[i].value;
				}
			}
//			alert(checkVal);
            
			
			$.ajax({
			    type:"get",
			    url:"../php/member.php?checkVal="+checkVal,
			    async:true,
			    success:function(data){
			    },
			    error:function(){}
		    });
			
			
			
			$("#setMember").css("display", "none");
		});
	});

	$("#member").on("tap", function() {
		$("#memberShow").css("display", "block");
		$("#memberShow").on("tap", function() {
			$("#memberShow").css("display", "none");
		});
	});
}
setMember();


$("#returnHistory_").on("tap", function() {
	window.location.href = "../index.html";
});