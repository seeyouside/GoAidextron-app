<template>
	<view style="padding: 0 16rpx; font-size: 24rpx;">
		<view class="title">
			医药医美
		</view>

		<view class="input_modle">
			<input v-model="code" type="text" placeholder="请输入手机号">
		</view>
		<view class="" @click="handleSubmit" style="margin-bottom:30rpx ; padding: 0  20rpx;">
			<u-button color='#4dbaaa' shape="circle" type="primary" text="同意，获取验证码"></u-button>
		</view>
		<view class="tips">
			<u-checkbox-group placement="column" @change="checkboxChange">
				<u-checkbox shape='circle' size="26rpx">
				</u-checkbox>

			</u-checkbox-group>
			<view class="text">
				登陆即代表您同意 <a href=":javascript" class="rule">用户协议</a>和<a class="rule"
					href=":javascript">用户协议</a><strong></strong>
			</view>
		</view>

		<!-- 微信登陆 -->
		<view class="WeChatLogin" >
			<image src="../../../static/logo.png" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	import {
		mapActions,
		mapState
	} from 'pinia' //引入映射函数

	import {
		GlobalStore
	} from '../../../store/index.js' //引入store
	export default {
		data() {
			return {
				// 复选框数据
				checkData: false,
				code: '13042774519'
			};
		},
		computed: {
			...mapState(GlobalStore, ["token"])
		},
		methods: {
			...mapActions(GlobalStore, ['login']),
			// 验证手机号 传递手机号并跳转短信验证码界面
			handleSubmit() {
				if (!this.checkData) {
					uni.showToast({
						title: '请先阅读协议',
						icon: 'error'
					})
					return
				}
				const that = this;
				// 校验电话号码 然后发请求跳转验证页面
				const phoneRegex = /^1[3-9]\d{9}$/;
				if (phoneRegex.test(that.code)) {
					uni.navigateTo({
						url: './sendPages?code=' + that.code
					})
				} else {
					uni.showToast({
						title: '手机号有误！'
					})
				}
			},
			// 复选框切换
			checkboxChange(n) {
				this.checkData = !this.checkData
				console.log(this.checkData);
			}
		},
		onShow() {},

	};
</script>
<style lang="scss" scoped>
	.WeChatLogin {
		position: absolute;
		left: 50%;
		bottom: 30%;
		transform: translateX(-50%);
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		overflow: hidden;
		image{
			width: 100%;
			height: 100%;
		}
	}

	.title {
		margin: 80rpx 0 160rpx 0;
		font-weight: 600;
		font-size: 40rpx;
	}

	.input_modle {
		input {
			background: none;
			outline: none;
			border: 0px;

			height: 88rpx;
			padding-left: 20rpx;
			font-size: 30rpx;
		}

		border-bottom: 1px solid #f3f3f3;
		margin-bottom: 100rpx;
	}

	.tips {
		display: flex;
		justify-content: center;
		align-items: center;


		.text {
			display: flex;
			align-items: center;
			font-size: 22rpx;

			.rule {
				color: #4dbaaa;
				text-decoration: none;
			}
		}
	}
</style>