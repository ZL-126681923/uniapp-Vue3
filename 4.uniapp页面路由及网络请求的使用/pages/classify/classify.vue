<template>
	<view class="">
		分类页面
		<button @click="remove">点击我吧</button>
		<view>---</view>
		<button @click="select">学历</button>
		<text>我是{{schoolpeo }}</text>
	</view>
</template>

<script setup>
//uni.showModal：显示模态弹窗，可以只有一个确定按钮，也可以同时有确定和取消按钮。类似于一个API整合了 html 中：alert、confirm。
//uni.showActionSheet：从底部向上弹出操作菜单
//uni.setNavigationBarTitle:动态设置当前页面的标题。
//uni.showNavigationBarLoading():在当前页面显示导航条加载动画。
uni.showNavigationBarLoading()

setTimeout(()=>{
	uni.setNavigationBarTitle({
		title:"动态标题"
	})
	uni.hideNavigationBarLoading()
},2000)


function remove(){
	uni.showModal({
		title:"是否删除？",	
		content:'删除后将自动关机',
		showCancel:false,
		cancelText:"No",
		confirmText:"Yes",
		cancelColor:"#999",
		confirmColor:"#f00",
		editable:true,		
		success:res=>{
			if(res.confirm) uni.showToast({title:"已经获取你电脑的所有数据!"})
			console.log(res);
		}
	})
}
let arrs = ["高中生","大专生","本科生","研究生"];
let schoolpeo = ref('小卡拉米')
function select(){
	uni.showActionSheet({
		title:"请选择",
		itemList:arrs,
		success:res=>{			
			console.log(res);
			schoolpeo.value = arrs[res.tapIndex]
		}
	})
}
</script>

<style lang="scss" scoped>

</style>
