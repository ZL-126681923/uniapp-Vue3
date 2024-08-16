<template>
	<view class="">
		<text>demo2页面</text>
		<hr>
		<text>我的名字叫:{{people.name}}我今年{{people.age}}岁,我喜欢{{people.like}}</text>
		<button @click="goBack">返回上一页</button>
	</view>
</template>

<script setup>
/* 
 uni.navigateBack()：关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
 */
let people = ref({})
onLoad((e)=>{
	console.log(e);
	people.value = e
})
function goBack(){
	uni.navigateBack()
}
console.log(getCurrentPages());
</script>

<style lang="scss" scoped>

</style>
