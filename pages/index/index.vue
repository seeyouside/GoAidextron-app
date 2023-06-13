<template>
	<!-- <view @click="getMapLocation">
		{{address}}
	</view> -->
	<MyHeader leftTitle='首页'>
		
	</MyHeader>
	<view class="" style="" @click="login">
		登陆
	</view>
</template>
<script setup>
	import {
		ref,
		computed,
		watch
	} from 'vue'
	import MyHeader from "../../components/MyHeader.vue"
	
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
	function searchEvent(e){
		console.log('searchEvent',e);
	}
	defineExpose({
		getMapLocation,
		login
	})
</script>