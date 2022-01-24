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

new Vue({
	el: "#app",
	data() {
		return {
			bg_index: 0,
			search_data: "",
			history_search_data: [],
			is_show_data: [],
			is_show: false,
			select: "百度",
			select_map: {
				"百度": "http://www.baidu.com/s?wd=",
				"谷歌": "http://www.google.com/search?q=",
				"知乎": "https://www.zhihu.com/search?type=content&q="
			},
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
			}
		}
	},
	methods: {
		bg_config() {
			var imgs = ["img/01.jpeg", "img/02.png", "img/03.jpg",
				"img/04.jpg", "img/05.png", "img/06.png"
			]
			var body = document.getElementById("body")
			body.style.background = "url(" + imgs[this.bg_index++] + ")";
			body.style.backgroundSize = "100% 100%"
			body.style.backgroundAttachment = "fixed"
			body.style.backgroundRepeat = "no-repeat"
			this.bg_index = this.bg_index % 4
		},
		search() {
			window.open(this.select_map[this.select] + this.search_data)

			if (this.history_search_data.indexOf(this.search_data) = -1) {
				// 如果没有找到元素，则添加到本地缓存
				this.history_search_data.unshift(this.search_data)
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
			console.log("结束", this.search_data, "====")
		}
	},
	created() {
		this.bg_config()

		let history_search_data = window.localStorage.getItem("history_search_data")
		console.log('历史搜索数据：', history_search_data)
		if (history_search_data != null) {
			this.history_search_data = JSON.parse(history_search_data)
		}
	}
})
