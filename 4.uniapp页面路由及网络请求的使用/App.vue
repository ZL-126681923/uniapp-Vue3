<script>
	export default {
		// uni.setTabBarBadge:为 tabBar 某一项的右上角添加文本。
		// uni.showTabBarRedDot:显示 tabBar 某一项的右上角的红点。
		onLaunch: function() {
			console.log('App 初始化')
		uni.setTabBarBadge({
				index:2,
				text: '1',
			}),
		uni.showTabBarRedDot({
				index:0,
			})
		},
		onShow: function() {
			console.log('App 展示')
		},
		onHide: function() {
			console.log('App 隐藏')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
