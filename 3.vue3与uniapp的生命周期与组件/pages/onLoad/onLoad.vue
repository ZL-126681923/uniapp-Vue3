<template>
	<view class="">
		姓名：{{name}} --年龄： {{age}}
		<scroll-view scroll-y="true" ref="scroll">
			<view></view>
		</scroll-view>
		<navigator url="/pages/demo5/demo5">跳转demo5</navigator>
		<view>----</view>
		<view>计数：{{count}}</view>
		<view>----</view>
			<navigator open-type="reLaunch" url='/pages/index/index'>跳转到首页</navigator>
		<view v-for="item in 50">{{item}}</view>
		
		<view class="fixed" v-if="fixed">↑</view>
		
	</view>
</template>

<script setup>
import {onBeforeMount, onMounted, ref} from "vue"
import {onLoad,onReady,onShow,onHide,onUnload,onPageScroll} from "@dcloudio/uni-app"
const name = ref("张三")
const age = ref(18)
const scroll = ref(null)
const count = ref(0)
const fixed = ref(false);

let time= setInterval(()=>{
	count.value++
},50)

onLoad((e)=>{	
	console.log("onload(页面数据准备完成)");	
	console.log(e);
	name.value = e.name
	age.value = e.age
})

onShow(()=>{
	console.log("onShow(页面展示)");
	time= setInterval(()=>{
		count.value++
	},50)
})

onHide(()=>{
	console.log("onHide(页面隐藏)");
	clearInterval(time)
})
onBeforeMount(()=>{
	console.log("onBeforeMount(数据准备渲染)");
})
onReady((e)=>{	
	console.log("onReady(页面渲染完成)");
})


onMounted(()=>{
	console.log("onMounted(组件渲染完成)");
})

onUnload(()=>{
	console.log("onUnload卸载页面");
})


onPageScroll((e)=>{
	if(e.scrollTop>300){
		fixed.value = true
	}
	else{
		fixed.value = false
	}
})


</script>

<style lang="scss" scoped>
.fixed{
	width: 100px;
	height: 100px;
	background: orange;
	position: fixed;
	right:30px;
	bottom:30px;
}
</style>
