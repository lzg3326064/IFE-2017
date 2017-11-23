var forInSchool = document.getElementById("forInSchool"),
	forOutSchool = document.getElementById("forOutSchool"),
	inSchool = document.getElementById("inSchool"),
	outSchool = document.getElementById("outSchool"),
	school = document.getElementById("school"),
	province = document.getElementById("province");

// 对选择按钮绑定点击时间
inSchool.addEventListener("click", function() {
	hide(forOutSchool);
	display(forInSchool);
})

outSchool.addEventListener("click", function() {
	hide(forInSchool);
	display(forOutSchool);
})

// 隐藏元素
function hide(obj) {
	obj.style.display = "none";
}

// 显示元素
function display(obj) {
	obj.style.display = "block"
}

// 对下拉框添加change事件，并根据不同省份显示不同学校
province.addEventListener("change", function chooseSchool() {
	var schoolName = [
		["北京邮电大学", "北京大学", "清华大学", "北京航空航天大学", "北京交通大学", "北京理工大学", "北京科技大学"],
		["复旦大学", "同济大学", "上海交通大学", "华东理工大学", "上海理工大学", "上海海事大学", "东华大学"],
		["西安交通大学", "西北工业大学", "西安电子科技大学", "长安大学", "陕西师范大学", "西北农林科技大学"]
	];
	var proSchool = schoolName[province.selectedIndex - 1];
	school.length = 1;
	for (var i = 0; i < proSchool.length; i++) {
		school[i + 1] = new Option(proSchool[i], proSchool[i]);
	}
})