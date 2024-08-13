<template>
	<view class="content">
		<input type="text" placeholder="请输入内容" class="inp" @blur="isshow=false" @focus="isshow = true" v-model="inputval"/>
		<image src="../../static/chicken.gif" mode="" class="pic" :class="{active:isshow}"></image>
		<text>预览：{{inputval}}</text>
	</view>
</template>

<script setup>
import { ref } from 'vue';
let isshow = ref(false)
let inputval = ref('')
</script>

<style lang="scss" scoped>
	
.content{
		position: relative;
	.inp{
		position: relative;
		width: 80%;
		height: 4vh;
		margin: 0 auto;
		margin-top: 30px;
		border: 1px solid #ccc;
		background-color: #fff;
		z-index: 2;
	}
	.pic{
		position: absolute;
		width: 24px;
		height: 24px;
		top: 0;
		left:calc(50% - 12px);
		z-index: 1;
		transition: top .3s;
	}
	.pic.active{
		top: -24px;
	}
}
</style>
