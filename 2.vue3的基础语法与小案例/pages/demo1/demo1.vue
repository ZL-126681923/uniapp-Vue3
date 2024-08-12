<template>
	<view class="content">
		<button type='primary' size="mini" @click="changeimg()"> 点击切换图片</button>
		<view class="img">
			<!-- v-if直接会删除元素 v-show只是display:none隐藏盒子 -->
			<image src='../../static/re8.jpg' v-if= 'show' ></image>
			<image src="../../static/re9.jpg" v-else></image>			
			<image src="../../static/1.jpg" v-show ='false'></image>	
		</view>
		<view class="people" v-for='item in people' :key="item.id">
			我叫{{item.name}},我喜欢{{item.like}}
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	let show = ref(true)
	let people = ref([
		{id:'1', name:'张三',like:'吃饭'	},
		{id:'2', name:'李四',like:'睡觉'	},
		{id:'3', name:'王五',like:'打豆豆'	},
		
])
	function changeimg(){
	show.value = !show.value
	}
</script>

<style lang="scss" scoped>
	
button{
	display: block;
	width: 40%;
	margin: 0 auto;
}
image{
	width: 100%;
}
</style>
