<template>
	<view class="content">
		<view class="box1">

		</view>
		<view class="box2">

		</view>
		<view class="box3">

		</view>
		<view class="progressBar">
		
		</view>
	</view>
</template>

<script setup>

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
	$duration:400s;
	$count:100;
	@for $i from 1 through 3 {
		$duration:$duration / 2 ;
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
		width: 100vw;
		height: 100vh;
		background-color: black;
	}
</style>