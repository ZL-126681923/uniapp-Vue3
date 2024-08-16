<template>
	<view class="">
		个人中心
	</view>
</template>

<script setup>
//uni.showLoading：显示 loading 提示框, 需主动调用 uni.hideLoading 才能关闭提示框。
//uni.hideTabBarRedDot:隐藏 tabBar 某一项的右上角的红点。
onShow(()=>{
	uni.hideTabBarRedDot({
		index:2
	})
})
uni.showLoading({
	title:"加载中...",
	// mask:true 有mask啥操作都做不了
})

setTimeout(()=>{
	uni.hideLoading()
},2000)
</script>

<style lang="scss" scoped>

</style>
