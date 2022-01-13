new Vue({
	el: "#app",
	data() {
		return {
			search_data: "",
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
				"邮箱": {
					"163邮箱": "https://mail.163.com/",
					"QQ邮箱": "https://mail.qq.com/",
					"Gmail邮箱": "https://accounts.google.com/ServiceLogin?service=mail"
				},
				"墙外": {
					"GitHub": "https://github.com/",
					"Wikipedia": "https://zh.wikipedia.org/",
					"YouTube": "https://www.youtube.com",
					"FaceBook":"https://zh-cn.facebook.com/",
					"PornHub": "https://cn.pornhub.com/",
				}
			}
		}
	},
	methods: {
		search() {
			window.open(this.select_map[this.select] + this.search_data)
			// window.localStorage.setItem(new Date().getTime(), this.search_data)
		}
	}
})
