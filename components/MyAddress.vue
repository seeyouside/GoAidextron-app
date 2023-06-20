<template>
	<view class="content">
		<view class="item">
			<view class="left">
				选择地区
			</view>
			<view class="right">
				<view class="input" type="text" placeholder="请选择地区">
					<picker class="pickerList" mode="multiSelector" :range="newProvinceDataList" :value="multiIndex"
						@change="pickerChange" @columnchange="pickerColumnchange">
						<!-- <view>{{provinceDataList[0].name}}--{{provinceDataList[0].city[0].name}}--{{provinceDataList[0].city[0].area[0]}}</view> -->
						<view class="">{{select}}</view>
					</picker>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import provinceData from '../common/provinceData.js';
	export default {
		data() {
			return {
				//3
				oldpProvinceDataList: provinceData,
				newProvinceDataList: [
					[],
					[],
					[]
				],
				multiIndex: [0, 0, 0],
				select: '选择省市区',

				addressData: {
					name: '',
					phone: '',
					address: ''
				},
			}
		},
		onLoad(e) {

			//3
			// console.log(this.oldpProvinceDataList);
			for (let i = 0; i < this.oldpProvinceDataList.length; i++) {
				// console.log(this.oldpProvinceDataList[i].name);
				this.newProvinceDataList[0].push(this.oldpProvinceDataList[i].name);
			}
			for (let i = 0; i < this.oldpProvinceDataList[0].city.length; i++) {
				// console.log(this.oldpProvinceDataList[0].city[i].name)
				this.newProvinceDataList[1].push(this.oldpProvinceDataList[0].city[i].name);
			}
			for (let i = 0; i < this.oldpProvinceDataList[0].city[0].area.length; i++) {
				// console.log(this.oldpProvinceDataList[0].city[0].area)
				this.newProvinceDataList[2].push(this.oldpProvinceDataList[0].city[0].area[i]);
			}
			// console.log(this.newProvinceDataList)

		},
		methods: {
			pickerChange(e) {
				this.multiIndex = e.detail.value;
				// 数组内的下标
				// console.log(this.multiIndex);
				// 获取省
				// console.log(this.newProvinceDataList[0][this.multiIndex[0]])
				// 获取市
				// console.log(this.newProvinceDataList[1][this.multiIndex[1]])
				// 获取区
				this.area = this.newProvinceDataList[2][this.multiIndex[2]]
				this.select =
					`${this.newProvinceDataList[0][this.multiIndex[0]]}-${this.newProvinceDataList[1][this.multiIndex[1]]}-${this.newProvinceDataList[2][this.multiIndex[2]]}`
			},
			pickerColumnchange(e) {
				// 第几列滑动
				// console.log(e.detail.column);
				// 第几列滑动的下标
				// console.log(e.detail.value)
				// 第一列滑动
				if (e.detail.column === 0) {
					this.multiIndex[0] = e.detail.value
					// console.log('第一列滑动');
					// this.newProvinceDataList[1] = [];
					this.newProvinceDataList[1] = this.oldpProvinceDataList[this.multiIndex[0]].city.map((item, index) => {
						// console.log(item)
						return item.name
					})
					// console.log(this.multiIndex)
					if (this.oldpProvinceDataList[this.multiIndex[0]].city.length === 1) {
						this.newProvinceDataList[2] = this.oldpProvinceDataList[this.multiIndex[0]].city[0].area.map((item,
							index) => {
							// console.log(item)
							return item
						})
					} else {
						this.newProvinceDataList[2] = this.oldpProvinceDataList[this.multiIndex[0]].city[this.multiIndex[
							1]].area.map((item, index) => {
							// console.log(item)
							return item
						})
					}
					// 第一列滑动  第二列 和第三列 都变为第一个
					this.multiIndex.splice(1, 1, 0)
					this.multiIndex.splice(2, 1, 0)
				}
				// 第二列滑动
				if (e.detail.column === 1) {
					this.multiIndex[1] = e.detail.value
					// console.log('第二列滑动');
					// console.log(this.multiIndex)
					this.newProvinceDataList[2] = this.oldpProvinceDataList[this.multiIndex[0]].city[this.multiIndex[1]]
						.area.map((item, index) => {
							// console.log(item)
							return item
						})
					// 第二列 滑动 第三列 变成第一个
					this.multiIndex.splice(2, 1, 0)
				}
				// 第三列滑动
				if (e.detail.column === 2) {
					this.multiIndex[2] = e.detail.value
					// console.log('第三列滑动')
					// console.log(this.multiIndex)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		width: 710rpx;
		;
		height: 88rpx;
		display: flex;
		justify-content: space-between;

		.left {
			// text-align: center;
			line-height: 88rpx;
		}

		.right {
			width: 500rpx;
			display: flex;
			align-items: center;

			input {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>