<template>
	<view class="header">
		<text>我是头部组件</text>
		<image :src='obj.avatar' mode='' class="img"></image>	
		<text>{{obj.name}}</text>
	</view>
</template>

<script setup>
// defineProps(['username','avatar'])
// defineProps({
// 	username:{
// 		type:String,
// 		default:'未命名'
// 	},	
// 	avatar:{
// 		type:String,
// 		default:'../../static/1.jpg'
// 	}
// })
defineProps({
	obj:{
		type:Object,
		default(){
			return{
				name:'未命名',
				avatar:'../../static/pic2.png'
			}
		}
	}
})
</script>

<style lang="scss">
.header{
	display: flex;
	flex-direction: column;
	text-align: center;
	background-color: #ccc;
	margin-bottom: 20px;
	.img{
		width: 128px;
		height: 128px;
		margin: 0px auto;
		border-radius: 50%;
	}
}

</style>