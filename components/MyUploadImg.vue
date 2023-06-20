<template>
	<view class="uploadImgBox" @touchend="uploadImgBoxTouchend" @longtap="uploadImgBoxClick">
		<view class="scollview">
			<view class="item" @touchmove.stop="uploadImgBoxMousemove" @longpress.stop="longpressEvent(index)"
				@touchend="touchendEvent" :class="[longressIndex == index && isainmtion ? 'imgAnimation': '']"
				:style="{top:maxH,left:maxW}" v-for="(item,index) in imageArr" :key="index" @click="uploadImgEvent">
				<image :src="item" mode=""></image>
				<!-- <view class="itemprop"  v-if='item != "../static/logo.png"'>
					<view class="text"  @click.stop="deleteImg(index)">
						<u-icon name="close" color="#fff" size="12"></u-icon>
					</view>
				</view> -->
			</view>
			<view v-if="isainmtion" class="item">
				帅气
			</view>
		</view>
		<view :class="[isShopBgc?'':'show']" @touchstart="touchstartTrash" class="prop">
			<u-icon name="trash-fill" :color="colorIcon" size="36"></u-icon>
			<view class="">
				<!-- 拖入删除 -->
				{{trashText}}
			</view>
		</view>
	</view>
	<view class="aaa"
		style=" width: 10rpx; height: 10rpx; background-color: pink; position: absolute; top: 610px; left:120px;">

	</view>
</template>
<script setup>
	import {
		ref,
		reactive,
		defineProps,
		onMounted,
		getCurrentInstance,


	} from "vue"

	//实例化getCurrentInstance
	let _this = getCurrentInstance();
	let propData = null
	// 获取某个元素的高度
	let getPropety = () => {
		const query = uni.createSelectorQuery().in(_this);
		query.select('.prop').boundingClientRect(data => {
			let newdata = JSON.parse(JSON.stringify(data))
			console.log(newdata);
			propData = newdata
		}).exec();
	}
	const props = defineProps({
		numberData: {
			type: Number,
			required: true
		},
	})
	// 动效打开
	let isainmtion = ref(false)
	let longressIndex = ref()
	/**
	 * 长时间触摸图触发
	 * **/
	function longpressEvent(index) {
		longressIndex.value = index
		isainmtion.value = !isainmtion.value
		console.log(longressIndex, 'isainmtion', isainmtion.value);
		getPropety()
	}
	// 图片上传
	import {
		uploadImg
	} from '../common/common.js'
	let imageArr = reactive(['../static/logo.png'])
	async function uploadImgEvent() {
		// 判断现在数组有多少数据   如果比用户规定的数据相等获取大于 就告知不可添加图  不过后面会做判断不会让他触发这个
		// 但是如果小于 就需要限制用户可在添加几张图
		let imgData = null
		if (imageArr[imageArr.length - 1] == '../static/logo.png') {
			// imgData = props.numberData- imageArr.length +1
			imgData = props.numberData - (imageArr.length - 1)
		} else {
			uni.showToast({
				title: '不可在添加图'
			})
			return
		}
		const res = await uploadImg(imgData)
		if (res.length < props.numberData) {
			imageArr.unshift(...res)
			// console.log(imageArr.length , props.numberData);
			if (imageArr.length > props.numberData) {
				imageArr.pop()
			}

		} else {
			imageArr.unshift(...res)
			if (imageArr.length > props.numberData) {
				imageArr.pop()
			}
			console.log(imageArr);
		}
	}
	// img 图片删除
	const deleteImg = (e) => {
		uni.showModal({
			title: '提示',
			content: '确定删除图片吗',
			success: function(res) {
				if (res.confirm) {
					imageArr.splice(e, 1)
				} else if (res.cancel) {
					console.log('用户点击取消');
				}
			}
		});
	}
	const maxW = ref()
	const maxH = ref()
	// 拖拽删除
	const isShopBgc = ref(false)

	/**
	 * 获取uploadImgBox鼠标位置
	 * **/
	const uploadImgBoxMousemove = (e) => {
		// mousemoveData.clickHandle(e.changedTouches[0])
		// console.log(e);
		if (!propData) {
			return
		}
		maxW.value = e.changedTouches[0].pageX - 40 + "px"
		maxH.value = e.changedTouches[0].pageY - 40 + "px"
		if ((e.changedTouches[0].pageX - 40 > propData.left && e.changedTouches[0].pageY > propData.top) && (e
				.changedTouches[0].pageX - 40 < propData.right && e.changedTouches[0].pageY < propData.bottom)) {
			touchstartTrash()
		} else {
			touchstartTrash(1)
		}
	}
	// 触摸盒子松开后的事件
	const touchendEvent = (e) => {
		if (!propData) {
			return
		}

		if ((e.changedTouches[0].pageX - 40 > propData.left && e.changedTouches[0].pageY > propData.top) && (e
				.changedTouches[0].pageX - 40 < propData.right && e.changedTouches[0].pageY < propData.bottom)) {
			deleteImg()
		}
		isainmtion.value = false
		isShopBgc.value = false
	}
	// 点击盒子超过350ms秒触发
	const uploadImgBoxClick = (e) => {

		maxW.value = e.changedTouches[0].pageX - 40 + "px"
		maxH.value = e.changedTouches[0].pageY - 40 + "px"
		// 弹出删除窗口
		isShopBgc.value = true


	}

	const uploadImgBoxTouchend = () => {
		isShopBgc.value = false
	}
	let trashText = ref('拖入图标删除')
	let colorIcon = ref('#000')
	const touchstartTrash = e => {
		if (e == 1) {
			trashText.value = '拖入图标删除'
			colorIcon.value = '#000'
			return
		}
		trashText.value = '松手即可删除'
		colorIcon.value = '#ff0000'
	}
	defineExpose({
		uploadImgEvent,
		deleteImg,
		longpressEvent,
		uploadImgBoxMousemove,
		uploadImgBoxTouchend,
		touchstartTrash,
		touchendEvent
	})
</script>

<style lang="scss" scoped>
	.show {
		display: none !important;
	}

	.prop {

		position: absolute;
		width: 120px;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 50%;
		height: 120px;
		background-color: rgba(0, 0, 0, 0.3);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: #fff;
	}

	.scollview {
		width: 100%;
		overflow: scroll;
		white-space: nowrap;
	}

	.imgAnimation {
		position: absolute;
		transform: scale(0.85);
		// transition-duration:0.01s;
		background-color: pink;
		opacity: 0.8;
		// transform: translateX();
	}

	.item {
		border-radius: 10rpx;
		display: inline-block;
		width: 160rpx;
		margin-right: 20rpx;
		height: 160rpx;
		overflow: hidden;

		image {
			width: 100%;
			height: 100%;
		}

	}

	.uploadImgBox {
		// position: relative;
		padding: 16rpx;
	}

	// .itemprop{
	// 	position: absolute;
	// 	top: -20rpx;
	// 	right: -20rpx;
	// 	width: 50rpx;
	// 	box-sizing: border-box;
	// 	height: 50rpx;

	// 	border-radius: 50%;
	// 	background-color: #000;
	// 	.text{
	// 		position: absolute;
	// 		top: 22rpx;
	// 		right: 22rpx;
	// 		// font-weight: 700;
	// 	}
	// }
</style>