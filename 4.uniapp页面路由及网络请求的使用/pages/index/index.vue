<template>
	<view class="content">
		<navigator open-type="reLaunch" url="/pages/user/user">点击跳转到用户</navigator>
		<button @click="show">显示加载</button>
		<button @click="hide">隐藏加载</button>
		<button @click="stop">停止下拉刷新</button>
		<image class="logo" src="/static/images/pic2.jpg"></image>
		<view class="" v-for="item in 50">
			{{item}}
		</view>
		
		
	</view>
</template>

<script setup>
	/* 
	 uni.showToast:显示消息提示框。
	 uni.hideToast()：弹窗隐藏
	 navigator 无法直接跳转到tarbar页面需要设置open-type="reLaunch"
	 uni.stopPullDownRefresh()：停止当前页面下拉刷新。
	 */
function show(){
	uni.showToast({
		title:"加载中...",
		// icon:"loading",
		image:'/static/images/pic2.jpg',
		duration:3000,
		// mask:true //弹窗消失前无法触发别的事件
	})
}
function hide(){
	uni.hideToast()
}

function stop(){
	uni.stopPullDownRefresh()
}

const conut = ref(0);

onMounted(()=>{
	console.log("onMounted(数据渲染完成)");
})
onLoad(()=>{
	console.log("onLoad(页面加载)");
})

onShow(()=>{
	console.log("onShow(页面显示)");
})
onReachBottom(()=>{
	console.log("到底了");
})
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 50rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 10rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
