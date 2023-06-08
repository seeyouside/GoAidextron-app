<script>
	import {systemInfo} from './common/system-info.js'
	export default {
		onLaunch: function() {
			this.globalData.navHeight=systemInfo().navHeight + systemInfo().statusBarHeight //头部导航栏总高度
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},

	}
</script>
<template>

</template>
<style lang="scss">
	/*每个页面公共css */
	@import "uview-plus/index.scss";
</style>