<template>
	<!-- 状态栏 -->
	<view class="status">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	.status {
		position: fixed;
		z-index: 10;
		top: 0;
		background-color: #FFFFFF;
		width: 100%;
		height: 0;
		/* #ifdef APP-PLUS */
		height: var(--status-bar-height);//覆盖样式
		/* #endif */
	}
</style>
