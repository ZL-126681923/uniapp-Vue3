<!-- 
ref,v-bind,reactive,@cliick(自定义事件) 
 -->
<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" :style="{width:'100px',height:'100px'}"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<view >
				{{ Date.now() }}
			</view>
			<view >{{Math.floor( Math.random()*10)}}</view>
			<text >点击改变盒子</text>
			<view class="changebox" @click="change" :style="{background:color,fontSize:size+'px'}" >
				1
			</view>
			<switch  @change="changeloding" />
			<button type="primary" :loading="lod">登录</button>
			<navigator url="/pages/demo1/demo1">跳转到demo1</navigator>
		</view>
	</view>
</template>

<script setup>
import { reactive,ref } from 'vue';

	const title='你好呀'
	let num1 = ref(1)
	let people = reactive({name:'张三',age:'16'})
	let size = ref(12)
	let color = ref('#ccc')
	let lod = ref(false)
	console.log(num1);
	console.log(people);
		
	function change(){
		size.value+=2
		color.value = '#'+String(Math.random()).substring(3,9)
	}
		
	function changeloding(e){
		lod.value=e.detail.value
		// console.log(e.detail.value);
	}
</script>

<style lang="scss">
	.changebox{
		width: 200px;
		height: 200px;
		background-color: #ccc;
		text-align: center;
		margin: 0 auto;
		// color: white;
		line-height: 200px;
		// font-size: 12px;
	}

</style>
