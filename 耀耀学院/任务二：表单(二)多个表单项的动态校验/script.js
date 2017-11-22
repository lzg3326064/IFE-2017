var inputName = document.getElementById("name"),
	pwd = document.getElementById("pwd"),
	repwd = document.getElementById("repwd"),
	email = document.getElementById("email"),
	tel = document.getElementById("tel"),
	tipOfName = document.getElementById("nameText"),
	tipOfPwd = document.getElementById("pwdText"),
	tipOfRepwd = document.getElementById("repwdText"),
	tipOfEmail = document.getElementById("emailText"),
	tipOfTel = document.getElementById("telText"),
	submit = document.getElementById("button");
var flagName, flagPwd, flagRepwd, flagEmail, flagTel;

// 名称框获得焦点
inputName.onfocus = function() {
	onfocusStyle(inputName, tipOfName, "必填，长度为4~16个字符");
}

// 名称框失去焦点，
inputName.onblur = function() {
	if (checkName()) {
		correctStyle(inputName, tipOfName, "名称可用");
		flagName = true;
	} else if (inputName.value == "" || inputName.value == null) {
		wrongStyle(inputName, tipOfName, "名称不能为空");
	} else {
		wrongStyle(inputName, tipOfName, "输入长度有误");
	}
}

// 密码框获得焦点
pwd.onfocus = function() {
	onfocusStyle(pwd, tipOfPwd, "至少包含字母和数字，长度为6~20个字符");
}

// 密码框失去焦点
pwd.onblur = function() {
	if (checkPwd()) {
		correctStyle(pwd, tipOfPwd, "密码可用");
		flagPwd = true;
	} else if (pwd.value == "" || pwd.value == null) {
		wrongStyle(pwd, tipOfPwd, "密码不能为空");
	} else {
		wrongStyle(pwd, tipOfPwd, "密码格式有误");
	}
}

// 二次密码框获得焦点
repwd.onfocus = function() {
	onfocusStyle(repwd, tipOfRepwd, "再次输入相同密码");
}

// 二次密码框失去焦点
repwd.onblur = function() {
	if ((pwd.value == repwd.value) && pwd.value != "") {
		correctStyle(repwd, tipOfRepwd, "密码输入一致");
		flagRepwd = true;
	} else if (repwd.value == "" || repwd.value == null) {
		wrongStyle(repwd, tipOfRepwd, "请再次输入密码");
	} else {
		wrongStyle(repwd, tipOfRepwd, "密码不一致");
	}
}

// 邮箱框获得焦点
email.onfocus = function() {
	onfocusStyle(email, tipOfEmail, "请输入邮箱");
}

// 邮箱框失去焦点
email.onblur = function() {
	if (checkEmail()) {
		correctStyle(email, tipOfEmail, "邮箱格式正确");
		flagEmail = true;
	} else if (email.value == "" || email.value == null) {
		wrongStyle(email, tipOfEmail, "请输入邮箱地址");
	} else {
		wrongStyle(email, tipOfEmail, "邮箱格式错误");
	}
}

// 手机号码框获得焦点
tel.onfocus = function() {
	onfocusStyle(tel, tipOfTel, "联系电话20天内只可修改一次");
}

// 手机号码框失去焦点
tel.onblur = function() {
	if (checkTel()) {
		correctStyle(tel, tipOfTel, "手机格式正确");
		flagTel = true;

	} else if (tel.value == "" || tel.value == null) {
		wrongStyle(tel, tipOfTel, "请输入手机号码");
	} else {
		wrongStyle(tel, tipOfTel, "手机号码格式错误");
	}
}


// 获得焦点样式设置
function onfocusStyle(obj, tip, str) {
	tip.innerHTML = str;
	tip.style.color = "#ccc";
	obj.style.borderColor = "#ccc";
}

// 填写数据正确样式设置
function correctStyle(obj, tip, str) {
	tip.innerHTML = str;
	tip.style.color = "green";
	obj.style.borderColor = "green";
}

// 填写数据错误样式设置
function wrongStyle(obj, tip, str) {
	tip.innerHTML = str;
	tip.style.color = "red";
	obj.style.borderColor = "red";
}

// ------------------数据判断函数---------------------

// 判断输入值长度是否再4~16之内
function checkName() {
	if (inputName.value.length > 3 && inputName.value.length < 17) {
		return true;
	} else {
		return false;
	}
}

// 采用正则判断密码是否包含数字和字幕且长度在6~20之内
function checkPwd() {
	var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
	if (!reg.test(pwd.value)) {
		return false
	} else {
		return true;
	}
}

// 判断邮箱格式是否符合规范
function checkEmail() {
	var reg = /^[0-9A-Za-z-_]+@[0-9A-Za-z-_]+(.[0-9A-Za-z-_])/;
	if (!reg.test(email.value)) {
		return false;
	} else {
		return true;
	}
}

// 判断电话号码格式是否符合规范
function checkTel() {
	var reg = /^1[3,4,5,7,8][0-9]{9}$/
	if (!reg.test(tel.value)) {
		return false;
	} else {
		return true;
	}
}
// -----------------------数据判断函数结束----------------------------

// 对提交按钮添加事件，当输入均没有错误的情况下，提示用户，并刷新注册页面，当有错误时，也提示用户错误信息。
submit.addEventListener("click", function() {
	if (flagName && flagPwd && flagRepwd && flagEmail && flagTel) {
		alert("提交成功");
		window.location.reload();
	} else if (!flagName) {
		alert("名称格式不正确");
	} else if (!flagPwd) {
		alert("密码格式不正确");
	} else if (!flagRepwd) {
		alert("两次密码输入不一致");
	} else if (!flagEmail) {
		alert("邮箱格式不正确");
	} else if (!flagTel) {
		alert("手机号码格式不正确");
	}
})