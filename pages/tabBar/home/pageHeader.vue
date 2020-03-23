<template>
	<view class="header">
		<!-- 定位城市 -->
		<view class="addr">
			<view class="iocn iconfont">&#xe651;</view>
			{{city}}
		</view>
		<!-- 搜索框 -->
		<view class="input-box">
			<input placeholder="some word..." placeholder-style="color:#c0c0c0" />
			<view class="iocn iconfont">&#xe65c;</view>
		</view>
		<!-- 右侧图标按钮铃 -->
		<view class="icon-btn">
			<view class="iocn iconfont">&#xe70a;</view>
		</view>
	</view>
	
</template>


<script>
	export default {
		data() {
			return {
				city: "北京"
			}
		}
	}
</script>

<style lang="less">
	.header {
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		//top: 0;						//top?
		// /*  #ifdef  APP-PLUS  */
		// top: var(--status-bar-height);
		// /*  #endif  */
	
		.addr {
			width: 120upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			align-items: center;
			font-size: 28upx;
			
			.icon, .iconfont {	//单独  .icon不起作用,用.icon, .iconfont
				height: 60upx;
				margin-right: 5upx;
				display: flex;
				align-items: center;
				font-size: 42upx;
				color: #ffc50a;
			}
		}
		.input-box {
			width: 100%;
			height: 60upx;
			background-color: #f5f5f5;
			border-radius: 30upx;
			position: relative;
			display: flex;
			align-items: center;
			.icon, .iconfont {	//单独  .icon不起作用,用.icon, .iconfont
				display: flex;
				align-items: center;
				position: absolute;
				top: 0;
				right: 0;
				width: 60upx;
				height: 60upx;
				font-size: 34upx;
				color: #c0c0c0;
			}
			input {
				padding-left: 28upx;
				height: 28upx;
				font-size: 28upx;
			}
		}
		.icon-btn {
			width: 60upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			.icon, .iconfont {	//单独  .icon不起作用,用.icon, .iconfont
				width:60upx;
				height: 60upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 42upx;
			}
		}
		
	}
	.place {
		background-color: #007AFF;//#ffffff;
		top: 100px;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	
	
	
</style>
