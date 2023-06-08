<template>
	<!-- <view @click="getMapLocation">
		{{address}}
	</view> -->
	<MyHeader title="首页"/>
	<view class="" style="margin-top: 150rpx;" @click="login">
		登陆
	</view>
</template>
<script setup>
	import MyHeader from "../../components/MyHeader.vue"
	import {
		ref,
		computed,
		watch
	} from 'vue'
	import {
		getMapLocation
	} from "../../common/common.js"
	import {
		GlobalStore
	} from "../../store/index.js"
	function login(){
		uni.navigateTo({
			url:'../components/login/index'
		})
	}
	const store = GlobalStore()
	watch(address, (count) => {
		console.log(`count is: ${count}`)
	})
	const address = computed(() => {
		return store.address
	})
	defineExpose({
		getMapLocation,
		login
	})
</script>