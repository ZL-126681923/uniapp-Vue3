<template>
	<view class="nav">
		<navigator url="/pages/demo1/demo1" open-type="reLaunch">跳转到demo</navigator>
	</view>
	<view class="parent" hover-class="parent-change">
		<view class="children" hover-class="children-change" hover-stop-propagation></view>
	</view>
	<text selectable>有selectable属性才能选中我哦</text>
	<scroll-view scroll-y="true" class="scrolly" >
		<view>这是滚动区域的内容</view>
		<view>这是滚动区域的内容</view>
		<view>这是滚动区域的内容</view>
		<view>这是滚动区域的内容</view>
		<view>这是滚动区域的内容</view>
		<view>这是滚动区域的内容</view>
		<view>这是滚动区域的内容</view>
		<view>这是滚动区域的内容</view>
		<view>这是滚动区域的内容</view>
	</scroll-view>
	<scroll-view scroll-x class="scrollx" >
		<view class='box'>Hello</view>
		<view class='box'>Hello</view>
		<view class='box'>Hello</view>
		<view class='box'>Hello</view>
		<view class='box'>Hello</view>
		<view class='box'>Hello</view>
		<view class='box'>Hello</view>
		<view class='box'>Hello</view>
		<view class='box'>Hello</view>
	</scroll-view>
</template>

<script setup >
	
</script>

<style lang="scss">
		
	.nav{
		padding: 10px;
		text-align: center;
	}
		
	.nav:hover{
		background-color: pink;
	}
	.parent{
		width: 300px;
		height: 300px;
		background-color: #ccc;
		.children{
			width: 200px;
			height: 200px;
			background-color: black;
		}
		.children-change{
			background-color: red;
		}
	
	}
		
	.parent-change{
		background-color: pink;
	}
	.scrolly{
		width: 80%;
		height: 100px;
		margin: 10px auto;
		border: 1px solid #ccc
	}
	.scrollx{
		width: 80%;
		height: 150px;
		margin: 0 auto;
		border: 1px solid pink;
		white-space: nowrap;
		.box{
			width: 50px;
			height: 50px;
			background-color: #ccc;
			display: inline-block;
			margin: 5px;
			text-align: center;
			line-height: 50px;
		}
	}
</style>