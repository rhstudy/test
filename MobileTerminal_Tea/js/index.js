jQuery(document).ready(function($) {
	var $form_modal = $('.cd-user-modal'),
		$form_login = $form_modal.find('#cd-login'),
		$form_signup = $form_modal.find('#cd-signup'),
		$form_modal_tab = $('.cd-switcher'),
		$tab_login = $form_modal_tab.children('li').eq(0).children('a'),
		$tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
		$main_nav = $('.main_nav');

	$main_nav.on('click', function(event) {

		if($(event.target).is($main_nav)) {
			// on mobile open the submenu
			$(this).children('ul').toggleClass('is-visible');
		} else {
			// on mobile close submenu
			$main_nav.children('ul').removeClass('is-visible');
			//show modal layer
			$form_modal.addClass('is-visible');
			//show the selected form
			($(event.target).is('.cd-signup')) ? signup_selected(): login_selected();
		}

	});

	$('.cd-user-modal').on('click', function(event) {
		if($(event.target).is($form_modal) || $(event.target).is('.cd-close-form')) {
			$form_modal.removeClass('is-visible');
		}
	});

	$(document).keyup(function(event) {
		if(event.which == '27') {
			$form_modal.removeClass('is-visible');
		}
	});

	$form_modal_tab.on('click', function(event) {
		event.preventDefault();
		($(event.target).is($tab_login)) ? login_selected(): signup_selected();
	});

	function login_selected() {
		$form_login.addClass('is-selected');
		$form_signup.removeClass('is-selected');
		$tab_login.addClass('selected');
		$tab_signup.removeClass('selected');
	}

	function signup_selected() {
		$form_login.removeClass('is-selected');
		$form_signup.addClass('is-selected');
		$tab_login.removeClass('selected');
		$tab_signup.addClass('selected');
	}

	$('#login-submit').on('click', function() {
		 var loginUsername = $("#login-username").val();
		 var loginPassword = $("#login-password").val();
		 if(loginUsername=="" || loginPassword==""){
		 	alert("用户名或密码不能为空！");
		 }
		 else{
		    $.ajax({
		 	type:"get",
		 	url:"./php/login.php?loginUsername="+loginUsername+"&loginPassword="+loginPassword,
		 	async:true,
		 	success:function(data){
		 		console.log(data);
		 	},
		 	error:function(){}
		 });
		 }
	});

	$('#signin-submit').on('click', function() {
		var selectOption = $('#moduleIdentification option:selected');
		var signupUsername = $("#signup-username").val();
		var signupEmail = $("#signup-email").val();
		var signupPwd = $("#signup-password").val();
		var moduleIdentification = $("#moduleIdentification").val();
		var myreg = /(\w)+[@]{1}(\w)+[.]{1}(\w)+/;
		if(signupUsername=="" ||signupEmail=="" ||signupPwd=="" || moduleIdentification==""){
			alert("请您仔细检查所填项，以上均为必填项！");
		}
		else if(!myreg.test(signupEmail)){
			alert("邮箱格式不正确，请输入有效的邮箱格式！");
		}
		else{
			$.ajax({
			type:"get",
			url:"./php/register.php?signupUsername="+signupUsername+"&signupEmail="+signupEmail+"&signupPwd="+signupPwd+"&moduleIdentification="+moduleIdentification,
			async:true,
			success:function(data){
				window.location.href = "./index.html";
			},
			error:function(){}
		});
		}
	});
});