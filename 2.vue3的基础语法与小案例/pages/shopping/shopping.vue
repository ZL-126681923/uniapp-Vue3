<template>
	<view class="content">
		<!-- 使用唯一的key 便可以保持选项的状态,循环谁谁需要key -->
		<view class="box" v-for="(item,idx) in list" :key='item.id'>
			<checkbox></checkbox>
			<text>{{item.name}}</text>
			<button type="primary" size="mini" class="btn" @click="remove(idx)" >删除</button>
		</view>
		
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	let list = ref([
		{id:1,name:'小米'},
		{id:2,name:'华为'},
		{id:3,name:'oppo'},
		{id:4,name:'vivo'},
		])
		
	function remove(idx){
	 list.value.splice(idx,1)
	}
</script>

<style lang="scss" scoped>
	
.box{
	display: flex;
	box-shadow: 0 0 10px #ccc;
	margin: 10px;
	.btn{
		margin-right: 0px;
	}
}
</style>
