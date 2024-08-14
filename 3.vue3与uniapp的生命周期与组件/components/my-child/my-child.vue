<template>
	<view>
		子组件
		<text>父组件改变子组件的值:{{num}}</text>
	</view>
</template>

<script setup>
	/* defineExpose子组件暴露数据与方法给父组件 */
import { ref } from 'vue';
let num = ref(0)
function add(){
	num.value+=1
}
defineExpose({
	num,
	add,
	name:'张三'
})
</script>

<style lang="scss" scoped>

</style>