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
					"博客园": "http://www.cnblogs.com/whitewall/",
					"Jenkins": "https://jenkins.whitewall.top/",
					"测试": "https://demo.whitewall.top/",
				},
				"资料官网": {
					"组件 | Element": "https://element.eleme.cn/#/zh-CN/component/installation",
					"Vue.js": "https://cn.vuejs.org/v2/guide/syntax.html"
				},
				"邮箱": {
					"163邮箱": "https://mail.163.com/",
					"QQ邮箱": "https://mail.qq.com/",
					"Gmail邮箱": "https://accounts.google.com/ServiceLogin?service=mail"
				},
				"墙外": {
					"GitHub": "https://github.com/"
				}
			}
		}
	},
	methods: {
		search() {
			window.open(this.select_map[this.select] + this.search_data)
		}
	}
})
