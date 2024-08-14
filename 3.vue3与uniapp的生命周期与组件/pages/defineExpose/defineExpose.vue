<template>
	<view class="content">
		<my-child ref='child'></my-child>
		<br />
		<text>{{name}}</text>
		<br />
		<button type="primary" size="mini" @click="addnum">点击改变子组件的值</button>
	</view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
	const child = ref(null)
	let name = ref('')
	function addnum(){
		child.value.add()
	}
	onMounted(()=>{
		// console.log(child.value.name);
		name.value = child.value.name
	})
</script>

<style lang="scss" scoped>

</style>
