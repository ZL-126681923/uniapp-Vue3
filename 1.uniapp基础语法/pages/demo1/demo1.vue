<template>
	<view>
		<view class='content1'> 你好呀</view>
		<view class="nav">
			<navigator url="/pages/index/index">跳转到index</navigator>
		</view>
		<swiper indicator-dots autoplay :interval="2000" :duration="1000" circular>
			<swiper-item>
			<image src="../../static/1.jpg" mode="scaleToFill"></image>
			</swiper-item>
			<swiper-item>
			<image src="../../static/2.jpg" mode="scaleToFill"></image>
			</swiper-item>
			<swiper-item>
			<image src="../../static/3.jpg" mode="scaleToFill"></image>index
			</swiper-item>
			<swiper-item>
			<image src="../../static/4.jpg" mode="scaleToFill"></image>
			</swiper-item>
		</swiper>
		<swiper class='boxy' indicator-dots autoplay :interval="2000" :duration="1000" circular vertical>
			<swiper-item>
			<image src="../../static/h1.jpg" mode="widthFix"></image>
			</swiper-item>
			<swiper-item>
			<image src="../../static/h2.jpg" mode="scaleToFill"></image>
			</swiper-item>
			<swiper-item>
			<image src="../../static/m1.jpg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
			<image src="../../static/m2.jpg" mode="scaleToFill"></image>
			</swiper-item>
		</swiper>
	</view>
	<button type="primary"size='mini'> 你好</button>
	<button type="warn" plain disabled="">我是一个按钮</button>
	<input class="uni-input" focus placeholder="自动获得焦点" />
	<input class="uni-input" maxlength="10" placeholder="最大输入长度为10" />
	<input class="uni-input" maxlength="10" placeholder="有颜色的占位符" placeholder-style="color:pink" />
</template>

<script setup>
	
</script>

<style lang="scss" scoped>	
		
	input{
		width: 80%;
		margin: 0 auto;
		border: 1px solid #ccc;
		margin-top: 10px;
	}
	   .nav{
	   	padding: 10px;
	   	text-align: center;
	   }
	   	
	   .nav:hover{
	   	background-color: orange;
	   }
 .content1{
	 color: white;
	 text-align: center;
	 background-color: black;
	 margin: 10px;
		}		
	.boxy{
			margin-top: 10px;
		}
	swiper-item{
		background-color: pink;
		text-align: center;		
		image{
			width: 100%;
		}
	}
	swiper-item:nth-child(2n){
		background-color: skyblue;
	}
</style>
