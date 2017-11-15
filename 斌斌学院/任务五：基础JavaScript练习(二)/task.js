var input = document.getElementById("input");
var content = document.getElementById("content");

//左侧入
function leftIn() {
  if(!invalidNo()) {
    return false;
  }
  else {
    if(content.childNodes.length > 60) {alert("不能超过60个哟！")}
    else {
      var newItem = document.createElement("li");
      var itemText = document.createTextNode(input.value);
      newItem.appendChild(itemText);
      newItem.style.height = input.value*2 + "px";
      content.insertBefore(newItem,content.firstChild);
    }
  }
}

//右侧入
function rightIn() {
  if(!invalidNo()) {
    return false;
  }
  else {
    if(content.childNodes.length > 60) {alert("不能超过60个哟！")}
    else {
      var newItem = document.createElement("li");
      var itemText = document.createTextNode(input.value);
      newItem.appendChild(itemText);
      newItem.style.height = input.value*2 + "px";
      content.appendChild(newItem);
    }
  }
}

//左侧出
function leftOut() {
  if(content.childNodes.length > 0) {
    content.removeChild(content.firstChild);
  }
  else {
    alert("请先输入数值！")
  }
}

//右侧出
function rightOut() {
  if(content.childNodes.length > 0) {
    content.removeChild(content.lastChild);
  }
  else {
    alert("请先输入数值！")
  }
}

//输入判断
function invalidNo() {
  var num = parseInt(input.value);
  if( (num > 9) && (num < 101) ) {
    return num;
  }
  else {
    alert("请输入10-100范围内的数字");
  }
}

//
function random() {
  content.innerHTML = "";
  for(var i = 0; i < 30 ; i++) {
    var num = Math.round(Math.random()*100);
    if(num > 10) {
      var newItem = document.createElement("li");
      newItem.innerHTML = num;
      newItem.style.height = num*2 + "px";
      content.appendChild(newItem);
    }
  }
}

//冒泡排序
function sort() {
  var len = content.childNodes.length;
  for (var j = 0;j < len; j ++ ) {
    var finish = true;
    for (var i = 0; i < len - j - 1; i++) {
      var firstLi = content.childNodes[i];
      var secondLi = content.childNodes[i + 1];
      var a = parseInt(firstLi.innerHTML);
      var b = parseInt(secondLi.innerHTML);
      if(a > b) {
        finish = false;
        var temp = a
        a = b;
        b = temp;
        content.insertBefore(secondLi,firstLi);
      }
    }
    if(finish) {
      break;
      alert("排序完成");
    }
  }
}

//页面刷新
function refresh() {
  window.location.reload();
}


//绑定点击事件
document.getElementById("left-in").addEventListener("click",leftIn,false);
document.getElementById("left-out").addEventListener("click",leftOut,false);
document.getElementById("right-in").addEventListener("click",rightIn,false);
document.getElementById("right-out").addEventListener("click",rightOut,false);
document.getElementById("random").addEventListener("click",random,false);
document.getElementById("sort").addEventListener("click",sort,false);
document.getElementById("refresh").addEventListener("click",refresh,false);