<template>
	<view style="padding: 0 16rpx; font-size: 24rpx;">
		<view class="">
			医药医美
		</view>
		<view class="input_modle">
			<input type="text">
		</view>

		<button class="send_btn">同意，获取验证码</button>
		<view class="tips">
			<u-checkbox-group v-model="checkboxValue1" placement="column" @change="checkboxChange">
				<u-checkbox shape='circle' size="26rpx">
				</u-checkbox>

			</u-checkbox-group>
			<view class="text">
				登陆即代表您同意 <a href=":javascript" class="rule">用户协议</a>和<a class="rule"
					href=":javascript">用户协议</a><strong></strong>
			</view>
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
				checkboxValue1: [],

			};
		},
		computed: {
			...mapState(GlobalStore, ["token"])
		},
		methods: {
			...mapActions(GlobalStore, ['login']),
			async handleSubmit() {
				const that = this;
				const params = {
					password: this.form.password,
					mobile: this.form.mobile
				}
				// 表单启动校验
				await that.login(params)

			},

			// 复选框切换
			checkboxChange(n) {
				console.log('change', n);
			}
		},
		onShow() {},

	};
</script>
<style lang="scss" scoped>
	.tips{
		display: flex;
		justify-content: center;
		align-items: center;
		.text {
			display: flex;
			align-items: center;
		
			.rule {
				color: #4dbaaa;
				text-decoration: none;
			}
		}
	}
	
</style>