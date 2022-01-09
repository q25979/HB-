<template>
	<view class="home">
    <navigator url="/pages/eg-lucky/index" hover-class="navigator-hover">
      <button type="default">大转盘</button>
    </navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
  .home {
    padding: 30rpx;
  }
  navigator {
    margin-bottom: 20rpx;
  }
</style>
