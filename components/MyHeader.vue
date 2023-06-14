<template>
	<view>
		<view class="wx-head-mod" :style="{height:navHeight+'rpx'}">
			<view class="wx-head-mod-nav" :style="{height:navigationBarHeight+'rpx',top:statusBarHeight+'rpx'}">
				<view class="wx-head-mod-nav-content" :style="{height:customHeight+'rpx'}">
					<view class="nav-content-left" :style="{width:leftWight+'rpx'}">
						<u-icon v-if="leftIcom" :name="iconName" color="#000" size="18"></u-icon>
						<image v-else-if='leftLogo' :src="logoImg" mode=""></image>
						<view v-else-if='leftTitle' class="title" :style="{lineHeight:customHeight+'rpx'}">
							{{leftTitle}}
						</view>
						<slot name="left"></slot>
					</view>
					<view class="nav-content-center">
						<view v-if="centerTitle" class="centerTitle" :style="{lineHeight:customHeight+'rpx'}">
							{{centerTitle}}
						</view>
						<u-search v-else-if="search == 'search'" :height='customHeight+"rpx"' :clearabled='false'
							:show-action="false" actionText="搜索" :animation="true" v-model="searchData"
							@change='searchEvent'>
						</u-search>
						<u-search v-else-if="search == 'click'" :height='customHeight+"rpx"' :clearabled='false'
							:show-action="false" :disabled="true" actionText="搜索" :animation="true" v-model="searchData"
							@click="searchClick">
						</u-search>
						<slot name="middle"></slot>
					</view>
					<view class="" :style="{width:menuButtonWidth+'rpx'}">

					</view>
				</view>

			</view>
		</view>
		<view class="" :style="{height:navHeight+'rpx'}">
			
		</view>
	</view>
</template>

<script>
	import {
		systemInfo
	} from '../common/system-info.js'
	export default {
		name: "HeadView",
		props: {
			// 左侧宽度需求
			leftWight: {
				type: String,
				default: '140'
			},
			// 左侧文本区内容
			leftTitle: {
				type: String,
				
			},
			// 左边显示icon
			leftIcom: {
				type: Boolean,
				// default:true
			},
			iconName: {
				type: String,
				default: 'arrow-left'
			},
			// 左侧显示logo
			leftLogo: {
				type: Boolean,
			},

			logoImg: {
				type: String,
				default: '../static/logo.png'
			},
			// 中间文本
			centerTitle: {
				type: String,
				// default:'标题'
			},
			// 中间显示搜索框
			search: {
				type: String,
				// default: true
			}
		},

		data() {
			return {
				statusBarHeight: 0, //状态栏高度
				navHeight: 0, //头部导航栏总体高度
				navigationBarHeight: 0, //导航栏高度
				customHeight: 0, //胶囊高度
				scaleFactor: 0, //比例系数
				menubarLeft: 0, //胶囊定位的左边left
				windowWidth: 0,
				menuButtonWidth: '0', // 胶囊宽度
			
				// 搜索框数据返回优化
				flag: false,
			};
		},
		methods: {
			// 搜索框数据改变时触发
			searchEvent(e) {
				if (this.flag) {
					return
				}
				this.flag = true
				this.flag = setTimeout(() => {
					this.$emit('searchEvent',e)
					this.flag = false
				}, 300)
			},
			// 搜索框被点击后做的事
			searchClick(e){
				this.$emit('searchClick',true)
			}
		},
		created() {
			/* 获取设备信息 */
			const SystemInfomations = systemInfo()
			/* 通用平台 */
			this.statusBarHeight = SystemInfomations.statusBarHeight //状态栏高度
			this.scaleFactor = SystemInfomations.scaleFactor //比例系数
			this.windowWidth = SystemInfomations.windowWidth //当前设备的屏幕宽度
			/* 微信小程序平台 */
			// #ifdef MP-WEIXIN
			this.menuButtonWidth = SystemInfomations.menuButtonWidth
			this.navHeight = SystemInfomations.navHeight + SystemInfomations.statusBarHeight //头部导航栏总高度
			this.navigationBarHeight = SystemInfomations.navHeight //头部导航栏高度
			this.customHeight = SystemInfomations.menuButtonHeight //胶囊高度
			this.menubarLeft = SystemInfomations.menuButtonLeft //胶囊左边界距离左上角的距离
			// #endif
		}
	}
</script>

<style lang="scss">
	.nav-content-left {
		height: 100%;

		image {
			width: 100%;
			height: 100%;
		}

		.title {}
	}

	.nav-content-center {

		height: 100%;

		.centerTitle {
			height: 100%;

		}
	}

	.wx-head-mod {
		box-sizing: border-box;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: skyblue;
	}

	.wx-head-mod-nav {
		box-sizing: border-box;
		width: 100%;
		position: absolute;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.wx-head-mod-nav-content {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		padding: 0 16rpx;
	}

	/* 文本区 */
	.wx-head-mod-nav-content-mian {
		box-sizing: border-box;
		height: 100%;
		text-align: center;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		color: #000;
		font-size: 36rpx;
	}

	/* 返回按钮 */
	.wx-head-mod-nav-content-back {
		box-sizing: border-box;
		width: 60rpx;
		height: 100%;
		/* background-color: aqua; */
		position: absolute;
		top: 0;
		left: 32rpx;
		display: flex;
		align-items: center;
		justify-content: left;
	}

	.wx-head-mod-nav-content-back-img {
		box-sizing: border-box;
	}
</style>