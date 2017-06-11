// 鼠标的移入移出
function show() {
  document.getElementById('div1_p').style.display = "block";
}
function over() {
  document.getElementById('div1_p').style.display = "none";
}

// 不同div点击不同颜色
function show1() {
  var oDiv = document.getElementById('div2_1');
	oDiv.style.backgroundColor = "yellowgreen";
}
function show2() {
  var oDiv = document.getElementById('div2_2');
	oDiv.className = "box";
}

// 点击按钮，改变text的value值
function show3() {
  var change = document.getElementById('div3_1');
	change.value = "bb";
	change.title = "cc";
}

// 点击按钮，改变宽高及颜色
function change() {
  var change = document.getElementById('div4_1');
	change.style.width = "150px";
	change.style.height = "110px";
	change.style.backgroundColor = "coral";
}

// div的显示隐藏
function none() {
  var oDiv = document.getElementById('div5_1');
	if (oDiv.style.display == "block") {
    oDiv.style.display = "none";
  } else {
    oDiv.style.display = "block";
  }
}

// 全选不选与反选
var btn1 = document.getElementById('bt1');
var btn2 = document.getElementById('bt2');
var btn3 = document.getElementById('bt3');
var oDiv = document.getElementById('check');
var oInput = oDiv.getElementsByTagName('input');
btn1.onclick = function() {
  var i;
	for (i = 0; i < oInput.length; i++) {
    oInput[i].checked = true;
  }
}
btn2.onclick = function() {
  var i;
	for (i = 0; i < oInput.length; i++) {
    oInput[i].checked = false;
  }
}
btn3.onclick = function() {
  var i;
	for (i = 0; i < oInput.length; i++) {
    if (oInput[i].checked == true) {
      oInput[i].checked = false;
    } else {
      oInput[i].checked = true;
    }
  }
}

// 选项卡样式改变颜色，传参形式
function showcolor(value) {
  var oDiv = document.getElementById('div7_1');
	oDiv.style.backgroundColor = value;
}

// 选项卡样式改变宽高及颜色，传参形式
function changeShow(name, value) {
  var oDiv = document.getElementById('div8_1');
  oDiv.style[name] = value;
}

// 匿名函数，js代码在文档加载后执行
window.onload = function() {
  // 选项卡
  var oDiv = document.getElementById('div9_');
	var oBtn = oDiv.getElementsByTagName('input');
	var oTxt = oDiv.getElementsByTagName('div');
	for (var i = 0; i < oBtn.length; i++) {
    oBtn[i].index = i;
    oBtn[i].onclick = function() {
      for (var i = 0; i < oBtn.length; i++) {
        oBtn[i].className = '';
        oTxt[i].style.display = 'none';
      }
      this.className = 'active';
      oTxt[this.index].style.display = 'block';
    }
  }

  // 日历形式选项卡
  var oUl = document.getElementById('tab');
  var oLi = oUl.getElementsByTagName('li');
  var oText = oUl.getElementsByTagName('div')[0];
  var arr = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
  for(var i=0 ; i<oLi.length ; i++){
    oLi[i].index = i;
    oLi[i].onmouseover = function(){
      for(var i=0 ; i<oLi.length ; i++){
        oLi[i].className = '';
      }
      this.className = 'activeTab';
		  oText.innerHTML = '<h3>'+(this.index+1)+'</h3><p>'+arr[this.index]+'</p>';
    }
  }
}
