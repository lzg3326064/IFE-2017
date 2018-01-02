
var table = document.getElementById("table").childNodes.item(1);
var input = document.getElementById("input");
var btn = document.getElementById("btn");
var direction=["top","right","bottom","left"];


var BlockNow = {
	Block: getBlock(5,5),
	Dir: 0,
	X: 5,
	Y: 5
}

setDirection(BlockNow.Block,"top");
setDiv(BlockNow.Block);

// 删除div
function clearDiv(block) {
	block.innerHTML = "";
}

// 新建div
function setDiv(block) {
	block.innerHTML = "<div></div>";
}

// 获取对象（小方块）<td>
function getBlock(x,y) {
	return table.childNodes.item(y*2).childNodes.item(x*2 + 1);
}

// 设置小方块方向
function setDirection(block,dir) {
	block.className = dir;
}

// 计算小方块方向
function calDirection(x) {
	var dir = (BlockNow.Dir + x >= 0 ? BlockNow.Dir + x : 3) % 4;
	BlockNow.Dir = dir;
	setDirection(BlockNow.Block,direction[dir]);
}

// 建立小方块 
function setter(block) {
	setDiv(block);  // 首先插入div
	setDirection(block,direction[BlockNow.Dir]); // 通过添加class类设置方向
	setDirection(BlockNow.Block,""); // 删除之前的class
	clearDiv(BlockNow.Block); // 删除之前的div
	BlockNow.Block = block; // 修改BlockNow.Block
}

// 执行
function go() {
	switch(BlockNow.Block.className) { // 用classname作为判断值
		case "left":  // 当类名为left时
			if(BlockNow.X > 1) {  // 判断是否到达边界
				BlockNow.X--; // 向左移一格
				var block = getBlock(BlockNow.X,BlockNow.Y);
				setter(block); 
			} else {
				alert("到边上了！！")
			}
			break;
		case "top": // 当类名为top时
			if(BlockNow.Y > 1) { // 判断是否到达边界
				BlockNow.Y--; // 向上移一格
				var block = getBlock(BlockNow.X,BlockNow.Y);
				setter(block);
			} else {
				alert("到边上了！！")
			}
			break;
		case "bottom": // 当类名为bottom时
			if(BlockNow.Y < 10) { // 判断是否到达边界
				BlockNow.Y++; // 向下移一格
				var block = getBlock(BlockNow.X,BlockNow.Y);
				setter(block);
			} else {
				alert("到边上了！！")
			}
			break;
		case "Right": // 当类名为right时
            if(BlockNow.X<10){ // 判断是否到达边界
                BlockNow.X++; // 向右移一格
                var Block=GetBlock(BlockNow.X,BlockNow.Y);
                Setter(Block);
            } else {
				alert("到边上了！！")
			}
            break;
	}
}

// 获取输入指令进行判断
function Run() {
	switch (input.value.trim()) {
		case "G":
			go();
			break;
		case "L":
            calDirection(-1);
            break;
        case "R":
            calDirection(1);
            break;
        case "B":
            calDirection(2);
            break;
	}
}

// 添加事件监听
btn.onclick = Run;









