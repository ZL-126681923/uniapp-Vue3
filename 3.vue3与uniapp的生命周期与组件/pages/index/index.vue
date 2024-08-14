<template>
	<view class="content">
	<!-- 	
		<my-header username='张三' avatar='../../static/pic1.jpg'></my-header>
		<my-header username='李四' avatar='../../static/pic1.png'></my-header>
		<my-header username='王五' avatar='../../static/pic2.jpg'></my-header>
		<my-header avatar='../../static/pic2.png'></my-header>
	-->
	<my-header v-for="(item,idx) in people" :obj='item' ></my-header>
	</view>
	<navigator url="/pages/onLoad/onLoad?name=张三&&age=14">跳转到uniapp页面生命周期</navigator>
</template>

<script setup>
import { ref } from "vue"
	let people = ref([
		{name:'张三',avatar:'../../static/pic1.jpg'},
		{name:'李四',avatar:'../../static/pic1.png'},
		{name:'王洪武',avatar:'../../static/pic2.jpg'},
		])
</script>

<style>
	
</style>
