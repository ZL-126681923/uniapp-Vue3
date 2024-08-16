<template>
	<view class="">
		demo页面
		<!-- <navigator url="/pages/demo2/demo2">demo2跳转</navigator> -->
		<view @click="goDemo2">跳转到demo2</view>
		<view>-----</view>
		<view @click="goIndex">跳转到首页</view>
		
	</view>
</template>

<script setup>
/* 
 uni.hideHomeButton():隐藏返回首页按钮
 uni.navigateTo():保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
 uni.reLaunch():关闭所有页面，打开到应用内的某个页面。
 */
// uni.hideHomeButton()
function goDemo2(){
	uni.navigateTo({
		url:"/pages/demo2/demo2?name=张三&age=18&like=篮球"
	})
}
function goIndex(){
	uni.reLaunch({
		url:"/pages/index/index"
	})
}

console.log(getCurrentPages());
</script>

<style lang="scss" scoped>

</style>
