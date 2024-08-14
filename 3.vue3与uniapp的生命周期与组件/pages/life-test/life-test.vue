<template>
	<view class="layout">
		<scroll-view scroll-x scroll-y="true" class="scroll" ref="scroll">
		<my-life v-if="show"></my-life>
	</scroll-view>
	</view>
</template>

<script setup>
import {onMounted, ref} from "vue";
//获取 scroll-view 组件
const scroll = ref(null);
const show = ref(true);

setTimeout(()=>{
	show.value = false
},2000)
console.log('组件被声明了');

onMounted(()=>{
	console.log('组件被挂载了');
	console.log(scroll.value);
})

</script>

<style lang="scss" scoped>

</style>
