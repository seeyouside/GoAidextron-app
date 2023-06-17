<template>
	<view class="content">
		<view class="address" @click="addressClick">
			<view class="address_icon">
				<u-icon name="map" color="#000" size="16"></u-icon>
			</view>
			<view class="address_city">
				佛山市
			</view>
		</view>
		<view class="search_box" @click="searchClick">
			<u-search :placeholder="placeholder" disabled="true" height='68rpx' :showAction='false'></u-search>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		defineEmits,
		defineProps
	} from 'vue'
	// props
	const props = defineProps({
		isAddress: {
			type: Boolean,
			required: true
		},
		placeholder: {
			type: String,
			default: "搜索"
		},
	})
	// 注册事件
	const emit = defineEmits(['searchClick',"addressClick"])

	// 搜索框被点击 通知过去
	const searchClick = () => {
		emit('searchClick', true)
	}
	const addressClick = () => {
		emit('addressClick',true)
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;

		.address {
			display: flex;
			width: 140rpx;
			height: 68rpx;
			border-radius: 34rpx;
			background-color: #f2f2f2;
			justify-content: space-around;
			align-items: center;
			padding: 0 16rpx;
			font-size: 28rpx;
			address_city{
				font-size: 26rpx;
				font-weight: 400;
			}
		}

		.search_box {
			flex: 1;
			padding: 0 16rpx;
		}
	}
</style>