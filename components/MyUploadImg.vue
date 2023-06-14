<template>
	<view class="uploadImgBox" >
		<scroll-view style="width: 100%;white-space: nowrap;" scroll-x="true" >
			<view class="item" v-for="(item,index) in imageArr" :key="index" @click="uploadImgEvent">
				<image :src="item" mode=""></image>
				<view class="itemprop">
					删除
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
	import {ref , reactive,defineProps} from "vue"
	const props= defineProps({
		numberData: {
		    type: Number,
		    required: true
		},
	})
	// 图片上传
	import {uploadImg} from '../common/common.js'
	
	let imageArr = reactive(['../static/logo.png'])
	async function uploadImgEvent(){
		// 判断现在数组有多少数据   如果比用户规定的数据相等获取大于 就告知不可添加图  不过后面会做判断不会让他触发这个
		// 但是如果小于 就需要限制用户可在添加几张图
		let imgData = null
		if(imageArr[imageArr.length-1] == '../static/logo.png'){
			// imgData = props.numberData- imageArr.length +1
			imgData = props.numberData - (imageArr.length -1)
		}else{
			uni.showToast({
				title:'不可在添加图'
			})
			return
		}
		const res = await uploadImg(imgData)
		if(res.length < props.numberData){
			imageArr.unshift(...res)
			// console.log(imageArr.length , props.numberData);
			if(imageArr.length > props.numberData){
				imageArr.pop()
			}
			
		}else{
			imageArr.unshift(...res)
			if(imageArr.length > props.numberData){
				imageArr.pop()
			}
			console.log(imageArr);
		}
	}
	
	defineExpose({
		uploadImgEvent
	})
</script>

<style lang="scss" scoped>
	.item{
		display: inline-block;
		width: 160rpx;
		margin-right: 20rpx;
		height: 160rpx;
		image{
			width: 100%;
			height: 100%;
		}
		position: relative;
	}
	.uploadImgBox{
		padding: 16rpx;
	}
	.itemprop{
		position: absolute;
		top: 0;
		background-color:rgba(0, 0, 0, 0.3);
		width: 160rpx;
		height: 160rpx;
		text-align: center;
		line-height: 160rpx;
		color: red;
		
	}
	
</style>