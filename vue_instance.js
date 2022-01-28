new Vue({
	el: "#app",
	data() {
		return {
			// 背景
			background: {
				img_index: 0,
				imgs: [
					"img/01.jpeg", "img/02.png", "img/03.jpg", "img/04.jpeg"
				],
				color_index: 0,
				color: [
					"#808080", "rgb(131,175,155)", "rgb(30,41,61)"
				],
				click_index: 0
			},
			// 搜索配置
			search_data: "",
			select: "百度",
			select_map: {
				"百度": "http://www.baidu.com/s?wd=",
				"知乎": "https://www.zhihu.com/search?type=content&q=",
				"谷歌": "http://www.google.com/search?q=",
				"Github": "https://github.com/search?q=",
				"Stackoverflow": "https://stackoverflow.com/search?q="
			},
			// 历史搜索数据以及展示
			history_search_data: [],
			is_show_data: [],
			is_show: false,
			// 书签配置
			book: {
				"我的工作台": {
					"博客园": "https://www.cnblogs.com/whitewall/",
					"Jenkins": "http://jenkins.whitewall.top/",
					"测试": "https://demo.whitewall.top/",
					"阿里云ECS": "https://ecs.console.aliyun.com/"
				},
				"资料官网": {
					"组件 | Element": "https://element.eleme.cn/#/zh-CN/component/installation",
					"Vue.js": "https://cn.vuejs.org/v2/guide/syntax.html",
					"Vue-axios | axios中文网": "http://www.axios-js.com/zh-cn/docs/vue-axios.html",
					"菜鸟教程 | Java": "https://www.runoob.com/java/java-tutorial.html",
					"菜鸟教程 | Python": "https://www.runoob.com/python3/python3-tutorial.html",
					"菜鸟教程 | JavaScript": "https://www.runoob.com/js/js-tutorial.html"
				},
				"工具": {
					"百度翻译": "https://fanyi.baidu.com/",
					"百度地图": "https://map.baidu.com",
					"PyPI · The Python Package Index": "https://pypi.org/"
				},
				"邮箱": {
					"163邮箱": "https://mail.163.com/",
					"QQ邮箱": "https://mail.qq.com/",
					"Gmail邮箱": "https://accounts.google.com/ServiceLogin?service=mail"
				},
				"墙外": {
					"GitHub": "https://github.com/",
					"Wikipedia": "https://zh.wikipedia.org/",
					"YouTube": "https://www.youtube.com",
					"FaceBook": "https://zh-cn.facebook.com/",
					"PornHub": "https://cn.pornhub.com/",
				}
			},
			mywife: {
				// https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/model_list.json
				"大老婆": "HyperdimensionNeptunia/vert_normal",
				"大老婆泳装": "HyperdimensionNeptunia/vert_swimwear",
				"大老婆礼服": "HyperdimensionNeptunia/vert_classic",

				"二老婆": "HyperdimensionNeptunia/blanc_normal",
				"二老婆泳装": "HyperdimensionNeptunia/blanc_swimwear",
				"二老婆礼服": "HyperdimensionNeptunia/blanc_classic",

				"三老婆圣诞礼服": "HyperdimensionNeptunia/neptune_santa",
				"三老婆泳装": "HyperdimensionNeptunia/nepswim",
				"三老婆女仆装": "HyperdimensionNeptunia/nepmaid",
				"三老婆卡哇伊": "HyperdimensionNeptunia/neptune_classic",
				"三老婆超级卡哇伊": "HyperdimensionNeptunia/nepnep",
				"三老婆水手服": "HyperdimensionNeptunia/nepgear",
				"三老婆的粉色套装": "HyperdimensionNeptunia/nepgear_extra",
				"三老婆的另一套泳装": "HyperdimensionNeptunia/nepgearswim",

				"四老婆": "HyperdimensionNeptunia/noir",
				"四老婆礼服": "HyperdimensionNeptunia/noir_classic",
				"四老婆圣诞礼服": "HyperdimensionNeptunia/noir_santa",
				"四老婆泳装": "HyperdimensionNeptunia/noireswim",

				"五老婆": "ShizukuTalk/shizuku-pajama",
				"五老婆扎了双马尾": "ShizukuTalk/shizuku-48",
				"六老婆": "Potion-Maker/Pio",
				"七老婆": "Potion-Maker/Tia",
			}
		}
	},
	methods: {
		img_config(type, mark) {
			var body = document.getElementById("body")
			if (type == 1) {
				body.style.background = ""
			} else if (type == 0 && mark == 0) {
				body.style.background = "url(" + this.background.imgs[this.background.img_index++ % this
					.background.imgs.length] + ")"
			} else if (type == 0 && mark == 1) {
				let random_index = Math.floor(Math.random() * this.background.imgs.length)
				body.style.background = "url(" + this.background.imgs[random_index] + ")"
			}
			body.style.backgroundSize = "100% 100%"
			body.style.backgroundAttachment = "fixed"
			body.style.backgroundRepeat = "no-repeat"
			body.style.backgroundColor = this.background.color[this.background.color_index++ % this.background
				.color.length]
		},
		set_live2d(value, key) {
			// window.localStorage.setItem("set_live2d","HyperdimensionNeptunia/vert_swimwear")
			var config = {
				waifuPath: 'live2d-widget/waifu-tips.json',
				cdnPath: 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/'
			}
			window.loadWidget(config, value, key.slice(0, 3))
		},
		search() {
			const search_data = this.search_data.trim()
			window.open(this.select_map[this.select] + search_data)
			if (search_data != '' && search_data != undefined && this.history_search_data.indexOf(
					search_data) == -1) {
				// 如果没有找到元素，则添加到本地缓存
				this.history_search_data.unshift(search_data)
				window.localStorage.setItem("history_search_data", JSON.stringify(this.history_search_data))
			}
		},
		search_focus() {
			console.log("触发focus事件")
			if (this.history_search_data.length > 0) {
				this.is_show_data = this.history_search_data
				this.is_show = true
			}
		},
		search_blur() {
			console.log("触发blur事件")
			this.is_show = false
		},
		search_input() {
			console.log("触发oninput事件")
			let is_show_data = []
			var target = this.search_data
			this.history_search_data.forEach((item, index) => {
				if (item.indexOf(target) >= 0) {
					is_show_data.push(item)
				}
			})
			this.is_show_data = is_show_data
			if (this.is_show_data.length > 0 || this.history_search_data.length > 0) {
				this.is_show = true
			}
		},
		set_search_data(item) {
			console.log("触发set_search_data事件")
			this.search_data = item
			this.is_show = false
		},
		click_config() {
			var click_index = this.background.click_index % 3
			if (click_index == 0) {
				new VsClick({
					effect: 'drop',
					dom: window,
					timer: 5000,
					spring: true,
					height: 10,
					width: 10,
					lucency: true
				});
			} else if (click_index == 1) {
				new VsClick({
					effect: 'sudoku',
					dom: window,
					timer: 1000,
					height: 10,
					width: 10,
					lucency: true
				})
			} else {
				new VsClick({
					effect: 'spread',
					dom: window,
					timer: 5000,
					height: 10,
					width: 10,
					lucency: true
				})
			}
			this.background.click_index++
		}
	},
	created() {
		this.img_config(0, 1)
		this.click_config()

		let history_search_data = window.localStorage.getItem("history_search_data")
		if (history_search_data != null) {
			this.history_search_data = JSON.parse(history_search_data)
		}
	}
})


// window.onload = function() {
//  	var imgs = ["img/whitewall_01.jpeg", "img/whitewall_02.jpeg"]
//  	var i = 0;
//  	var body = document.getElementById("body"); //获取DIV对象
//  	body.style.background = "url(img/whitewall_01.jpeg)"; //设置图片的初始图片为该路径的图片
// 	body.style.backgroundSize = "100% 100%";
// 	body.style.backgroundAttachment = "fixed";
// 	body.style.backgroundRepeat = "no-repeat";
// function time() {
// 	i++;
// 	i = i % 2; 
// 	body.style.background = "url(" + imgs[i] + ")";
// }
// setInterval(time, 10000); 
//setInterval()函数，按照指定的周期（按毫秒计）来调用函数或表达式
// }
