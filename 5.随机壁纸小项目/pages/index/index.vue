<template>
	<view>
		<view class="top">
			<button type="primary" size="mini" @click="network1">点击获得萌宠</button>
			<button type="primary" size="mini" @click="network2">点击获得美女</button>
		</view>
		<view class="main">
			<view class="item" v-for="(item,idx) in imglist">
				<image :src="item.url" mode='widthFix'@click='onPreview(idx)' lazy-load></image>
				<!-- <image v-else src="../../static/logo.png" mode='widthFix'></image> -->
				<text v-if='item.content'>评论:{{item.content}}</text>
				<text v-else-if='item.comment'>评论:{{item.comment}}</text>
				<text v-else> 评论：暂无评论</text>
				<text class='author' v-if='item.author'>———{{item.author}}</text>
				<text class='author' v-else-if='item.shop'>———{{item.shop}}</text>
				<text class='author' v-else>———佚名</text>
			</view>
		</view>
		<view class="float">
			<view class="item" @click="onRefresh">
				<uni-icons type="refreshempty" size="30"></uni-icons>
			</view>
			<view class="item" @click="onTop">
				<uni-icons type="arrow-up" size="30"></uni-icons>
			</view>			
		</view>
		
		<view class="loadMore">
			<uni-load-more status="loading"></uni-load-more>
		</view>
	</view>
</template>
<script setup>
import { ref} from 'vue';
import {onReachBottom,onPullDownRefresh} from '@dcloudio/uni-app'
	let imglist = ref([])
	network1()
	//预览图片	
	function onPreview(idx){
		let urls = imglist.value.map(item=>item.url);
		// console.log(urls);
		uni.previewImage({
			current:idx,
			urls
		})
		
	}
 async function network1(){
	 try{
		 uni.showToast({
		 	title: '加载中',
		 	icon: 'loading',
		 });
	 	let {data:{data}} = await uni.request({
	 		url:'https://tea.qingnian8.com/tools/petShow',
	 			data:{
	 				size:5
	 			}
	 	})	
		imglist.value = [...imglist.value,...data]
		uni.hideToast()
		uni.stopPullDownRefresh();
	 }catch(e){
		 console.log(e);
	 	uni.showToast({
	 		title: e.errMsg,
	 		duration: 2000,
			icon:'none'
	 	});
	 }
		
	} 
 async function network2(){
	uni.showNavigationBarLoading()
	uni.request({
		url:"https://tea.qingnian8.com/tools/taoShow",
		data:{
			size:5,
		},
	}).then(res=>{		
		if(res.data.errCode===0){			
			imglist.value = [...imglist.value,...res.data.data]
			console.log(res);
		}else if(res.data.errCode === 400){
			uni.showToast({
				title:res.data.errMsg,
				icon:"none"
			})
		}		
	}).catch(err=>{		
		uni.showToast({
			title:"请求有误，请重新刷新",
			icon:"none"
		})
	}).finally(()=>{
		uni.hideNavigationBarLoading();
		uni.stopPullDownRefresh();
	})
 }
 //触底加载更多
 onReachBottom(()=>{
 	network2();
 })
 //下拉刷新
 onPullDownRefresh(()=>{
 	imglist.value = [];
 	network1();
 })
 //点击刷新
 const onRefresh =function(){
 	uni.startPullDownRefresh();
 }
 //返回顶部
 const onTop = ()=>{
 	uni.pageScrollTo({
 		scrollTop:0,
 		duration:100
 	})
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
		width: 90%;
		margin: 10rpx auto;
		border: 1rpx solid #ccc;
		box-shadow: 0 0 10rpx #7a7374;
		.item{
			display: flex;
			flex-direction: column;
			width: 90%;
			margin: 10rpx auto;		
			.author{
				margin-top: 10rpx;
				text-align: right;
				color: #e77c8e;
			}
			image{
				width: 100%;
			}
		}
	}
	
	.loadMore{
		padding-bottom:calc(env(safe-area-inset-bottom) + 50rpx);
	}
	
	.float{
		position: fixed;
		right:30rpx;
		bottom:80rpx;
		padding-bottom:env(safe-area-inset-bottom);
		.item{
			width: 90rpx;
			height: 90rpx;
			background: rgba(255,255,255,0.9);
			border-radius: 50%;
			margin-bottom:20rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			border:1px solid #eee;
		}
		
	}
</style>