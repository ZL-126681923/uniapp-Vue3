<template>
	<view>
		<view class="top">
			<button type="primary" size="mini" @click="network1">点击获得萌宠</button>
			<button type="primary" size="mini" @click="network2">点击获得美女</button>
		</view>
		<view class="main">
			<view class="item" v-for="(item,idx) in imglist">
				<image v-if='item.url' :src="item.url" mode='aspectFit'></image>
				<image v-else src="../../static/logo.png" mode='aspectFit'></image>
				<text v-if='item.content'>评论:{{item.content}}</text>
				<text v-else> 评论：暂无评论</text>
				<text v-if='item.author'>作者-----{{item.author}}</text>
				<text v-else>作者--佚名</text>
			</view>
		</view>
	</view>
</template>
<script setup>
import { ref } from 'vue';
	let imglist = ref([{}])
 async function network1(){
		let {data:{data}} = await uni.request({
			url:'https://tea.qingnian8.com/tools/petShow',
				data:{
					size:5
				}
		})
	imglist.value = data
	} 
 async function network2(){
	 let {data:{data}} = await uni.request({
	 	url:'https://tea.qingnian8.com/tools/taoShow',
		data:{
			size:5
		}
	 })
	 console.log(data);
 }
</script>
<style lang="scss">	
	.top{
		display: flex;
		height: 60rpx;
		margin: 20rpx auto;
		box-shadow: 0 0 10rpx #ccc;
	}	
	.main{
		display: flex;
		flex-direction: column;
		width: 80%;
		// height: 400rpx;
		margin: 10rpx auto;
		border: 1rpx solid #121212;
		.item{
			display: flex;
			flex-direction: column;
			width: 90%;
			margin: 10rpx auto;			
			image{
				width: 100%;
			}
		}
	}
</style>