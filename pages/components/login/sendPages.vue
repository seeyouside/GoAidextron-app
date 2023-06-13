<template>
	<view class="content">
		<view class="title">
			请输入验证码
		</view>
		<view class="code">
			<u-code-input size="45" v-model="value3" :maxlength="6"></u-code-input>
		</view>
		<view class="login_btn">
			<u-button shape="circle" text="登陆" color="linear-gradient(to right, pink, skyBlue)" size="large"></u-button>
		</view>
	</view>

</template>
<script setup>
	// 导入store
	import {
		GlobalStore
	} from '@/store/index.js' //引入store
	const store = GlobalStore()
	// 进入页面后获取到手机号并获取验证码 __start
	import {
		code
	} from "../../../api/login.js"
	import {
		onLoad
	} from "@dcloudio/uni-app"
	onLoad(async (e) => {
		if (e.code) {
			const res = await code({
				mobile: e.code,
				scene:"YZMDL"
			})
			console.log(res);
		}
	})


	// 进入页面后获取到手机号并获取验证码 __ent
</script>
<style lang="scss" scoped>
	.content {
		padding: 16rpx;

		.title {
			font-size: 44rpx;
			font-weight: 600;
			margin: 20rpx 0 120rpx 0;
		}

		.code {
			display: flex;
			justify-content: center;
			// margin: 20rpx 0 0 0;
		}

		.login_btn {
			width: 90%;
			position: fixed;
			bottom: 30rpx;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	::v-deep {
		.u-code-input {
			display: flex !important;
			justify-content: space-between !important;
			width: 90% !important;

		}
	}
</style>