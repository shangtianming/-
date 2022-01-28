function wait(ms) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve()
		}, ms);
	});
}

(new Promise(async (resolve, reject) => {
	// 循环10s搜索看板娘的div是否已经生成
	let waifu;
	for (let i = 0; i < 10; i++) {
		waifu = document.getElementById("waifu");
		if (waifu == null) {
			await wait(1000);
		} else {
			resolve(waifu);
			break;
		}
	}
	if (waifu == null) {
		reject();
	}
})).then((waifu) => {
	var start_left = waifu.offsetLeft;
	var start_top = waifu.offsetTop;
	console.log("找到看板娘了", start_left, start_top);
	// z-index越大就越在顶层，这里999999应该没人比的过了
	waifu.setAttribute("style", "z-index:999999; bottom: 0px");
	waifu.onmousedown = function(event) {
		let ev = event || window.event;
		event.stopPropagation();
		var disX = ev.clientX - waifu.offsetLeft;
		var disY = ev.clientY - waifu.offsetTop;

		document.onmousemove = function(event) {
			var ev = event || window.event;
			waifu.style.left = ev.clientX - disX + "px";
			waifu.style.top = ev.clientY - disY + "px";
			waifu.style.cursor = "move";
		};
	};

	waifu.onmouseup = function(event) {
		document.onmousemove = null;
		this.style.cursor = "default";
		
		// 本来想把这2个参数置为初始值start_left、start_top，后面发现因为窗口的原因，这个数据是不准确的。
		// 而原本这两个属性就没有，都置为null则就能实现复位的效果
		waifu.style.left = null;
		waifu.style.top = null;
	};
}).catch(() => {
	console.log("没找到看板娘，或许你应该设置再等久一点...");
});
