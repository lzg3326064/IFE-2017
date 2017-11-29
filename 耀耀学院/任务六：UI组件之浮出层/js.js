function g(obj) {
	return document.getElementById(obj);
}

//点击mask或者关闭按钮时，mask和登录框不可见
g("mask").onclick = g("closeBtn").onclick = function() {
	g("mask").style.display = "none";
	g("loginBox").style.display = "none";
}

//点击登陆按钮时，mask和登录框可见
g("login").onclick = function() {
	g("mask").style.display = "block";
	g("loginBox").style.display = "block";
}

// 自动居中函数
function autoCenter(obj) {
	var bodyW = document.documentElement.clientWidth;
	var bodyH = document.documentElement.clientHeight;
	var objW = obj.offsetWidth;
	var objH = obj.offsetHeight;
	obj.style.left = (bodyW - objW) / 2 + "px";
	obj.style.top = (bodyH - objH) / 2 + "px";
}

// 自动全屏函数
function autoFullScreen(obj) {
	obj.style.width = document.documentElement.clientWidth + "px";
	obj.style.height = document.documentElement.clientHeight + "px";
}

// onresize事件实现登陆窗口始终居中
window.onload = window.onresize = function() {
	autoCenter(g("loginBox"));
	autoFullScreen(g("mask"));
}