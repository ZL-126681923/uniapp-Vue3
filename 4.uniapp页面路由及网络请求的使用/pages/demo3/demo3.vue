<template>
	<view class="">
		<button @click="remove">删除一个</button>
		<button @click="clear" type="warn">删除所有缓存</button>
		<text>本地存储的数据key值:{{res}}</text>
	</view>
</template>

<script setup>
/* 
 uni.setStorageSync:将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
 uni.getStorageSync:从本地缓存中同步获取指定 key 对应的内容。
 uni.getStorageInfoSync:同步获取当前 storage 的相关信息。
 uni.removeStorageSync:从本地缓存中同步移除指定 key。
 uni.clearStorageSync():同步清理本地数据缓存。
 */
uni.setStorageSync('name', '李四');
uni.setStorageSync("arrs", [1,2,3]);

let myName = uni.getStorageSync("name");
console.log(myName);

const res = ref(uni.getStorageInfoSync().keys) 
console.log(res.value[0]);

function remove(){
	uni.removeStorageSync("name")
}

function clear(){
	uni.clearStorageSync()
}


</script>

<style lang="scss" scoped>

</style>
