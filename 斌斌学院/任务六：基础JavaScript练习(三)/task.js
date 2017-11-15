var input = document.getElementById("textarea");
var content = document.getElementById("content");
var keyWord = document.getElementById("keyword");

//左侧入
function leftIn() {
  if(!input.value) {
    alert("请先填写内容！")
  }
  else {
    var inputArr = invalidNo();
    inputArr.reverse();
    for(var i = 0; i < inputArr.length; i++){
      var newItem = document.createElement("li");
      var itemText = document.createTextNode(inputArr[i]);
      newItem.appendChild(itemText);
      content.insertBefore(newItem,content.firstChild);
    }
  } 
}

//右侧入
function rightIn() {
  if(!input.value) {
    alert("请先填写内容！")
  }
  else {
    var inputArr = invalidNo();
    for(var i = 0; i < inputArr.length; i++){
      var newItem = document.createElement("li");
      var itemText = document.createTextNode(inputArr[i]);
      newItem.appendChild(itemText);
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
    alert("请先填写内容！")
  }
}

//右侧出
function rightOut() {
  if(content.childNodes.length > 0) {
    content.removeChild(content.lastChild);
  }
  else {
    alert("请先填写内容！")
  }
}

//输入判断并根据符号将字符串分段
function invalidNo() {
  var str = input.value;
  var arr = str.split(/\,|\，|\" "|\n|\s|\t/);
  return arr;
}

//检索特定字符
function search() {
  var text = keyWord.value;
  var nodes = content.childNodes;
  var len = nodes.length;
  if(!text) {
    alert("请数组需检索字符！");
  }
  else {
    for(var i = 0; i < len; i++) {
      if(nodes[i].innerHTML.indexOf(text) > -1) {
      var reg = new RegExp("("+text+")","g");
      nodes[i].innerHTML = nodes[i].innerHTML.replace(reg, "<font color=red>$1</font>");
      }
    }
  }
}


//重置文本颜色
function refresh() {
    var text = keyWord.value;
  var nodes = content.childNodes;
  var len = nodes.length;
  if(!text) {
    alert("请数组需检索字符！");
  }
  else {
    for(var i = 0; i < len; i++) {
      if(nodes[i].innerHTML.indexOf(text) > -1) {
      var reg = new RegExp("("+text+")","g");
      nodes[i].innerHTML = nodes[i].innerHTML.replace(reg, "<font color=#000>$1</font>");
      }
    }
  }
}


//绑定点击事件
document.getElementById("left-in").addEventListener("click",leftIn,false);
document.getElementById("left-out").addEventListener("click",leftOut,false);
document.getElementById("right-in").addEventListener("click",rightIn,false);
document.getElementById("right-out").addEventListener("click",rightOut,false);
document.getElementById("refresh").addEventListener("click",refresh,false);
document.getElementById("search").addEventListener("click",search,false);