<template>
	<view class="content">
		<my-layout>
			<template #header >
				我是demo1的头部区域
			</template>
			<template #main>
				<my-header></my-header>
			</template>
		</my-layout>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	
.header{
	margin-bottom: 10px;
}
</style>
