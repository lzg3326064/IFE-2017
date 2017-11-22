var inputName = document.getElementById("name");
var pwd = document.getElementById("pwd");
var repwd = document.getElementById("repwd");
var email = document.getElementById("email");
var tel = document.getElementById("tel");
var nameText = document.getElementById("nameText");
var pwdText = document.getElementById("pwdText");
var repwdText = document.getElementById("repwdText");
var emailText = document.getElementById("emailText");
var telText = document.getElementById("telText");

// 名称框获取焦点
inputName.onfocus = function() {
	onfocusStyle(inputName,nameText,"必填，长度为4-16位字符")
}
// 名称框失去焦点
inputName.onblur = function () {
	checkName(name.value);
}
// 密码框获取焦点
pwd.onfocus = function () {
	onfocusStyle(pwd,pwdText,"请使用数字、字母、特殊字符且长度为8-20位");	
}
// 密码框失去焦点
pwd.onblur = function () {
	if(checkPwd(pwd.value)) {
		correctStyle(pwd,pwdText,"密码输入正确");
		passw = true;
	}
	else {
		errorStyle(pwd,pwdText,"密码输入不正确");
	}
}

// 密码确认框获取焦点
repwd.onfocus = function () {

}
// 密码确认框失去焦点
repwd.onblur = function () {
	(pwd.value == repwd.value && !repwd == "")?samePwd = true: samePwd = false;
	if(samePwd) {
		correctStyle(repwd,repwdText,"两次密码输入一致");
	}
	else {
		errorStyle(repwd,repwdText,"两次密码输入不一致");
	}
}



// function

// 获得焦点后的样式
function onfocusStyle(obj,tip,words) {
	tip.innerHTML = words;
	tip.style.color = "#ccc";
}

// 填写正确后的显示样式
function correctStyle(obj,tip,words) {
	tip,innerHTML = words;
	tip.style.color = "#5ebb46";
	obj.style.borderColor = "#5ebb46";
}

// 填写错误后的显示样式
function errorStyle(obj,tip,words) {
	tip.innerHTML = words;
	tip.style.color = "red";
	obj.style.borderColor = "red";
}




