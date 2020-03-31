<template>
	<view>
		<page-status></page-status>
		<page-header></page-header>
		<!-- 分类页面 -->
		<view class="category-list">
			<!-- 左侧分类导航 -->
			<scroll-view scroll-y="true" class="left">
				<view class="row" v-for="(category,index) in categoryList" :key="index">
					<view class="text">{{ category.title }}</view>
				</view>
				
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import pageHeader from "../home/pageHeader.vue"
	import interfaces from "../../../utils/interfaces.js"
	export default {
		components: {
			pageHeader
		},
		data() {
			return {
				categoryList: []
			}
		},
		onLoad() {
			this.initData()
		},
		methods: {
			//初始化，获取后台数据
			initData() {
				uni.request({
					url: interfaces.getCategory,
					success: ((res) => {
						console.log(res)
						this.categoryList = res.data.data
						console.log(this.categoryList)
					})
				})
			}
		}
	}
</script>

<style lang="less">
	.category-list {
		width: 92%;
		margin: 0 4%;
		padding: 0 0 30upx 0;
		border-bottom: solid 2upx #f6f6f6;
		border: 1px solid #007AFF;
		
		.left {
			border: 1px solid #4CD964;
			margin-top: 100upx;
			display: flex;
			justify-content: space-around;
			width: 24%;
			background-color: #f2f2f2;
			align-items: center;
			.row {
				height: 100%;
				width: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				text {
					width: 100%;
					position: relative;
					font-size: 28upx;
					display: flex;
					justify-content: center;
					color: #3c3c3c;
				}
			}
			.row .red {
				text {
					color: #FFFFFF;
				}
				background-color: #CD2626;
			}
		}
		
	}

// .banner {
// 	width: 92%;
// 	margin: 40upx 4%;
// 	image {
// 		width: 100%;
// 		height: 36vw;
// 		border-radius: 4upx;
// 		box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.3);
// 	}
// }
// .promotion {
// 	width: 92%;
// 	margin: 10upx 4% 30upx 4%;
// 	.text {
// 		width: 100%;
// 		height: 60upx;
// 		font-size: 34upx;
// 		font-weight: 600;
// 		margin: 10upx;
// 	}
// 	.list {
// 		width: 100%;
// 		display: flex;
// 		justify-content: space-between;
// 		.column {
// 			width: 43%;
// 			padding: 15upx 3%;
// 			background-color: #ebf9f9;
// 			border-radius: 10upx;
// 			overflow: hidden;
// 			display: flex;
// 			justify-content: space-between;
// 			flex-wrap: wrap;
// 			.top {
// 				width: 100%;
// 				height: 40upx;
// 				display: flex;
// 				align-items: center;
// 				margin-bottom: 5upx;
// 				.title {
// 					font-size: 30upx;
// 				}	
// 			}
// 			.left {
// 				width: 50%;
// 				height: 18.86vw;
// 				display: flex;
// 				flex-wrap: wrap;
// 				align-content: space-between;
// 				.ad {
// 					margin-top: 5upx;
// 					width: 100%;
// 					font-size: 22upx;
// 					color: #acb0b0;
// 				}
// 				.into {
// 					width: 100%;
// 					font-size: 24upx;
// 					color: #aaa;
// 					margin-bottom: 5upx;
// 				}
// 			}
// 			.right {
// 				width: 18.86vw;
// 				height: 18.86vw;
// 				image {
// 					width: 18.86vw;
// 					height: 18.86vw;
// 				}
// 			}
// 		}
// 	}
// }
</style>
