var text = document.getElementById("user_name");
var placeholder = document.getElementById("placeholder");

function check() {
	//名称长度计算
	var len = 0;
	for (var i = 0; i < text.value.length; i++) {
		var c = text.value.charCodeAt(i);
		//单字节加1，汉字加2
		if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
			len++;
		} else {
			len += 2;
		}
	}

	if (!text.value) {
		warning();
		placeholder.innerHTML = "姓名不能为空";
	} 
	else if ((len > 3) && (len < 17)) {
		correct();
	} 
	else {
		warning();
		placeholder.innerHTML = "姓名长度有误";
	}
}

//输入错误警告
function warning() {
	placeholder.style.color = "#f00";
	text.style.border = "2px solid #f00";
}

//输入正确提醒
function correct() {
	placeholder.innerHTML = "名称格式正确";
	placeholder.style.color = "#7BC767";
	text.style.border = "2px solid #7BC767";
}

//绑定点击事件
document.getElementById("button").addEventListener("click", check);