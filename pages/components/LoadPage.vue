<template>
	<view class="content">
		<view class="box1">

		</view>
		<view class="box2">

		</view>
		<view class="box3">

		</view>

		<!-- 进度条 -->
		<view class="progressBarBox">
			<view class="progressBar">

			</view>
			<view class="imgBox">
			
			</view>
		</view>

	</view>
</template>

<script setup>
	setTimeout(() => {
		uni.switchTab({
			url:'../index/index',
			fail:(res)=> {
				console.log(res);
			}
		})
	}, 3000)
</script>

<style lang='scss' scoped>
	@function getShadows($n) {
		$shadows: '#{random(2)}vw #{random(2)}vh #fff';

		@for $i from 2 through $n {
			$shadows: '#{$shadows},#{random(100)}vw #{random(100)}vh #fff'
		}

		@return unquote($shadows)
	}

	@keyframes moveUp {
		100% {
			transform: translateY(-100vh);
		}
	}

	$duration: 400s;
	$count: 100;

	@for $i from 1 through 3 {
		$duration: $duration / 2;

		.box#{$i} {
			$size: #{$i}px;
			position: fixed;
			width: $size;
			height: $size;
			border-radius: 50%;
			background-color: #fff;
			left: 0;
			top: 0;
			box-shadow: getShadows($count);
			animation: moveUp $duration linear infinite;

			&::after {
				content: '';
				position: fixed;
				left: 0;
				width: $size;
				height: $size;
				top: 100vh;
				border-radius: inherit;
				box-shadow: inherit;
			}
		}
	}

	.content {
		/* position: relative;
		 */
		width: 100vw;
		height: 100vh;
		background-color: black;
		border-top: 1PX solid #000;

		.progressBarBox {
			position: relative;
			margin: 70% 0 0 50%;
			transform: translateX(-50%);
			width: 380rpx;
			height: 16rpx;
			/* overflow: hidden; */
			background-color: #fff;
			border-radius: 8rpx;
		}

		.progressBar {
			position: absolute;
			top: 0;
			left: 0;
			background: linear-gradient(to right, skyBlue, pink);
			;
			height: 16rpx;
			border-radius: 8rpx;
			animation: identifier 3s linear;
		}

		@keyframes identifier {
			0% {
				width: 0rpx;
			}

			100% {
				width: 380rpx;
			}
		}
		.imgBox{
			width: 20rpx;
			height: 20rpx;
			position: absolute;
			top: -40rpx;
			background-color: #fff;
			animation:  autoroatation 1s  steps(100) infinite,autoroatation1 3s steps(200);
			@keyframes autoroatation {
				0%{
					transform: rotate(0deg);
				}
				100%{
					transform: rotate(360deg);
				}
			}
			@keyframes autoroatation1 {
				0%{
					left: 0;
				}
				100%{
					left: 100%;
					transform: translateX(-50%);
				}
			}
		}
		/* .imgBox {
			margin-top: 300px;
			position: relative;
			width: 200px;
			height: 100px;
			background: url('https://img-blog.csdnimg.cn/20201228154517188.png#pic_center') no-repeat;
		
			animation: x 1.5s steps(8) infinite, m 3s forwards;

			@keyframes x {

				
				0% {
					background-position: 0 0;
				}

				100% {
					background-position: -1600px 0;
				}
			}

			
			@keyframes m {
				0% {
					left: 0;
				}

				100% {
					left: 100%;
					margin-left: -100px;
					transform: translate(-100%);
				}
			}

		} */
	}
</style>