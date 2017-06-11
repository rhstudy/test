window.onload = function(){
  var returnTop = document.getElementById("returnTop");
  returnTop.style.display = "none";
  window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //页面高度
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if(scrollTop > clientHeight){
      //利用JQuery的fadeIn淡入效果
      $("#returnTop").fadeIn(700);
    }
    else {
      $("#returnTop").fadeOut(700);
      // returnTop.style.display = "none";
    }
  }
  returnTop.onclick = function(){
    //利用JQuery的animate动画效果
    $('body,html').animate({scrollTop:0},1000);
    return false;
  }
}
