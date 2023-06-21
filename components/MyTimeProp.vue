<template>
	<view class="content">
		<view class="date item">
			<view class="tit">选择日期</view>
			<picker class="picker date" mode="date" :value="date" :start="startDate" :end="endDate"
				@change="bindDateChange">
				<view>{{ date }}</view>
			</picker>
			--
			<picker class="picker date" mode="date" :value="date" :start="startDate" :end="endDate"
				@change="bindDateChange">
				<view>{{ date }}</view>
			</picker>
			
			<!-- - -->
			<!-- <picker class="picker" mode="time" :value="timeEnd" start="09:01" end="21:01" @change="bindTimeEnd">
				<view class="uni-input">{{ timeEnd }}</view>
			</picker> -->
		</view>
		<view class="time item">
			<view class="tit">选择时间</view>
			<picker class="picker" mode="time" :value="timeStart" start="09:01" end="21:01" @change="bindTimeStart">
				<view class="uni-input">{{ timeStart }}</view>
			</picker>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			});
			return {
				date: currentDate,
				timeStart: '14:00',
				timeEnd: '16:00',
				startDate:this.getDate('start'),
				endDate: this.getDate('end')
			};
		},
		props: {
			startDate: {
				type: String,
			}
		},
		methods: {
			// 选择时间 日期
			bindDateChange: function(e) {
				this.date = e.target.value;
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					// 开始时间往现在时间前取 20 年
					year = year - 20;
				} else if (type === 'end') {
					// 结束时间往现在时间后取 2 年
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			// 开始时间
			bindTimeStart: function(e) {
				this.timeStart = e.target.value;
			},
			// 结束时间
			bindTimeEnd: function(e) {
				this.timeEnd = e.target.value;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.item{
		height: 88rpx;
		display: flex;
		padding: 0 16rpx; 
		justify-content: space-between;
		align-items: center;
	}
</style>